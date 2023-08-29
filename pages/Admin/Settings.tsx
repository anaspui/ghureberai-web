import React from 'react';
import Layout from '@/pages/Admin/Components/Layout';
import Image from 'next/image';

function Settings() {
  return (
    <Layout>
      <div className='mt-2 px-8'>
        <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
          <li className='inline-flex items-center'>
            <a
              href='#'
              className='hover:text-primary-600 inline-flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-white'
            >
              <svg
                className='mr-2.5 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
            </a>
          </li>

          <li>
            <div className='flex items-center'>
              <svg
                className='h-6 w-6 text-gray-400'
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
              <span
                className='ml-1 text-gray-400 dark:text-gray-500 md:ml-2'
                aria-current='page'
              >
                Settings
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className='grid h-screen grid-cols-1 px-4 pt-6 dark:bg-gray-900 xl:grid-cols-3 xl:gap-4'>
        <div className='col-span-full xl:col-auto'>
          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2'>
            <div className='relative items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4'>
              <div className='relative h-28 w-28'>
                <Image
                  fill
                  className='relative mb-4 h-28 w-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0'
                  src='https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png'
                  alt='Jese picture'
                />
              </div>
              <div>
                <h3 className='mb-1 text-xl font-bold text-gray-900 dark:text-white'>
                  Profile picture
                </h3>
                <div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
                  JPG, GIF or PNG. Max size of 800K
                </div>
                <div className='flex items-center space-x-4'>
                  <button
                    type='button'
                    className='dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
                  >
                    <svg
                      className='-ml-1 mr-2 h-4 w-4'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z'></path>
                      <path d='M9 13h2v5a1 1 0 11-2 0v-5z'></path>
                    </svg>
                    Upload picture
                  </button>
                  <button
                    type='button'
                    className='rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2'>
            <h3 className='mb-4 text-xl font-semibold dark:text-white'>
              Password information
            </h3>
            <form action='#' data-protonpass-form=''>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='current-password'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Current password
                  </label>
                  <input
                    type='text'
                    name='current-password'
                    id='current-password'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='••••••••'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='password'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    New password
                  </label>
                  <input
                    data-popover-target='popover-password'
                    data-popover-placement='bottom'
                    type='password'
                    id='password'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pr-[40.2667px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='••••••••'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='confirm-password'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Confirm password
                  </label>
                  <input
                    type='text'
                    name='confirm-password'
                    id='confirm-password'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='••••••••'
                    required
                  />
                </div>
                <div className='sm:col-full col-span-6'>
                  <button
                    className='dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
                    type='submit'
                  >
                    Save all
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2'>
            <h3 className='mb-4 text-xl font-semibold dark:text-white'>
              General information
            </h3>
            <form
              action='#'
              data-protonpass-form=''
              data-protonpass-form-type='register'
            >
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='username'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='usernamee'
                    id='username'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='Bonnie'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='Bonnie'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='last-name'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='Green'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='gender'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Gender
                  </label>
                  <input
                    type='text'
                    name='gender'
                    id='gender'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='Male / Female / Other'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='dob'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Dath of birth
                  </label>
                  <input
                    type='date'
                    name='dob'
                    id='dob'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='20/12/2000'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='address'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Address
                  </label>
                  <input
                    type='text'
                    name='address'
                    id='address'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='e.g. California'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='example@company.com'
                    required
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='phone-number'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Phone Number
                  </label>
                  <input
                    type='number'
                    name='phone-number'
                    id='phone-number'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm'
                    placeholder='e.g. +(12)3456 789'
                    required
                  />
                </div>
                <div className='sm:col-full col-span-6'>
                  <button
                    className='dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
                    type='submit'
                  >
                    Save all
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Settings;
