import useFetchUserData from '@/pages/api/User/useFetchUserData';
import React, { useContext, useEffect, useRef, useState } from 'react';
import useComponentVisible from '../../../hooks/useComponentVisible';
import { MdOutlineHotelClass } from 'react-icons/md';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { GlobalContext } from '@/context/GlobalContext';
const NavigationBar = () => {
  const store = useContext(GlobalContext);
  const { isOpen, setIsOpen } = store as any;
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  interface UserData {
    Picture: string;
    Email: string;
    Username: string;
    Role: string;
  }
  const userData: UserData | null = useFetchUserData();
  return (
    <nav className='fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div className='lg:hidden'>
              <button onClick={() => setIsOpen((prev: boolean) => !prev)}>
                {!isOpen ? (
                  <HiOutlineBars3CenterLeft size={30} color='#fff' />
                ) : (
                  <LiaTimesSolid size={30} color='#fff' />
                )}
              </button>
            </div>
            <div className='flex items-center'>
              <a href='/' className='flex text-white'>
                <MdOutlineHotelClass className='text-3xl' />
                <h2 className='ml-3 text-2xl font-bold'>Ghureberai</h2>
              </a>
            </div>
            <a href='/Admin/Home' className='text-gray-500 hover:text-gray-700'>
              Home
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <button
                type='button'
                className='flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
                id='user-menu-button-2'
                aria-expanded={isComponentVisible}
                onClick={toggleDropdown}
              >
                <span className='sr-only'>Open user menu</span>
                {userData && userData.Picture && (
                  <img
                    className='h-8 w-8 rounded-full'
                    src={userData.Picture}
                    alt='user'
                  />
                )}
              </button>
              <div ref={ref}>
                {isComponentVisible && (
                  <div
                    className='absolute right-0 z-50 mt-2 w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
                    id='dropdown-2'
                  >
                    <div className='px-4 py-3'>
                      {userData && (
                        <p className='text-sm text-gray-900 dark:text-white'>
                          {userData.Username} ({userData.Role})
                        </p>
                      )}
                      {userData && (
                        <p className='truncate text-sm font-medium text-gray-900 dark:text-gray-300'>
                          {userData.Email}
                        </p>
                      )}
                    </div>
                    <ul className='py-1'>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
