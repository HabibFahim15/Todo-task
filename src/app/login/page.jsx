"use client"

import Link from "next/link";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
 const router = useRouter()
  const handleLogin = async(e) => {
    e.preventDefault()
    const email = e.target.email.value;
		const password = e.target.password.value;
		const resp = await signIn('credentials',{
			email,
			password,
			redirect : false
		})
		if(resp.status === 200){
			router.push('/')
		}
  }

  return (
    <div className=' flex justify-center'>
     <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-700 text-gray-50" bis_skin_checked="1">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin}  className="space-y-6">
		<div className="space-y-1 text-sm" >
			<label htmlFor="email" className="block dark:text-gray-600">Email</label>
			<input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-green-600" />
		</div>
		<div className="space-y-1 text-sm" >
			<label htmlFor="password" className="block text-gray-50">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-green-600" />
			<div className="flex justify-end text-xs dark:text-gray-600" >
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-green-600 ">Login</button>
	</form>
	<div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300" bis_skin_checked="1"></div>
		
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
		<Link rel="noopener noreferrer" href="/signup" className="underline dark:text-gray-800">Sign Up</Link>
	</p>
</div>
   </div>
  );
};

export default page;