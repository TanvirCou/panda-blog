"use client"
import { useFormState } from "react-dom";
import { handleGithubLogin, handleLogin } from '@/lib/action';
import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    const [state, formAction] = useFormState(handleLogin, undefined);

    // const router = useRouter();

    // useEffect(() => {
    //     state?.success && router.push("/");
    // }, [state?.success, router]);

    return (
        <div className='flex flex-col items-center'>
            <form action={formAction} className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Email Address</p>
                <input type="email" name="email" required placeholder='Enter your email' className='w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500' />
            </div>
            <div className='px-4 py-1.5'>
                <p className='text-sm text-white'>Password</p>
                <div className='relative flex justify-end items-center'>
                    <input type="password" name='password' required placeholder='Enter your password' className='flex justify-center w-full h-10 border-2 border-gray-300 px-2 rounded-md placeholder:text-md placeholder:font-medium text-md font-medium focus:outline-teal-500 ' />
                </div>
            </div>
            <div className='flex justify-between items-center px-4 pt-0.5 pb-2'>
                <div className='flex items-center'>
                    <input type="checkbox" name="remember-me" className='accent-teal-500' />
                    <p className='text-sm font-medium pl-2 text-white'>Remember me</p>
                </div>
                <p className='text-sm font-medium underline cursor-pointer text-white'>Forgotten Password?</p>
            </div>
            <div className='px-4 py-1.5'>
                <button className='bg-teal-600 hover:bg-teal-700 hover:text-gray-300 w-full h-10 rounded-md text-white text-md font-medium'>Login</button>
            </div>
            {state?.error && 
            <div className=' text-center text-white text-sm bg-red-400 py-2 mx-4 rounded-md'>
                <p>{state?.error}</p>
            </div>}
            <div className=' text-center text-white text-sm'>
                <p>Create an account? <Link href="/register" className='underline font-medium cursor-pointer'>Register</Link></p>
            </div>
        </form>
            <form className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]' action={handleGithubLogin}>
            <div className='px-4 py-4'>
            <button className='bg-teal-600 hover:bg-teal-700 hover:text-gray-300 w-full h-10 rounded-md text-white text-md font-medium'>Login with Github</button>
            </div>
            </form>
            
        </div>
    );
};

export default LoginForm;