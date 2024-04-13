import BlogCard from '@/components/BlogCard/BlogCard';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='flex justify-center w-full my-4'>
            <div className='flex flex-wrap items-center justify-center gap-6 w-[90%] md:w-[95%] lg:w-[90%]'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            
            </div>
        </div>
    );
};

export default BlogsPage;