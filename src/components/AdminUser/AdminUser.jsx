import Image from 'next/image';
import React from 'react';
import dp from "../../../public/noavatar.png";
import { deleteUser } from '@/lib/action';

const AdminUser = ({user}) => {
    return (
        <div className='flex items-center justify-between my-2'>
            <div className='flex items-center'>
                <div className='w-10 h-10 object-cover relative'>
                <Image src={user?.img ? user.img : dp} alt='' fill className='rounded-full'/>
                </div>
                <p className='font-medium text-white ml-2'>{user.username}</p>
            </div>
            <form action={deleteUser}>
                <input type="text" defaultValue={user.id} name='id' className='hidden'/>
                <button className='py-1 px-2 bg-red-400 text-white text-sm font-medium rounded'>Delete</button>
            </form>
        </div>
    );
};

export default AdminUser;