import Link from 'next/link'
import React from 'react'
import {MdOutlineHotelClass} from 'react-icons/md'
import {CgFacebook} from 'react-icons/cg'
import {IoLogoTwitter} from 'react-icons/io5'

const Footer = () => {
  return (
    <>
        <div className="flex w-full">

<footer className="w-full text-white bg-black body-font">
    <div
        className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
            <MdOutlineHotelClass className="text-3xl text-[#EB5148]"/>
            <h2 className="font-bold text-2xl ml-3">Ghureberai</h2>
            </a>
            <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a className="text-gray-500 cursor-pointer hover:text-white">
                        <CgFacebook className='text-2xl'/>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer hover:text-white">
                        <IoLogoTwitter className='text-2xl'/>
                    </a>
                </span>
            </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">About</h2>
                <nav className="mb-10 list-none">
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Company</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Careers</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Blog</a>
                    </li>
                </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Support</h2>
                <nav className="mb-10 list-none">
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Contact Support</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Help Resources</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Release Updates</a>
                    </li>
                </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Platform
                </h2>
                <nav className="mb-10 list-none">
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Terms &amp; Privacy</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Pricing</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">FAQ</a>
                    </li>
                </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Contact</h2>
                <nav className="mb-10 list-none">
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Send a Message</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">Request a Quote</a>
                    </li>
                    <li className="mt-3">
                        <a className="text-gray-500 cursor-pointer hover:text-white">+123-456-7890</a>
                    </li>
                </nav>
            </div>
        </div>
    </div>
    <div className="bg-black">
        <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-white capitalize text-center">© 2023 All rights reserved by <span className="text-[#EB5148]">Ghureberai</span></p>
        </div>
    </div>
</footer>

</div>
    </>
  )
}

export default Footer