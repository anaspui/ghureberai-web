import Link from 'next/link';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io5';
import { MdOutlineHotelClass } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <div className='flex w-full'>
        <footer className='body-font w-full bg-black text-white'>
          <div className='md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start'>
            <div className='mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left'>
              <a className='title-font flex items-center justify-center font-medium text-white md:justify-start'>
                {
                  /*<MdOutlineHotelClass className='text-3xl text-[#EB5148]' />*/
                  <div className='flex items-center'>
                    {/* <MdOutlineHotelClass className='text-3xl' /> */}
                    <svg
                      width='60'
                      height='35'
                      viewBox='0 0 76 47'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_2_577)'>
                        <path
                          d='M55.223 28.1228C55.223 32.7172 53.4109 37.1234 50.1853 40.3722C46.9598 43.6209 42.585 45.4461 38.0234 45.4461C33.4618 45.4461 29.087 43.6209 25.8615 40.3722C22.636 37.1234 20.8239 32.7172 20.8239 28.1228'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-miterlimit='10'
                          stroke-linecap='round'
                        />
                        <path
                          d='M59.8708 28.1218L40.1473 8.67923C39.5816 8.12149 38.8214 7.80914 38.0298 7.80914C37.2382 7.80914 36.478 8.12149 35.9123 8.67923L16.1918 28.1218'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-miterlimit='10'
                          stroke-linecap='round'
                        />
                        <path
                          d='M68.2416 44.9145V2.63986'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M62.8154 6.55589L68.2406 2.21716L74.0098 6.55589'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M62.8154 12.623L68.2406 8.28427L74.0098 12.623'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M62.8154 18.5584L68.2406 14.2167L74.0098 18.5584'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M62.8124 24.3562L68.2377 20.0175L74.0069 24.3562'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M38.0313 44.9669C42.4736 44.9669 46.0748 40.8603 46.0748 35.7945C46.0748 30.7288 42.4736 26.6221 38.0313 26.6221C33.589 26.6221 29.9878 30.7288 29.9878 35.7945C29.9878 40.8603 33.589 44.9669 38.0313 44.9669Z'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-miterlimit='10'
                          stroke-linecap='round'
                        />
                        <path
                          d='M8.0863 2.85168V45.1263'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M2.66101 6.77467L8.08625 2.42902L13.8555 6.77467'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M2.66101 12.8319L8.08625 8.49609L13.8555 12.8319'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M2.66101 18.7703L8.08625 14.4286L13.8555 18.7703'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M2.65717 24.5681L8.0824 20.2294L13.8516 24.5681'
                          stroke='#EB5148'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2_577'>
                          <rect
                            width='74.7995'
                            height='45.7056'
                            fill='white'
                            transform='translate(0.931335 0.979797)'
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <h2 className='ml-3 text-2xl font-bold'>Ghureberai</h2>
                  </div>
                }
              </a>
              <div className='mt-4'>
                <span className='mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
                  <a className='cursor-pointer text-gray-500 hover:text-white'>
                    <CgFacebook className='text-2xl' />
                  </a>
                  <a className='ml-3 cursor-pointer text-gray-500 hover:text-white'>
                    <IoLogoTwitter className='text-2xl' />
                  </a>
                </span>
              </div>
            </div>
            <div className='-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left'>
              <div className='w-full px-4 md:w-1/2 lg:w-1/5'>
                <h2 className='title-font mb-3 text-sm font-medium uppercase tracking-widest text-white'>
                  About
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a
                      className='cursor-pointer text-gray-500 hover:text-white'
                      href={'/ContactUs'}
                    >
                      Company
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Careers
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a
                      className='cursor-pointer text-gray-500 hover:text-white'
                      href={'/Blogs'}
                    >
                      Blog
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/5'>
                <h2 className='title-font mb-3 text-sm font-medium uppercase tracking-widest text-white'>
                  Support
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a
                      className='cursor-pointer text-gray-500 hover:text-white'
                      href={'/ContactUs'}
                    >
                      Contact Support
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Help Resources
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Release Updates
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/5'>
                <h2 className='title-font mb-3 text-sm font-medium uppercase tracking-widest text-white'>
                  Platform
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Terms &amp; Privacy
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Pricing
                    </a>
                  </li>
                  <li className='mt-3'>
                    <Link href={'/FAQ'} legacyBehavior>
                      <a className='cursor-pointer text-gray-500 hover:text-white'>
                        FAQ
                      </a>
                    </Link>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/5'>
                <h2 className='title-font mb-3 text-sm font-medium uppercase tracking-widest text-white'>
                  Contact
                </h2>
                <nav className='mb-10 list-none'>
                  <li className='mt-3'>
                    <Link href={'/ContactUs'} legacyBehavior>
                      <a className='cursor-pointer text-gray-500 hover:text-white'>
                        Send a Message
                      </a>
                    </Link>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      +123-456-7890
                    </a>
                  </li>
                </nav>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/5'>
                <h2 className='title-font mb-3 text-sm font-medium uppercase tracking-widest text-white'>
                  Stay tuned
                </h2>
                <form onSubmit={(e) => e.preventDefault()} className='mt-1'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full rounded-lg p-2 text-gray-500 outline-none'
                  />
                  <button
                    className='mt-4 rounded-lg bg-[#EB5148] p-2 px-3 font-medium
                              text-white shadow-md outline-none duration-150 hover:bg-[#bf5b54] focus:shadow-none sm:px-4'
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='bg-black'>
            <div className='container mx-auto px-5 py-4'>
              <p className='text-center text-sm capitalize text-white'>
                © 2023 All rights reserved by{' '}
                <span className='text-[#EB5148]'>Ghureberai</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
