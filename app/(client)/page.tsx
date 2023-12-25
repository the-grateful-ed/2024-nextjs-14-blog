import Hero from '@/components/hero';
import PostComponent from '@/components/post-component';
import SocialIcons from '@/components/social-links';

import { client } from '@/sanity/lib/client';
import { Post } from '@/utils/interface';

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <main className='relative'>
      <Hero />
      <SocialIcons />
      <div className='space-y-4 overflow-hidden bg-accent px-2'>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
