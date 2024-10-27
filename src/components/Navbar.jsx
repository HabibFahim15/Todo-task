'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const session = useSession()
  console.log(session);
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link className='text-white font-bold' href={'/'}>Task</Link>
     <div className='flex justify-between gap-4'>
     <Link className='bg-white px-3 py-2' href={'/addBlog'}>Add Blogs</Link>
      { !session.data ?
        <Link className='bg-red-300 px-3 py-2' href={'/login'}>Login</Link> : <button className='bg-red-300 px-3 py-2' onClick={() => signOut()}>Log Out</button>
      }
     </div>
    </nav>
  );
};

export default Navbar;