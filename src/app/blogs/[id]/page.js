import React from 'react';
import Image from 'next/image'
import blogPic from "../../../../public/blog.jpg";
import dp from "../../../../public/jn.png";


const blogPage = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[85%] md:w-[95%] lg:w-[85%] md:flex block mt-4 md:mt-0'>
                <div className='w-[100%] md:w-[35%]'>
                    <div className='w-[100%] h-[500px] relative'>
                        <Image src={blogPic} alt=''fill className='rounded'/>
                    </div>
                </div>
                <div className='w-[100%] md:w-[60%] pl-0 md:pl-6 my-4 md:my-0'>
                    <p className='text-3xl font-semibold text-white'>Title</p>
                    <div className='flex items-center my-6'>
                        <div className='flex items-center'>
                        <div className='w-10 h-10 relative'>
                            <Image src={dp} alt='' fill className='rounded-full'/>
                        </div>
                        <div className='ml-2'>
                            <p className='text-sm text-gray-400'>Author:</p>
                            <p className='text-sm text-white'>Tanvir Ahmed</p>
                        </div>
                        </div>
                        <div className='ml-8'>
                            <p className='text-gray-400 text-sm'>Published:</p>
                            <p className='text-white text-sm'>01.02.2011</p>
                        </div>
                    </div>
                    <p className='text-white whitespace-pre-line text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae alias sunt, eius officia dolorem deleniti magnam non dolore iusto soluta doloribus nulla adipisci, molestiae reprehenderit excepturi minus rem repellendus?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae alias sunt, eius officia dolorem deleniti magnam non dolore iusto soluta doloribus nulla adipisci, molestiae reprehenderit excepturi minus rem repellendus?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae alias sunt, eius officia dolorem deleniti magnam non dolore iusto soluta doloribus nulla adipisci, molestiae reprehenderit excepturi minus rem repellendus?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae alias sunt, eius officia dolorem deleniti magnam non dolore iusto soluta doloribus nulla adipisci, molestiae reprehenderit excepturi minus rem repellendus?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default blogPage;