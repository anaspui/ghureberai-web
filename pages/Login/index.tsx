import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineHotelClass } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
// import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';
import Navbar from '../Navbar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState('');
  const token = Cookies.get('token');
  // if (token) {
  //   console.log('token:', token);
  // }
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ghureberai-api-production-9952.up.railway.app/auth/login',
        {
          Username: Username,
          Password: Password,
        }
      );
      if (response.status === 200) {
        const data = response.data;
        Cookies.set('token', data.AccessToken, {
          sameSite: 'none',
          secure: true,
        });

        // document.cookie = `token=${data.AccessToken}; SameSite=None; Secure`;
        localStorage.setItem('user', 'true');
        // router.push('/');
        window.location.href = '/';
        setError('');
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <section className='mt-[-4rem] flex min-h-screen items-center justify-center bg-gray-50'>
        <div className='flex max-w-5xl items-center rounded-2xl bg-gray-100 p-5 shadow-xl'>
          <div className='px-8 md:w-1/2 md:px-16'>
            <div className='mb-8 flex'>
              <MdOutlineHotelClass className='text-3xl text-[#EB5148]' />
              <h2 className='ml-3 text-2xl font-bold'>
                <Link href='../'>Ghureberai</Link>
              </h2>
            </div>
            <h2 className='text-2xl font-bold'>Sign in</h2>
            <div className='mb-8 mt-3 text-xs'>
              <p>If you don’t have an account register.</p>
              <p>
                You can{' '}
                <button className='duration-180 text-[#EB5148] hover:font-bold'>
                  <Link href='../Registration'>Register Here!</Link>
                </button>
              </p>
            </div>

            <form onSubmit={handleLogin} className='flex flex-col gap-4'>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <AiOutlineMail className='mb-1 mr-3 text-2xl text-[#EB5148]' />
                <input
                  type='text'
                  className='w-full px-3 focus:outline-none'
                  name='Username'
                  placeholder='Username'
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <RiLockPasswordLine className='mb-1 mr-3 text-2xl text-[#EB5148]' />
                <input
                  className='w-full px-3 focus:outline-none'
                  type='password'
                  name='Password'
                  placeholder='Password'
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className='ml-1 mt-1 flex items-center text-xs font-medium tracking-wide text-red-600'>
                {Error}
              </span>
              <button className='rounded-xl bg-[#EB5148] py-2 text-white duration-300 hover:scale-105'>
                Login
              </button>
            </form>

            <div className='py-4 text-xs text-[#002D74]'>
              <a href='#'>Forgot your password?</a>
            </div>
            {/*  */}
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
              src='https://images.unsplash.com/photo-1690369936917-0da2f88a8e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt='Image containing natural surrounding'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
