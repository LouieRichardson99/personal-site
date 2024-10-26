import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');

  return rss({
    title: "Louie Richardson's Blog",
    description:
      'Writing mainly about development and anything else that interests me.',
    site: context.site || '',
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    })),
    customData: `<language>en-GB</language>`
  });
}
