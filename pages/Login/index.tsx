import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillTwitterCircle, AiOutlineMail } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineHotelClass } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import axiosInstance from '../utils/axiosInstance';
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
      const response = await axiosInstance.post('/auth/login', {
        Username: Username,
        Password: Password,
      });
      if (response.status === 200) {
        const data = response.data;
        Cookies.set('token', data.AccessToken, { expires: 7 });
        localStorage.setItem('user', 'true');
        sessionStorage.setItem('token', data.AccessToken);
        window.location.href = '/';
        setError('');
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <section className='flex min-h-screen items-center justify-center bg-gray-50 pt-2'>
        <div className='flex max-w-5xl items-center rounded-2xl bg-gray-100 p-5 shadow-xl'>
          <div className='px-8 md:w-1/2 md:px-16'>
            <div className='mb-8 flex'>
              <div className='flex items-center'>
                <a href='/' className='flex text-white hover:text-orange-500'>
                  <svg
                    width='60'
                    height='35'
                    viewBox='0 0 76 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_2_577)'>
                      <path
                        d='M55.223 28.1228C55.223 32.7172 53.4109 37.1234 50.1853 40.3722C46.9598 43.6209 42.585 45.4461 38.0234 45.4461C33.4618 45.4461 29.087 43.6209 25.8615 40.3722C22.636 37.1234 20.8239 32.7172 20.8239 28.1228'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M59.8708 28.1218L40.1473 8.67923C39.5816 8.12149 38.8214 7.80914 38.0298 7.80914C37.2382 7.80914 36.478 8.12149 35.9123 8.67923L16.1918 28.1218'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M68.2416 44.9145V2.63986'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M62.8154 6.55589L68.2406 2.21716L74.0098 6.55589'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M62.8154 12.623L68.2406 8.28427L74.0098 12.623'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M62.8154 18.5584L68.2406 14.2167L74.0098 18.5584'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M62.8124 24.3562L68.2377 20.0175L74.0069 24.3562'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M38.0313 44.9669C42.4736 44.9669 46.0748 40.8603 46.0748 35.7945C46.0748 30.7288 42.4736 26.6221 38.0313 26.6221C33.589 26.6221 29.9878 30.7288 29.9878 35.7945C29.9878 40.8603 33.589 44.9669 38.0313 44.9669Z'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-miterlimit='10'
                        stroke-linecap='round'
                      />
                      <path
                        d='M8.0863 2.85168V45.1263'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M2.66101 6.77467L8.08625 2.42902L13.8555 6.77467'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M2.66101 12.8319L8.08625 8.49609L13.8555 12.8319'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M2.66101 18.7703L8.08625 14.4286L13.8555 18.7703'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M2.65717 24.5681L8.0824 20.2294L13.8516 24.5681'
                        stroke='#EB5148'
                        stroke-width='2.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_2_577'>
                        <rect
                          width='74.7995'
                          height='45.7056'
                          fill='white'
                          transform='translate(0.931335 0.979797)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h2 className='ml-3 text-2xl font-bold text-[#EB5148] hover:text-orange-500'>
                    Ghureberai
                  </h2>
                </a>
              </div>
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
