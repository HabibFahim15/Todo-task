
const page = () => {
  return (
    <div>
      <form className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Tittle" />
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder="Blog Description" />
        <button className='text-white py-3 px-6 w-fit font-bold bg-green-600'>Add Blog</button>
      </form>
    </div>
  );
};

export default page;