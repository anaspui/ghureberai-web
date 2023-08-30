/* eslint-disable @next/next/no-img-element */
import React from 'react';
import statspic from '../../public/1.jpg';
import Image from 'next/image';
import BlurImage from '../utils/BlurImage';
const Gallery = () => {
  const imageSrc = {
    src: statspic,
    href: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
  };
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
                    <BlurImage src={imageSrc} />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage src={imageSrc} />
                  </div>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage src={imageSrc} />
                  </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage src={imageSrc} />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage src={imageSrc} />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage src={imageSrc} />
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
