// Based on instructions here: 
// https://www.kozhuhds.com/blog/generating-static-open-graph-og-images-in-astro-using-vercel-og/#step-1-install-vercelog/og.png
// https://arne.me/blog/static-og-images-in-astro

import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';

interface Props {
    params: { slug: string };
    props: { post: CollectionEntry<'portfolio'> };
}

export async function GET({ props }: Props) {
    const { post } = props;

    // using custom font files
    const larkenVar = fs.readFileSync(path.resolve('public/fonts/larken-variable.woff'));
    
    // Logo image file to Base64 to use as background image, 
    // and to get around file type unknown error from fs 
    // if we were reading the PNG from buffer
    const logoBase64 = (await fs.readFileSync("src/images/logo.png")).toString("base64");

    // post cover with Image is pretty tricky for dev and build phase
    const postCover = fs.readFileSync(
        process.env.NODE_ENV === 'development'
            ? path.resolve(
                post.data.image.url.src.replace(/\?.*/, '').replace('/@fs', ''),
            )
            : path.resolve(post.data.image.url.src.replace('/', 'dist/')),
    );

    // Astro doesn't support tsx endpoints so usign React-element objects
    const html = {
        type: 'div',
        props: {
            children: [
                {
                    type: 'div',
                    props: {
                        // using tailwind
                        tw: 'w-full h-full flex',
                        children: [
                            {
                                type: 'img',
                                props: {
                                    src: postCover.buffer,
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        opacity: '0.2'
                                    }
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        tw: 'absolute h-full w-full p-24 flex flex-col items-start justify-between',
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        height: '32px',
                                        width: '200px',
                                        backgroundImage: `url('data:image/png;base64,${logoBase64}')`,
                                        backgroundRepeat: 'no-repeat',
                                    }
                                },
                            },
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '96px',
                                        fontFamily: 'LarkenVar',
                                        fontWeight: 400,
                                    },
                                    children: post.data.title,
                                },
                            }
                        ],
                    },
                },
            ],
            tw: 'w-full h-full relative flex',
            style: {
                background: '#fffcf5',                
            },
        },
    };

    return new ImageResponse(html, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'LarkenVar',
                data: larkenVar.buffer,
                style: 'normal',
                weight: 400,
            },
        ],
    });
}

// to generate an image for each portfolio posts in a collection
export async function getStaticPaths() {
    const portfolioPosts = await getCollection('portfolio');
    return portfolioPosts.map((post) => ({
        params: { slug: post.slug },
        props: { post },
    }));
}