import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { Post } from '@/lib/posts'

const projectId = '5blie178'
const dataset = 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export type SanityPost = {
  _id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  readTime: string
  publishedAt: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any
  imageUrl?: string
}

/**
 * Resolves the display image for a post.
 * Priority: mainImage (uploaded asset) → imageUrl (external URL) → empty string
 */
export function getImageUrl(
  post: Pick<SanityPost, 'mainImage' | 'imageUrl'>,
  width = 1200,
  height = 630,
): string {
  if (post.mainImage?.asset) {
    return builder.image(post.mainImage).width(width).height(height).url()
  }
  return post.imageUrl ?? ''
}

/** Convert a SanityPost to the Post shape ArticleCard and pages expect. */
export function toPost(sp: SanityPost): Post {
  return {
    slug: sp.slug,
    title: sp.title,
    excerpt: sp.excerpt ?? '',
    content: sp.body ?? '',
    category: sp.category ?? '',
    image: getImageUrl(sp),
    date: sp.publishedAt ? sp.publishedAt.slice(0, 10) : '',
    readTime: sp.readTime ?? '',
  }
}

const POST_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  body,
  category,
  imageUrl,
  mainImage,
  readTime,
  publishedAt
`

export async function getAllPosts(): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) { ${POST_FIELDS} }`,
  )
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`,
    { slug },
  )
}

export async function getPostsByCategory(category: string): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post" && category == $category] | order(publishedAt desc) { ${POST_FIELDS} }`,
    { category },
  )
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post" && category == $category && slug.current != $currentSlug]
      | order(publishedAt desc)[0...$limit] { ${POST_FIELDS} }`,
    { category, currentSlug, limit },
  )
}
