import React from 'react';
import {
  AiOutlineMail,
  AiOutlineUser,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { MdOutlineHotelClass } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar';

const Registration = () => {
  return (
    <>
      <Navbar />
      <section className='flex min-h-screen items-center justify-center bg-gray-50 mt-[-4rem]'>
        <div className='flex max-w-5xl items-center rounded-2xl bg-gray-100 p-5'>
          <div className='px-8 md:w-1/2 md:px-16'>
            <div className='mb-8 flex'>
              <MdOutlineHotelClass className='text-3xl text-[#EB5148]' />
              <h2 className='ml-3 text-2xl font-bold'>
                <Link href='../' legacyBehavior>
                  <a>Ghureberai</a>
                </Link>
              </h2>
            </div>
            <h2 className='text-2xl font-bold'>Sign up</h2>
            <div className='mb-8 mt-3 text-xs'>
              <p>If you already have an account registered</p>
              <p>
                You can{' '}
                <button className='duration-180 text-[#EB5148] hover:font-bold'>
                  <Link href='../Login'>Login here!</Link>
                </button>
              </p>
            </div>

            <form action='' className='flex flex-col gap-4'>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <AiOutlineUser className='mr-3 mt-1 text-xl' />
                <input
                  type='text'
                  className='w-full focus:outline-none'
                  name='username'
                  placeholder='username'
                />
              </div>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <RiLockPasswordLine className='mr-3 text-xl' />
                <input
                  className='w-full focus:outline-none'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </div>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <AiOutlineMail className='mr-3 mt-1 text-xl' />
                <input
                  type='email'
                  className='w-full focus:outline-none'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <BsTelephone className='mr-3 mt-1 text-xl' />
                <input
                  type='text'
                  className='w-full focus:outline-none'
                  name='phone'
                  placeholder='+0187924378'
                />
              </div>
              <button className='mt-6 rounded-xl bg-[#EB5148] py-2 text-white duration-300 hover:scale-105'>
                Register
              </button>
            </form>

            <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
              <hr className='border-gray-400' />
              <p className='text-center text-sm'>or continue with</p>
              <hr className='border-gray-400' />
            </div>

            <div className='mx-auto mt-8 flex items-center justify-evenly py-2'>
              <button className='rounded-xl border  bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                <BiLogoFacebookCircle className='mr-2 text-4xl' />
              </button>
              <button className='rounded-xl border bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                <AiFillTwitterCircle className='mr-2 text-4xl' />
              </button>
              <button className='rounded-xl border bg-white text-sm text-[#002D74] duration-300 hover:scale-105'>
                <FcGoogle className='mr-2 text-4xl' />
              </button>
            </div>
          </div>

          <div className='hidden w-1/2 md:block'>
            <img
              className='rounded-2xl'
              src='https://images.unsplash.com/photo-1690800108768-efdcb2953cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='Image containing objects and furniture from hotel room'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
