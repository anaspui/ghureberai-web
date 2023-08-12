import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='container mx-auto'>
        <section className='bg-gray-900'>
          <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
            <div className='mr-auto place-self-center lg:col-span-7'>
              <h1 className='mb-4 max-w-2xl text-6xl font-extrabold leading-none tracking-tight text-white'>
                Fullfil your dream with us
              </h1>
              <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
                 Get the best travel experience with us. We are here to help you to make your dream come true.
              </p>
              <Link href={'/Login'} legacyBehavior>
              <a
                href='#'
                className='bg-primary-700 hover:bg-[#EB5148] hover:ease-in duration-300 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4'
              >
                Get started
                <svg
                  className='-mr-1 ml-2 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              </Link>
              <Link href={'/ContactUs'} legacyBehavior>
              <a
                href='#'
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-[#EB5148] hover:ease-in duration-300'
              >
                Speak with us
              </a>
              </Link>
            </div>
            <div className='hidden lg:col-span-5 lg:mt-0 lg:flex bg-[url(https://unsplash.com/photos/gAhlMffG_5o)] bg-transparent'>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
