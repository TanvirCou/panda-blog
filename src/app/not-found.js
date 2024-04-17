import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-white flex flex-col justify-center items-center w-full h-[80vh]'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}