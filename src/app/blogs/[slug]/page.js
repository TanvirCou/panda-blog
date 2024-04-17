import React, { Suspense } from 'react';
import Image from 'next/image'
import blogPic from "../../../../public/blog.jpg";
import dp from "../../../../public/noavatar.png";
import { getPosts, getSinglePost, getSingleUser } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const {slug} = params;

    return {
      title: `${slug} | Panda-Blog`,
      description: "My first Next JS project",
    }
  };

  export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map(post => ({
        slug: post.slug,
    }))
  }


const blogPage = async({params}) => {
    const {slug} = params;

    const post = await getSinglePost(slug);
    const user = await getSingleUser(post?.userId);

    if(slug !== post?.slug) {
        notFound();
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[85%] md:w-[95%] lg:w-[85%] md:flex block mt-4 md:mt-0'>
                <div className='w-[100%] md:w-[35%]'>
                    <div className='w-[100%] h-[500px] relative'>
                        <Image src={blogPic} alt=''fill className='rounded' placeholder='blur'/>
                    </div>
                </div>
                <div className='w-[100%] md:w-[60%] pl-0 md:pl-6 my-4 md:my-0'>
                    <p className='text-3xl font-semibold text-white'>{post?.title}</p>
                    <div className='flex items-center my-6'>
                        <div className='flex items-center'>
                        <div className='w-10 h-10 relative'>
                            <Image src={dp} alt='' fill className='rounded-full' placeholder='blur'/>
                        </div>
                        <div className='ml-2'>
                            <p className='text-sm text-gray-400'>Author:</p>
                            <Suspense callback="loading">
                                <p className='text-sm text-white'>{user?.username}</p>
                            </Suspense>
                        </div>
                        </div>
                        <div className='ml-8'>
                            <p className='text-gray-400 text-sm'>Published:</p>
                            <p className='text-white text-sm'>{post?.createdAt.toString().slice(4, 16)}</p>
                        </div>
                    </div>
                    <p className='text-white whitespace-pre-line text-wrap'>{post?.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default blogPage;