/* eslint-disable @next/next/no-img-element */
import React from 'react';
import statspic from '../../public/1.jpg';
import Image from 'next/image';
import BlurImage from '../utils/BlurImage';
const Gallery = () => {
  return (
    <>
      <div className=' flex w-full items-center justify-center'>
        <div className='container'>
          <div className='flex items-center justify-center rounded-lg'>
            <h1 className='mr-[-10rem] hidden -rotate-90 text-center text-4xl font-extrabold leading-none tracking-tight text-black sm:block md:block lg:text-6xl'>
              Gallery
            </h1>
            <div className='mx-auto lg:px-32 lg:pt-24'>
              <div className='-m-1 flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
                    />
                  </div>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
                    />
                  </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <Image
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={statspic}
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
