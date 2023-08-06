import React from 'react';

const Gallery = () => {
  return (
    <>
      <div className='flex w-full items-center justify-center'>
        <div className='container'>
          <div className='flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-200 to-slate-50 pb-16'>
            <h1 className='mr-[-10rem] hidden -rotate-90 text-center text-4xl font-extrabold leading-none tracking-tight text-black sm:block md:block lg:text-6xl'>
              Gallery
            </h1>
            <div className='mx-auto lg:px-32 lg:pt-24'>
              <div className='-m-1 flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-1/2 p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center shadow-2xl'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp'
                    />
                  </div>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                    />
                  </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <img
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center shadow-2xl'
                      src='https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
