import BlogCard from '@/components/BlogCard/BlogCard';
import { getPosts } from '@/lib/data';
import React from 'react';

export const metadata = {
    title: "Blogs Page | Panda-Blog",
    description: "My first Next JS project",
  }

  
const BlogsPage = async() => {
    const posts = await getPosts();

    return (
        <div className='flex justify-center w-full my-4'>
            <div className='flex flex-wrap items-center justify-center gap-6 w-[90%] md:w-[95%] lg:w-[90%]'>
            {
                posts.map(post => <BlogCard key={post.slug} post={post}/>)
            }
            
            </div>
        </div>
    );
};

export default BlogsPage;