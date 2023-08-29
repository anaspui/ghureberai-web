/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import G1 from '../../public/G1.jpg';
import G2 from '../../public/G2.jpg';
import G3 from '../../public/G3.jpg';
import G4 from '../../public/G4.jpg';
import G5 from '../../public/G5.jpg';
import G6 from '../../public/G6.jpg';
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
                      src={G1}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={G2}
                    />
                  </div>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={G3}
                    />
                  </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={G4}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <BlurImage
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={G5}
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2'>
                    <Image
                      alt='gallery'
                      className='block h-full w-full rounded-lg object-cover object-center'
                      src={G6}
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
