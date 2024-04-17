import AdminPost from '@/components/AdminPost/AdminPost';
import AdminPostForm from '@/components/AdminPostForm/AdminPostForm';
import AdminUser from '@/components/AdminUser/AdminUser';
import AdminUserForm from '@/components/AdminUserForm/AdminUserForm';
import Loading from '@/components/Loading/Loading';
import { auth } from '@/lib/auth';
import { getPosts, getUsers } from '@/lib/data';
import React, { Suspense } from 'react';

export const metadata = {
    title: "Admin Panel | Panda-Blog",
    description: "My first Next JS project",
  }
  

const page = async() => {
    const posts = await getPosts();
    const users = await getUsers();

    const session = await auth();

    return (
        <div>
            <div className='px-6 py-4 block md:flex'>
                <div className='w-full md:w-1/2 px-4 md:px-8 py-2'>
                    <p className='text-xl font-semibold text-white'>All Blogs</p>
                    <Suspense callback={<Loading />}>
                        {
                            posts.map(post => <AdminPost key={post.slug} post={post}/>)
                        }
                    </Suspense>
                </div>
                <div className='w-full md:w-1/2 py-2 flex flex-col items-center'>
                    <p className='text-xl font-semibold text-white px-4'>Add Post</p>
                    <AdminPostForm session={session}/>
                </div>
            </div>
            <div className='px-6 py-4 block md:flex'>
            <div className='w-full md:w-1/2 px-4 md:px-8 py-2'>
                    <p className='text-xl font-semibold text-white'>All Users</p>
                    <Suspense callback={<Loading />}>
                        {
                            users.map(user => <AdminUser key={user.username} user={user}/>)
                        }
                    </Suspense>
                </div>
                <div className='w-full md:w-1/2 py-2 flex flex-col items-center'>
                    <p className='text-xl font-semibold text-white px-4'>Add User</p>
                    <AdminUserForm/>
                </div>
            </div>
        </div>
    );
};

export default page;