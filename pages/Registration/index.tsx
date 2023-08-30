import React, { useState } from 'react';
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
import { useRouter } from 'next/router';
import axiosInstance from '../utils/axiosInstance';
import Cookies from 'js-cookie';
const Registration = () => {
  const router = useRouter();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [phoneErr, setPhoneErr] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setUsernameErr('');
    setPasswordErr('');
    setEmailErr('');
    setPhoneErr('');
    setError('');

    let isValid = true;
    if (!Username && !Password && !Email && !Phone) {
      setError('All fields are required');
      let isValid = false;
      return;
    }
    if (!Username) {
      setUsernameErr('*Username is required');
      isValid = false;
    }
    if (!Password) {
      setPasswordErr('*Password is required');
      isValid = false;
    }
    if (!Email) {
      setEmailErr('*Email is required');
      isValid = false;
    }
    if (Username.length < 4) {
      setUsernameErr('Username should be at least 5 characters');
      isValid = false;
    }
    if (Password.length < 4) {
      setPasswordErr('Password should be at least 5 characters');
      isValid = false;
    }
    if (!isValidEmail(Email)) {
      setEmailErr('Please enter a valid email address');
      isValid = false;
    }
    if (!Phone) {
      setPhoneErr('*Phone is required');
      isValid = false;
    }
    if (!isValidBangladeshiPhone(Phone)) {
      setPhoneErr('Please enter a valid phone number');
      isValid = false;
    }
    if (isValid) {
      try {
        const response = await axiosInstance.post('/registration', {
          Username: Username,
          Password: Password,
          Email: Email,
          Phone: Phone,
        });
        if (response.status === 201) {
          const data = response.data;
          Cookies.set('token', data.AccessToken);
          router.push('/Login');
          setError('Registration Succesfull');
        }
      } catch (error: any) {
        setError(error.response.data.message);
      }
    }
  };
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidBangladeshiPhone = (phone: string) => {
    // The regular expression for Bangladeshi phone numbers
    const phoneRegex = /^01[3-9]\d{8}$/;
    return phoneRegex.test(phone);
  };
  return (
    <>
      <section className='mt-[-4rem] flex min-h-screen items-center justify-center bg-gray-50'>
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

            <form onSubmit={handleLogin} className='flex flex-col gap-4'>
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <AiOutlineUser className='mr-3 mt-1 text-xl' />
                <input
                  type='text'
                  className='w-full focus:outline-none'
                  name='Username'
                  placeholder='Username'
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {usernameErr && (
                <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                  {usernameErr}
                </span>
              )}
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <RiLockPasswordLine className='mr-3 text-xl' />
                <input
                  className='w-full focus:outline-none'
                  type='password'
                  name='Password'
                  placeholder='Password'
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordErr && (
                <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                  {passwordErr}
                </span>
              )}
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <AiOutlineMail className='mr-3 mt-1 text-xl' />
                <input
                  type='text'
                  className='w-full focus:outline-none'
                  name='Email'
                  placeholder='Email'
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailErr && (
                <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                  {emailErr}
                </span>
              )}
              <div className='flex w-full border-b border-[#002D74] p-2'>
                <BsTelephone className='mr-3 mt-1 text-xl' />
                <input
                  type='text'
                  className='w-full focus:outline-none'
                  name='Phone'
                  placeholder='+0187924378'
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {phoneErr && (
                <span className='ml-10 flex items-center text-xs font-medium tracking-wide text-red-600'>
                  {phoneErr}
                </span>
              )}
              <span className='ml-1 mt-1 flex items-center text-xs font-medium tracking-wide text-red-600'>
                {Error}
              </span>
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
