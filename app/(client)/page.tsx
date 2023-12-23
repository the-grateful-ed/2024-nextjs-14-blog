import Header from '@/components/header';
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
  console.log(posts, 'posts');

  return (
    <main className='relative'>
      <div
        className='relative overflow-hidden bg-cover bg-no-repeat rounded-t-xl'
        style={{
          backgroundPosition: '50%',
          backgroundImage:
            'url("https://tecdn.b-cdn.net/img/new/slides/146.webp")',
          height: '350px',
        }}
      >
        <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'>
          <div className='flex h-full items-center justify-center'>
            <div className='px-6 text-center text-white md:px-12'>
              <Header title='Articles' />
              <h3 className='mb-8 text-3xl font-bold'>Subeading</h3>
            </div>
          </div>
        </div>
      </div>
      <SocialIcons />
      <div className='space-y-4 overflow-hidden bg-accent px-2'>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
