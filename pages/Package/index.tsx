import React from 'react';
import Navbar from '../Navbar';
import Submenu from './Submenu';
const Package = () => {
  return (
    <>
      <div className='flex min-h-screen w-full flex-wrap items-center justify-center gap-4 bg-gray-100'>
        <div className='w-60 transform rounded-xl bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
          <img
            className='h-40 rounded-xl object-cover'
            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt=''
          />
          <div className='p-2'>
            <h2 className='mb-2 text-lg font-bold '>Heading</h2>

            <p className='text-sm text-gray-600'>
              Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>

          <div className='m-2'>
            <a
              role='button'
              href='#'
              className='rounded-md bg-purple-600 px-3 py-1 text-white hover:bg-purple-700'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
