import Link from 'next/link';
import React from 'react';
import { MdOutlineHotelClass } from 'react-icons/md';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <>
      <div className='flex w-full'>
        <footer className='body-font w-full bg-black text-white'>
          <div className='md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start'>
            <div className='mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left'>
              <a className='title-font flex items-center justify-center font-medium text-white md:justify-start'>
                <MdOutlineHotelClass className='text-3xl text-[#EB5148]' />
                <h2 className='ml-3 text-2xl font-bold'>Ghureberai</h2>
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
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Company
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
                      Careers
                    </a>
                  </li>
                  <li className='mt-3'>
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
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
                    <a className='cursor-pointer text-gray-500 hover:text-white'>
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
                      Request a Quote
                    </a>
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
                <form
                          onSubmit={(e) => e.preventDefault()}
                          className="mt-1">
                          <input
                              type="email"
                              placeholder="Enter your email"
                              className="text-gray-500 w-full p-2 outline-none rounded-lg"
                          />
                          <button
                              className="p-2 px-3 rounded-lg font-medium text-white bg-[#EB5148]
                              hover:bg-[#bf5b54] duration-150 outline-none shadow-md focus:shadow-none sm:px-4 mt-4"
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
