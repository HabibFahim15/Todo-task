import DeleteBtn from './DeleteBtn';
import Link from 'next/link';
import { FaEdit } from "react-icons/fa";

const getBlogs = async () => {
  try {
    const res = await fetch('https://todo-task-dxg9p8f2o-habib-hossains-projects.vercel.app/api/topics', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics")
    }
    return res.json()
  } catch (error) {
    console.log('Error loading topics', error);
  }
}

const Blog = async () => {
  const { topics } = await getBlogs();
  return (
    <>
      {topics.map(t => (
        <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
          <div>
            <h2 className='font-bold text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className='flex gap-2'>
            <DeleteBtn id={t._id} />
            <Link href={`/editBlog/${t._id}`}>
              <FaEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;