import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';

import { Post } from '@/utils/interface';

interface Props {
  post: Post;
}

const font = JetBrains_Mono({ weight: '400', subsets: ['latin'] });
// const dateFont = VT323({ weight: '400', subsets: ['latin'] });

const PostComponent = ({ post }: Props) => {
  return (
    <Card
      key={post?._id}
      className='overflow-hidden border-primary border rounded-xl shadow-primary group'
    >
      <Link
        href={`/posts/${post?.slug?.current}`}
        className='block group-hover:bg-primary/85'
      >
        <CardHeader
          className={`${font.className} border-b-2 border-primary flex flex-row justify-between items-end py-1.5 text-sm text-right`}
        >
          <h5 className='text-xl font-medium leading-tight text-primary group-hover:text-accent-foreground'>
            {post?.title}
          </h5>
          <h5 className='font-font'>
            {new Date(post?.publishedAt).toDateString()}
          </h5>
        </CardHeader>
        <div className='p-6'>
          <p className='text-base text-primary group-hover:text-accent-foreground'>
            {post?.excerpt}
          </p>
        </div>
        <div className='border-t-2 border-primary px-6 py-3 space-x-3'>
          {post?.tags?.map((tag) => (
            <Badge key={tag?._id} className='text-sm lowercase'>
              #{tag?.name}
            </Badge>
          ))}
        </div>
      </Link>
    </Card>
  );
};

export default PostComponent;
