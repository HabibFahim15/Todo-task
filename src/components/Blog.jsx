import React from 'react';
import DeleteBtn from './DeleteBtn';
import Link from 'next/link';
import { FaEdit } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
          <h2 className='font-bold text-2xl'>Blog title</h2>
          <div>Blog Description</div>
        </div>
        <div className='flex gap-2'>
          <DeleteBtn />
          <Link href={'/editBlog/123'}>
            <FaEdit size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;