"use client"
import {useState} from "react"
import { useRouter } from "next/navigation";
const EditBlogForm = ({id, title, description}) => {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const router = useRouter()
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({newTitle, newDescription}),
      });

      if(!res.ok){
        throw new Error("Failed to update the Blog")
      }
      router.refresh();
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
        onChange={e=> setNewTitle(e.target.value)}
        value={newTitle}
        className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Tittle" />
        <input onChange={e=> setNewDescription(e.target.value)} value={newDescription} className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Description" />
        <button type='submit' className='text-white py-3 px-6 w-fit font-bold bg-green-600'>Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlogForm;