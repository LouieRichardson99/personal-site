import { defineCollection, z } from 'astro:content'

const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date()
  })
})

export const collections = {
  homepage: homepage,
  blog: blogCollection
}
