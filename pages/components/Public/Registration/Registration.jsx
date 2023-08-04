import React from 'react'
import {AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdOutlineHotelClass} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'

const Registration = () => {
  return (
	<>
		<section class="bg-gray-50 min-h-screen flex items-center justify-center">
			<div class="bg-gray-100 flex rounded-2xl max-w-5xl p-5 items-center">
				<div class="md:w-1/2 px-8 md:px-16">
				<div className='flex mb-8'>
					<MdOutlineHotelClass class="text-3xl"/>
					<h2 class="font-bold text-2xl ml-3">Ghureberai</h2>
				</div>
				<h2 class="font-bold text-2xl">Sign up</h2>
				<div class="mt-3 text-xs mb-8">
					<p>If you already have an account registered</p>
					<p>You can <button class="hover:font-bold duration-180 text-[#EB5148]">Login here!</button></p>
				</div>

      <form action="" class="flex flex-col gap-4">
       <div class="flex border-b border-[#002D74] w-full p-2">
	   <AiOutlineUser class="text-xl mr-3 mt-1"/>
        <input type="text" class="w-full focus:outline-none" name="username" placeholder="username" />
	   </div>
		<div class="flex border-b border-[#002D74] w-full p-2"> 
			<RiLockPasswordLine class="text-xl mr-3"/>
          <input class="w-full focus:outline-none" type="password" name="password" placeholder="Password" />
		</div>
       <div class="flex border-b border-[#002D74] w-full p-2">
	   <AiOutlineMail class="text-xl mr-3 mt-1"/>
        <input type="email" class="w-full focus:outline-none" name="email" placeholder="Email" />
	   </div>
       <div class="flex border-b border-[#002D74] w-full p-2">
	   <BsTelephone class="text-xl mr-3 mt-1"/>
        <input type="text" class="w-full focus:outline-none" name="phone" placeholder="+0187924378" />
	   </div>
        <button class="bg-[#EB5148] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-6">Register</button>
      </form>

      

      
    </div>

    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="https://images.unsplash.com/photo-1690800108768-efdcb2953cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image containing objects and furniture from hotel room"/>
    </div>
  </div>
</section>
	</>
  )
}

export default Registration