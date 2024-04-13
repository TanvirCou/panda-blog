import React from 'react';
import Image from 'next/image'
import blogPic from "../../../public/blog.jpg";
import Link from 'next/link';

const BlogCard = () => {
    return (
        <div className='w-[90%] sm:w-[45%] md:w-[35%] lg:w-[25%] shadow-lg p-2'>
            <div className='w-full flex items-center'>
                <div className='w-[90%] h-[300px] relative'>
                <Image src={blogPic} alt=''fill className='rounded'/>
                </div>
                <p style={{transform: "rotate(270deg)"}} className='font-medium text-white w-[10%]'>01.01.12</p>
            </div>
            <div className='w-[90%] text-white py-0.5'>
                <p className='text-lg font-semibold'>Title</p>
                <p className='text-sm text-gray-400 py-0.5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ut officiis ....</p>
                <Link href="/blogs/1" className='text-sm underline'>Read more</Link>
            </div>
        </div>
    );
};

export default BlogCard;