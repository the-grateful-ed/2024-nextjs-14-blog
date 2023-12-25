import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import Header from '@/components/header';
import { Badge } from '@/components/ui/badge';

import { client } from '@/sanity/lib/client';
import { Post } from '@/utils/interface';

// const dateFont = VT323({ weight: '400', subsets: ['latin'] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const BlogPost = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className='relative px-4 sm:px-6 lg:px-8 py-12'>
        <div className='mx-auto max-w-prose text-lg'>
          <h1>
            <span className='block text-center text-lg font-semibold text-primary'>
              {new Date(post?.publishedAt).toDateString()}
            </span>
            <Header title={post?.title} />
            <div className='mt-1'>
              {post?.tags?.map((tag) => (
                <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                  <Badge className='mr-2'>#{tag.name}</Badge>
                </Link>
              ))}
            </div>
            {/* <span className='mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              JavaScript for Beginners
            </span> */}
          </h1>
          <p className='mt-8 text-xl leading-8 text-gray-500'></p>
        </div>
        {/* <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            Blog Title
          </div> */}
      </div>
    </div>
  );
};
export default BlogPost;
