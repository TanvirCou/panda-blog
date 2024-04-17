"use client"
import { addUser } from '@/lib/action';
import React from 'react';
import { useFormState } from "react-dom";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className='w-[95%] md:w-[90%]'>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>User Name</p>
                <input type="text" name='username' required placeholder='Enter your user name' className='w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500' />
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Email Address</p>
                <input type="email" name='email'  required placeholder='Enter your email' className='w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500' />
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Password</p>
                <div className='relative flex justify-end items-center'>
                    <input type="password" name='password' required minLength="6" placeholder='Enter your password' className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Confirm Password</p>
                <div className='relative flex justify-end items-center'>
                    <input type="password" name='confirmPassword'  required placeholder='Enter your password again' className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Image Url</p>
                <div className='relative flex justify-end items-center'>
                    <input type='text' name='img' placeholder='Enter your live image url' className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>User Role</p>
                <div className='relative flex justify-end items-center'>
                    <select name="isAdmin" className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 '>
                        <option value="false">Select User Role</option>
                        <option value="false">User</option>
                        <option value="true">Admin</option>
                    </select>
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
                <button className='bg-teal-600 hover:bg-teal-700 hover:text-gray-300 w-full h-10 rounded-md text-white text-md font-medium'>Create User</button>
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

export default AdminUserForm;