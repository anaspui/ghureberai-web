import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import axiosInstance from '@/pages/utils/axiosInstance';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { log } from 'console';

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState('');
  const [UsernameError, setUsernameError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState('');
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!Username && !Password) {
      setUsernameError('Username is required');
      setPasswordError('Password is required');
      return;
    } else {
      setUsernameError('');
      setPasswordError('');
    }
    if (!Username) {
      setUsernameError('Username is required');
      return;
    } else {
      setUsernameError('');
    }
    if (!Password) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await axiosInstance.post('/auth/login', {
        Username: Username,
        Password: Password,
      });
      if (response.status === 200) {
        setError('');
        setIsLoading(true);
        const data = response.data;
        Cookies.set('token', data.AccessToken);
        sessionStorage.setItem('token', data.AccessToken);
        localStorage.setItem('user', 'true');
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log('user:', user);
    if (isLoading && user === 'true') {
      const timeoutId = setTimeout(() => {
        window.location.href = '/Admin/Home';
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <>
      <div>
        {isLoading ? (
          <div className='flex h-screen items-center justify-center bg-gray-900'>
            <div className='absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform '>
              <div className='h-56 w-56 animate-spin  rounded-full border-8 border-solid border-white border-t-transparent'></div>
            </div>
          </div>
        ) : (
          <div>
            <section className='px-2} flex min-h-screen items-center justify-center bg-gray-900'>
              <div className='flex max-w-5xl items-center rounded-2xl bg-gray-800 p-5 shadow-xl'>
                <div className='px-8 md:w-1/2 md:px-16'>
                  <div className='mb-8 flex'>
                    <div className='flex items-center'>
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

                      <h2 className='ml-3 text-2xl font-bold text-white'>
                        Ghureberai Admin
                      </h2>
                    </div>
                  </div>

                  <form
                    onSubmit={(e) => handleLogin(e)}
                    className='flex flex-col gap-4'
                  >
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
                    {UsernameError && (
                      <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                        {UsernameError}
                      </span>
                    )}
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
                    {PasswordError && (
                      <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                        {PasswordError}
                      </span>
                    )}
                    <span className='ml-1 mt-1 flex items-center text-xs font-medium tracking-wide text-red-600'>
                      {Error}
                    </span>
                    <button className='rounded-xl bg-[#EB5148] py-2 text-white duration-300 hover:scale-105'>
                      Login
                    </button>
                  </form>

                  {/*  */}
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
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
