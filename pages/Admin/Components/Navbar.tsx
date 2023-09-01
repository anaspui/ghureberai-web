import useFetchUserData from '@/pages/api/User/useFetchUserData';
import React, { useContext, useEffect, useRef, useState } from 'react';
import useComponentVisible from '../../../hooks/useComponentVisible';
import { MdOutlineHotelClass } from 'react-icons/md';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { GlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const NavigationBar = () => {
  const router = useRouter();
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
  const userData: UserData | null = useFetchUserData() as UserData | null;
  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('token');
    sessionStorage.removeItem('token');
    window.location.href = '../../PTR';
  };
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
              <a href='/' className='flex text-white hover:text-orange-700'>
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
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                    />
                    <path
                      d='M59.8708 28.1218L40.1473 8.67923C39.5816 8.12149 38.8214 7.80914 38.0298 7.80914C37.2382 7.80914 36.478 8.12149 35.9123 8.67923L16.1918 28.1218'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                    />
                    <path
                      d='M68.2416 44.9145V2.63986'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M62.8154 6.55589L68.2406 2.21716L74.0098 6.55589'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M62.8154 12.623L68.2406 8.28427L74.0098 12.623'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M62.8154 18.5584L68.2406 14.2167L74.0098 18.5584'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M62.8124 24.3562L68.2377 20.0175L74.0069 24.3562'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M38.0313 44.9669C42.4736 44.9669 46.0748 40.8603 46.0748 35.7945C46.0748 30.7288 42.4736 26.6221 38.0313 26.6221C33.589 26.6221 29.9878 30.7288 29.9878 35.7945C29.9878 40.8603 33.589 44.9669 38.0313 44.9669Z'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-miterlimit='10'
                      stroke-linecap='round'
                    />
                    <path
                      d='M8.0863 2.85168V45.1263'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.66101 6.77467L8.08625 2.42902L13.8555 6.77467'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.66101 12.8319L8.08625 8.49609L13.8555 12.8319'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.66101 18.7703L8.08625 14.4286L13.8555 18.7703'
                      stroke='#ffffff'
                      stroke-width='2.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.65717 24.5681L8.0824 20.2294L13.8516 24.5681'
                      stroke='#ffffff'
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
                <h2 className='ml-3 text-2xl font-bold hover:text-orange-700'>
                  Ghureberai
                </h2>
              </a>
            </div>
            <a href='/Admin/Home' className='text-orange-600 hover:text-white'>
              <div className='flex gap-3 px-8'>
                <svg
                  className='h-6 w-6 text-orange-600'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                Admin Panel
              </div>
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
                          href='/Admin/Home'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href='/Admin/Settings'
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          Settings
                        </a>
                      </li>

                      <li>
                        <Link onClick={handleLogout} href='/' passHref>
                          <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'>
                            Sign out
                          </div>
                        </Link>
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
