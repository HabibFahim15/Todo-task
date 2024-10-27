import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link className='text-white font-bold' href={'/'}>Task</Link>
      <Link className='bg-white px-3 py-2' href={'/addBlog'}>Add Blogs</Link>
    </nav>
  );
};

export default Navbar;