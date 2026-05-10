import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: '150–160 characters for meta description',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Slug-style category: celebrity-news, lifestyle, etc.',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: '8 min read',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (upload)',
      type: 'image',
      options: {hotspot: true},
      description: 'Upload an image directly. Takes priority over Image URL.',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (external)',
      type: 'url',
      description: 'Fallback: paste an external image URL (Unsplash, etc.)',
    }),
    defineField({
      name: 'body',
      title: 'Body (HTML)',
      type: 'text',
      rows: 30,
      description: 'Full article HTML content',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare({title, category, media}) {
      return {title, subtitle: category ?? '', media}
    },
  },
})
