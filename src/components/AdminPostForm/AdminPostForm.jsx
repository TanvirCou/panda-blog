"use client"
import { addPost } from '@/lib/action';
import React from 'react';
import { useFormState } from "react-dom";

const AdminPostForm = ({session}) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form action={formAction} className='w-[95%] md:w-[90%]'>
            <input type="text" name="userId" defaultValue={session.user.id} className='hidden'/>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Title</p>
                <input type="text" name='title' required placeholder='Enter your post title' className='w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500' />
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Slug</p>
                <input type="text" name='slug'  required placeholder='Enter your post slug' className='w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500' />
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Image Url</p>
                <div className='relative flex justify-end items-center'>
                    <input type='text' name='img' placeholder='Enter your live image url' className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Description</p>
                <div className='relative flex justify-end items-center'>
                    <textarea type="text" name='desc'  required placeholder='Enter your post desc' className='flex justify-center w-full h-24 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            {/* <div className='px-4 py-2.5 flex items-center'>
                <div className='h-8 w-8 rounded-full'>
                    {avatar ? <img src={URL.createObjectURL(avatar)} alt="" className='h-full w-full object-cover rounded-full' /> :
                        <RxAvatar className='w-8 h-8' />
                    }
                </div>
                <div className='px-4'>
                    <label htmlFor="file-input">
                        <p className='text-sm font-medium border border-gray-300 w-fit py-1.5 px-4 rounded-md cursor-pointer'>Upload a file</p>
                        <input type="file" name="avatar" id="file-input" className='sr-only' onChange={(e) => handleFile(e.target.files[0])} />
                    </label>
                </div>
            </div> */}
            <div className='px-4 py-1.5'>
                <button className='bg-teal-600 hover:bg-teal-700 hover:text-gray-300 w-full h-10 rounded-md text-white text-md font-medium'>Create Post</button>
            </div>
            {state?.error && 
            <div className=' text-center text-white text-sm bg-red-400 py-2 mx-4 rounded-md'>
                <p>{state?.error}</p>
            </div>}
            {/* {state?.error && 
            <div className=' text-center text-white text-sm bg-red-400 py-2 mx-4 rounded-md'>
                <p>{state?.error}</p>
            </div>}
            <div className=' text-center text-white text-sm'>
                <p>Already have an account? <Link href="/login" className='underline font-medium cursor-pointer'>Login</Link></p>
            </div> */}
        </form>
    );
};

export default AdminPostForm;