import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
// import sanitizeHtml from 'sanitize-html';
// import MarkdownIt from 'markdown-it';
// const parser = new MarkdownIt();

export async function GET(context) {
const posts = (await getCollection("posts")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
);
  return rss({
    title: 'Dusk | The journal of Rhys Jones',
    description: 'Intersections of life, design, and code.',
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        customData: post.data.customData,
        link: `/journal/${post.slug}/`,
    })),
  });
}