import React from 'react'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {MdOutlineHotelClass} from 'react-icons/md'

const Login = () => {
  return (
	<>
		<section class="bg-gray-50 min-h-screen flex items-center justify-center">
			<div class="bg-gray-100 flex rounded-2xl max-w-5xl p-5 items-center">
				<div class="md:w-1/2 px-8 md:px-16">
				<div className='flex mb-8'>
					<MdOutlineHotelClass class="text-3xl"/>
					<h2 class="font-bold text-2xl ml-3">Ghureberai</h2>
				</div>
				<h2 class="font-bold text-2xl">Sign in</h2>
				<div class="mt-3 text-xs mb-8">
					<p>If you don’t have an account register.</p>
					<p>You can <button class="hover:font-bold duration-180 text-[#EB5148]">Register here!</button></p>
				</div>

      <form action="" class="flex flex-col gap-4">
       <div class="flex border-b border-[#002D74] w-full p-2">
	   <AiOutlineMail class="text-xl mr-3 mt-1"/>
        <input type="email" class="w-full focus:outline-none" name="email" placeholder="Email" />
	   </div>
		<div class="flex border-b border-[#002D74] w-full p-2"> 
			<RiLockPasswordLine class="text-xl mr-3"/>
          <input class="w-full focus:outline-none" type="password" name="password" placeholder="Password" />
		</div>
        <button class="bg-[#EB5148] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

	  <div class="text-xs py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400" />
        <p class="text-center text-sm">or continue with</p>
        <hr class="border-gray-400" /> 
      </div>


      <div className='flex justify-evenly items-center py-2 mt-8 mx-auto'>
	  <button class="bg-white border  rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
        <BiLogoFacebookCircle class="mr-2 text-4xl" />
      </button>
      <button class="bg-white border rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
        <AiFillTwitterCircle class="mr-2 text-4xl" />
      </button>
      <button class="bg-white border rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
		<FcGoogle class="mr-2 text-4xl" />
      </button>
	  </div>

      

      
    </div>

    <div class="md:block hidden w-1/2">
      <img class="rounded-2xl" src="https://images.unsplash.com/photo-1690369936917-0da2f88a8e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image containing natural surrounding"/>
    </div>
  </div>
</section>
	</>
  )
}

export default Login