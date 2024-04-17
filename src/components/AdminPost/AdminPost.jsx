import Image from 'next/image';
import React from 'react';
import blogPic from "../../../public/blog.jpg";
import { deletePost } from '@/lib/action';

const AdminPost = ({post}) => {
    return (
        <div className='flex items-center justify-between my-2'>
            <div className='flex items-center'>
                <div className='w-10 h-10 object-cover relative'>
                <Image src={post.img ? post?.img : blogPic} alt='' fill className='rounded-full'/>
                </div>
                <p className='font-medium text-white ml-2'>{post?.title}</p>
            </div>
            <form action={deletePost}>
                <input type="text" defaultValue={post?.id} name='id' className='hidden'/>
                <button className='py-1 px-2 bg-red-400 text-white text-sm font-medium rounded'>Delete</button>
            </form>
        </div>
    );
};

export default AdminPost;