'use client';
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const DeleteBtn = ({ id }) => {
  const router = useRouter()
  const removeTopic = async () => {

    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`https://todo-task-dxg9p8f2o-habib-hossains-projects.vercel.app/api/topics?id=${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        router.refresh();
      }

    }
  }
  return (
    <button onClick={removeTopic} className='text-red-600'>
      <FaRegTrashCan size={24} />
    </button>
  );
};

export default DeleteBtn;