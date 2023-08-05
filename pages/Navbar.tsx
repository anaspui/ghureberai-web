import React from 'react';
import { IoIosLogIn } from 'react-icons/io';
import { MdOutlineHotelClass } from 'react-icons/md';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className='w-100 md:px-auto px-8'>
        <div className='container mx-auto flex h-28 flex-wrap items-center justify-between md:h-16 md:flex-nowrap md:px-4'>
          <div className='text-black md:order-1'>
            <div className='flex'>
              <MdOutlineHotelClass className='text-3xl' />
              <h2 className='ml-3 text-2xl font-bold'>Ghureberai</h2>
            </div>
          </div>
          <div className='order-3 w-full text-gray-500 md:order-2 md:w-auto'>
            <ul className='flex justify-between font-semibold'>
              <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
                <Link href='/' legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
                <Link href='/Package' legacyBehavior>
                  <a>Package</a>
                </Link>
              </li>
              <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
                <Link href='/About' legacyBehavior>
                  <a>About</a>
                </Link>
              </li>
              <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
                <Link href='/ContactUs' legacyBehavior>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='order-2 md:order-3'>
            <button className='flex items-center gap-2 rounded-xl border-2 bg-[#EB5148] px-4 py-2 hover:border-black hover:bg-white hover:text-[#EB5148]'>
              <IoIosLogIn />
              <span>
                <Link href='../Login' legacyBehavior>
                  <a>Login</a>
                </Link>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
