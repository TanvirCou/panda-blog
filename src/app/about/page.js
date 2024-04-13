import React from 'react';
import Image from 'next/image'
import aboutPic from "../../../public/about.png";

const AboutPage = () => {
    return (
        <main className='flex justify-center w-full'>
      <div className="flex w-[97%] md:w-[85%]">
        <div className="w-[60%] text-white flex flex-col justify-around">
        <p className='text-xl text-blue-600 font-semibold'>About Agency</p>
          <p className='text-3xl md:text-4xl leading-12 font-semibold md:w-[80%] py-3 md:py-0'>We create digital ideas that are bigger, bolder, braver and better.</p>
          <p className='md:w-[80%] text-sm md:text-base'>We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.</p>
          <div className='block mt-2 md:mt-0 md:flex items-center justify-between md:w-[80%]'>
            <div>
                <p className='text-2xl text-blue-600 font-semibold'>10 k+</p>
                <p className='text-sm'>Year of experience</p>
            </div>
            <div className='my-2 md:my-0'>
                <p className='text-2xl text-blue-600 font-semibold'>234 k+</p>
                <p className='text-sm'>People reached</p>
            </div>
            <div>
                <p className='text-2xl text-blue-600 font-semibold'>4 k+</p>
                <p className='text-sm'>Services and Plugins</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] pt-16 md:pt-0">
            <div className='w-[100%] h-[400px] relative flex justify-center'>
              <Image src={aboutPic} alt=''/>
            </div>
        </div>
      </div>
    </main>
    );
};

export default AboutPage;