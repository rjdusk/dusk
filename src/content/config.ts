import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),

      image: z.object({
        url: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        alt: z.string()
      }),

      tags: z.array(z.string())
    })
 });

export const collections = {
  posts: postsCollection,
};
