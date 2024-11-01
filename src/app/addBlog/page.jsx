'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
const addBlogs = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required.')
    }

    try {
      const res = await fetch('https://todo-task-dxg9p8f2o-habib-hossains-projects.vercel.app/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });
      if (res.ok) {
        router.push('/');
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Tittle" />
        <input onChange={(e) => setDescription(e.target.value)}
          value={description} className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Description" />
        <button type="submit" className='text-white py-3 px-6 w-fit font-bold bg-green-600'>Add Blog</button>
      </form>
    </div>
  );
};

export default addBlogs;