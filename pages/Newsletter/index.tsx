import React from 'react';

const Newsletter = () => {
  return (
    <>
      <div className='mx-4 py-16 2xl:container 2xl:mx-auto'>
        <div className='relative flex w-full items-center justify-center'>
          <img
            src='https://i.ibb.co/4sYZ8gC/img-2.png'
            alt='dining'
            className='absolute z-0 hidden h-full w-full xl:block'
          />
          <img
            src='https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png'
            alt='dining'
            className='absolute z-0 hidden h-full w-full sm:block xl:hidden'
          />
          <img
            src='https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png'
            alt='dining'
            className='absolute z-0 h-full w-full sm:hidden'
          />
          <div className='relative z-40 flex w-full flex-col items-center justify-center bg-gray-800 bg-opacity-80 px-4 py-10 md:mx-24 md:my-16 md:px-12 lg:py-16'>
            <h1 className='text-center text-4xl font-semibold leading-9 text-white'>
              Stay tuned with Ghureberai
            </h1>
            <p className='mt-6 text-center text-base leading-normal text-white'>
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
            <div className='mt-12 flex w-full flex-col items-center space-y-4 border-[#EB5148] sm:flex-row sm:space-y-0 sm:border lg:w-5/12'>
              <input
                className='w-full border border-[EB5148] bg-transparent p-4 text-base font-medium leading-none text-white placeholder-[#EB5148] focus:outline-none sm:border-transparent'
                placeholder='Email Address'
              />
              <button className='w-full border border-[#EB5148] bg-[#EB5148] px-6 py-4 text-white hover:bg-opacity-75 focus:outline-none focus:ring focus:ring-offset-2 sm:w-auto sm:border-transparent'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
