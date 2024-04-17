"use client"
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { handleLogout } from "@/lib/action";


const Navbar = ({session}) => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Blogs",link:"/blogs"},
        {name:"Contact",link:"/contact"},
      ];

    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className='shadow-md w-full top-0 left-0 z-20 sticky'>
            <div className={`md:flex items-center justify-between ${open ? "bg-white" : "bg-sky-950"} py-4 md:px-36 px-7`}>
                <div className={`font-bold text-2xl md:text-3xl cursor-pointer items-center font-[Poppins] 
      ${open ? "text-sky-950" :"text-white" }`}>
                    <Link href="/">
                    Panda-Blog  
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
                    {open ? <RxCross2 className="text-sky-950"/> : <MdMenu color="white"/>}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static ${open ? "bg-white" : "bg-sky-950"} md:z-auto z-[-1] left-0 w-full md:w-auto text-center transition-all duration-500 ease-in  ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    {Links.map(l => (
                        <li className='md:ml-8 md:my-0 my-6' key={l.name}>
                        <Link href={l.link} className={`${open ? pathname === l.link ? "bg-sky-950 !text-white " : "text-sky-950" : "text-white"} ${pathname === l.link && "bg-white !text-sky-950 max-md:bg-sky-950 max-md:text-white px-3 py-1 rounded-2xl"} text-sm hover:text-gray-400 duration-500`}>{l.name}</Link>
                        </li>
                    ))}

                    {
                        session?.user ?
                        <div className="flex max-md:flex-col items-center">
                        { session?.user.isAdmin &&
                            <li className='md:ml-8 md:my-0 mb-6' >
                            <Link href="/admin" className={`${open ? pathname === "/admin" ? "bg-sky-950 !text-white " : "text-sky-950" : "text-white"} ${pathname === "/admin" && "bg-white !text-sky-950 max-md:bg-sky-950 max-md:text-white px-3 py-1 rounded-2xl"} text-sm hover:text-gray-400 duration-500`}>Admin</Link>
                            </li> }
                            <form action={handleLogout}>
                            <button className={`md:ml-8 md:my-0 mb-4 ${open ? "bg-sky-950 text-white" :"bg-white text-sky-950"} px-2 py-0.5 rounded-sm text-sm`}>Logout</button>
                            </form>
                            </div> :
                            <li className='md:ml-8 md:my-0 my-6' >
                            <Link href="/login" className={`${open ? pathname === "/login" ? "bg-sky-950 !text-white " : "text-sky-950" : "text-white"} ${pathname === "/login" && "bg-white !text-sky-950 max-md:bg-sky-950 max-md:text-white px-3 py-1 rounded-2xl"} text-sm hover:text-gray-400 duration-500`}>Login</Link>
                            </li>
                        
                    }
                    
                    {/* <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</a>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</a>
                    </li> */}
                </ul>

            </div>

        </div>
    );
};

export default Navbar;