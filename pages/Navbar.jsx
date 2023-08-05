import React from 'react'
import {IoIosLogIn} from 'react-icons/io'
import {MdOutlineHotelClass} from 'react-icons/md'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
<nav class="w-100 px-8 md:px-auto">
	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div class="text-black md:order-1">
        <div className="flex">
        <MdOutlineHotelClass class="text-3xl"/>
        <h2 class="font-bold text-2xl ml-3">Ghureberai</h2>
        </div>
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
				<li class="md:px-4 md:py-2 hover:text-[#EB5148]"><Link href="/" legacyBehavior><a>Home</a></Link></li>
				<li class="md:px-4 md:py-2 hover:text-[#EB5148]"><Link href="/Package"  legacyBehavior><a>Package</a></Link></li>
				<li class="md:px-4 md:py-2 hover:text-[#EB5148]"><Link href="/About" legacyBehavior ><a>About</a></Link></li>
				<li class="md:px-4 md:py-2 hover:text-[#EB5148]"><Link href="/contact"  legacyBehavior><a>Contact</a></Link></li>
			</ul>
		</div>
		<div class="order-2 md:order-3">
			<button class="px-4 py-2 bg-[#EB5148] hover:bg-white hover:text-[#EB5148] border-2 hover:border-black rounded-xl flex items-center gap-2">
                <IoIosLogIn />
                <span><Link href="../Login" legacyBehavior><a>Login</a></Link></span>
            </button>
		</div>
	</div>
</nav>
    </>
  )
}

export default Navbar