import Link from 'next/link';

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
                className='inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hover:text-[#EB5148] hover:ease-in duration-300'
              >
                Speak with us
              </a>
              </Link>
            </div>
            <div className='hidden lg:col-span-5 lg:mt-0 lg:flex bg-transparent ml-32'>
            <svg fill='#FFFFFF' className='mt-16' xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24"><path d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92 1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09 1 1 0 0 0 .52-.15 1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89zM18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25-2.93-1.29 13.47-6.34z"></path></svg>
            <svg fill='#FFFFFF' xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24"><path d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92 1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09 1 1 0 0 0 .52-.15 1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89zM18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25-2.93-1.29 13.47-6.34z"></path></svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;