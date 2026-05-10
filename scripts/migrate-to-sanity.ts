/**
 * Migrate posts from lib/posts.ts → Sanity CMS
 *
 * Prerequisites:
 *   1. Create a write token in sanity.io/manage → project → API → Tokens
 *   2. Add SANITY_WRITE_TOKEN to .env.local
 *
 * Run:
 *   npx tsx scripts/migrate-to-sanity.ts
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error('❌  SANITY_WRITE_TOKEN not set in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId: '5blie178',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// Inline the posts type so the script is self-contained without path-alias resolution
type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  image: string
  date: string
  readTime: string
}

async function migrate() {
  // Dynamic import so ts path aliases aren't needed
  const { posts } = (await import('../lib/posts')) as { posts: Post[] }

  console.log(`Migrating ${posts.length} posts to Sanity…\n`)

  let ok = 0
  let fail = 0

  for (const post of posts) {
    const doc = {
      _type: 'post',
      _id: `post-${post.slug}`,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      body: post.content,
      category: post.category,
      imageUrl: post.image,
      readTime: post.readTime,
      publishedAt: new Date(post.date).toISOString(),
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓  ${post.slug}`)
      ok++
    } catch (err) {
      console.error(`  ✗  ${post.slug}`, err)
      fail++
    }
  }

  console.log(`\nDone — ${ok} succeeded, ${fail} failed.`)
}

migrate().catch((err) => {
  console.error(err)
  process.exit(1)
})
