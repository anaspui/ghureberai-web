import React from 'react';
import { MdOutlineHotelClass } from 'react-icons/md';

const Testimonial = () => {
  return (
    <>
      <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20'></div>
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <div className='flex items-center justify-center'>
            <MdOutlineHotelClass className='text-xl text-[#EB5148]' />
            <h2 className='mx-2 text-xl font-extrabold text-gray-900'>
              Ghureberai
            </h2>
          </div>
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
              <p>
                “সুদানির ফুয়ার এই দেশত থাকা যাবে না। না হলে এই টাইপের ঘুরে বেড়ায়
                বানাতে বানাতে আমার আর দেশ ঘুরা হবে না। আপনারা আমাদের সার্ভিস
                কিনেন তাহলে আমি দেশ বিদেশে ঘুরতে পারব...!”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <img
                className='mx-auto h-10 w-10 rounded-full'
                src='https://avatars.githubusercontent.com/u/64026794?v=4'
                alt=''
              />
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Mohammed Omar</div>
                <svg
                  viewBox='0 0 2 2'
                  width='3'
                  height='3'
                  aria-hidden='true'
                  className='fill-gray-900'
                >
                  <circle cx='1' cy='1' r='1' />
                </svg>
                <div className='text-gray-600'>CEO of Ghureberai</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
