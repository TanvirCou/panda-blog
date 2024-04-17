import Image from 'next/image'
import brandsPic from "../../public/brands.png";
import heroGif from "../../public/heroGif.gif";
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex justify-center w-full'>
      <div className="flex w-[95%] md:w-[85%]">
        <div className="w-[60%] text-white flex flex-col justify-around">
          <p className='text-6xl md:text-7xl leading-12 font-semibold'>Creative <br /> Thoughts <br /> Agency</p>
          <p className='w-[90%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eaque commodi omnis nulla eveniet eius, sunt natus deserunt sint quod,</p>
          <div>
            <Link href="/about">
              <button className='bg-purple-600 text-white px-3 py-1 rounded-md font-medium'>Learn more</button>
              </Link>
            <Link href="/contact">
              <button className='bg-white text-sky-950 px-3 py-1 rounded-md font-medium ml-4'>Contact</button>
            </Link>
          </div>
          <div className='w-full md:w-[80%] h-[50px] relative'>
            <Image src={brandsPic} alt='' fill={true} placeholder='blur'/>
          </div>
        </div>
        <div className="w-[40%]">
            <div className='w-[100%] h-[500px] relative flex justify-center'>
              <Image src={heroGif} alt='' fill/>
            </div>
        </div>
      </div>
    </main>
  );
}
