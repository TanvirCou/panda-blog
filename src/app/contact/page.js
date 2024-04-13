import React from 'react';
import Image from 'next/image'
import contactPic from "../../../public/contact.png";

const ContactPage = () => {
    return (
        <main className='flex justify-center w-full'>
      <div className="block md:flex w-[95%] md:w-[85%]">
        <div className="w-full md:w-[50%]">
            <div className='w-[90%] h-[400px] relative flex justify-center'>
              <Image src={contactPic} alt=''/>
            </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center mt-8 md:mt-0">
            <div className='w-[90%] md:w-[80%]'>
                <input type="text" className='w-full bg-indigo-200 h-9 px-1 outline-white rounded-md placeholder:text-black' placeholder='Enter your Name'/>
                <br />
                <br />
                <input type="email" className='w-full bg-indigo-200 h-9 px-1 outline-white rounded-md placeholder:text-black' placeholder='Email Address'/>
                <br /> <br />
                <input type="number" className='w-full bg-indigo-200 h-9 px-1 outline-white rounded-md placeholder:text-black' placeholder='Phone Number(optional)'/>
                <br /><br />
                <textarea rows="8" placeholder='Enter message' className='w-full bg-indigo-200 rounded-md px-1 outline-white placeholder:text-black'></textarea>
                <br /> <br />
                <button className='bg-blue-500 w-full h-9 text-white font-medium rounded-md'>Submit</button>
            </div>
        </div>
      </div>
    </main>
    );
};

export default ContactPage;