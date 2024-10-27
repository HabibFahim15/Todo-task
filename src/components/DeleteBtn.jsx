'use client';
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const DeleteBtn = ({id}) => {
  const router = useRouter()
  const removeTopic = async() =>{
    
    const confirmed = confirm('Are you sure?');

    if(confirmed){
     const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE"
      });
      if(res.ok){
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