import React from 'react'
import {AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {MdOutlineHotelClass} from 'react-icons/md'
import Link from 'next/link'
import Navbar from '../Navbar'

const Login = () => {
  return (
	<>
  <Navbar/>
		<section className="bg-gray-50 min-h-screen flex items-center justify-center">
			<div className="bg-gray-100 flex rounded-2xl max-w-5xl p-5 items-center">
				<div className="md:w-1/2 px-8 md:px-16">
				<div className='flex mb-8'>
					<MdOutlineHotelClass className="text-3xl text-[#EB5148]"/>
					<h2 className="font-bold text-2xl ml-3"><Link href="../">Ghureberai</Link></h2>
				</div>
				<h2 className="font-bold text-2xl">Sign in</h2>
				<div className="mt-3 text-xs mb-8">
					<p>If you don’t have an account register.</p>
					<p>You can <button className="hover:font-bold duration-180 text-[#EB5148]"><Link href="../Registration">Register Here!</Link></button></p>
				</div>

      <form action="" className="flex flex-col gap-4">
       <div className="flex border-b border-[#002D74] w-full p-2">
	   <AiOutlineMail className="text-xl mr-3 mt-1"/>
        <input type="email" className="w-full focus:outline-none" name="email" placeholder="Email" />
	   </div>
		<div className="flex border-b border-[#002D74] w-full p-2"> 
			<RiLockPasswordLine className="text-xl mr-3"/>
          <input className="w-full focus:outline-none" type="password" name="password" placeholder="Password" />
		</div>
        <button className="bg-[#EB5148] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

	  <div className="text-xs py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">or continue with</p>
        <hr className="border-gray-400" /> 
      </div>


      <div className='flex justify-evenly items-center py-2 mt-8 mx-auto'>
	  <button className="bg-white border  rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
        <BiLogoFacebookCircle className="mr-2 text-4xl" />
      </button>
      <button className="bg-white border rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
        <AiFillTwitterCircle className="mr-2 text-4xl" />
      </button>
      <button className="bg-white border rounded-xl text-sm hover:scale-105 duration-300 text-[#002D74]">
		<FcGoogle className="mr-2 text-4xl" />
      </button>
	  </div>

      

      
    </div>

    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="https://images.unsplash.com/photo-1690369936917-0da2f88a8e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image containing natural surrounding"/>
    </div>
  </div>
</section>
	</>
  )
}

export default Login