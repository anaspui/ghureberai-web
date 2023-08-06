import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/index';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Navbar />

      <section>
        <section className='bg-white antialiased dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
                Ghureberai
              </h2>

              <div className='mt-4'>
                <Link
                  href='#'
                  title=''
                  className='text-primary-600 dark:text-primary-500 inline-flex items-center text-lg font-medium text-[#EB5148] hover:underline'
                >
                  Connect with us
                  <svg
                    aria-hidden='true'
                    className='ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className='mx-auto mt-8 flow-root max-w-3xl sm:mt-12 lg:mt-16'>
              <div className='-my-4 divide-y divide-gray-200 dark:divide-gray-700'>
                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2019
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      We started our journey
                    </Link>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2020
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      Partnership with Swiss Bank and BMW
                    </Link>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2020
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      Join hands with AIUB and G4S
                    </Link>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2021
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      Stated full functional office
                    </Link>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2022
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      Fox News and Trixy become gold partner
                    </Link>
                  </h3>
                </div>

                <div className='flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6'>
                  <p className='w-32 shrink-0 text-lg font-normal text-gray-500 dark:text-gray-400 sm:text-right'>
                    2023
                  </p>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    <Link href='#' className='hover:underline'>
                      Connected with The Daily Star and Swift
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
            <figure className='mx-auto max-w-screen-md'>
              <svg
                className='mx-auto mb-3 h-12 text-orange-400 dark:text-[#EB5148]'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote className=''>
                <p className='bg-gradient-to-r from-neutral-100 via-orange-700 to-neutral-200 bg-clip-text text-2xl font-medium text-transparent'>
                  "Ghureberai ensures the best and efficient travel plan for
                  making a memorable journey for both you and us"
                </p>
              </blockquote>
            </figure>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
            <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
              <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                Our Local Partners
              </h2>
              <p className='font-light text-gray-500 dark:text-gray-400 sm:text-xl'>
                Ghureberai is moving fast with the help of these brands. We are
                growing parallely with them
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16'>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5YoV2X-q-_MkVa27Nfz8YX7VLNwWOJeMLg&usqp=CAU'
                  alt='Bonnie Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>Swiss Bank</Link>
                </h3>
                <p>Banking Partner</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxF5qXKgxPfeOGLUKrHRDJu9T9NXDi8PXd7Q&usqp=CAU'
                  alt='Helene Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>BMW</Link>
                </h3>
                <p>Travelling Partner</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Jese Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>Swift</Link>
                </h3>
                <p>Travelling Partner</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Joseph Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>Fox News</Link>
                </h3>
                <p>Media Partner</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Sofia Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>The Daily Star</Link>
                </h3>
                <p>News Portal</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Leslie Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>G4S</Link>
                </h3>
                <p>Security</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Michael Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>AIUB</Link>
                </h3>
                <p>Academic Partner</p>
              </div>
              <div className='text-center text-gray-500 dark:text-gray-400'>
                <img
                  className='mx-auto mb-4 h-36 w-36 rounded-full'
                  src='data:image/png;base64,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'
                  alt='Neil Avatar'
                />
                <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  <Link href='#'>Burning Trixy</Link>
                </h3>
                <p>Development Partner</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className='bg-white dark:bg-gray-900'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16 '>
            <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
              <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                Our Team
              </h2>
              <p className='font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
                Behind the Scenes Champions: Crafting Timeless Memories and
                Unforgettable Travels!
              </p>
            </div>
            <div className='mb-6 grid gap-8 md:grid-cols-2 lg:mb-16'>
              <div className='items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex'>
                <Link href='#'>
                  <img
                    className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg'
                    src='https://avatars.githubusercontent.com/u/64026794?v=4'
                    alt='Mohammed Omar'
                  />
                </Link>
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'>Mohammed Omar</Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'>CEO</span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                    The main factor behind all of our success and development
                  </p>
                  <ul className='flex space-x-4 sm:mt-0'>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex'>
                <img
                  className='h-[19rem] w-[18.3rem] rounded-lg sm:rounded-none sm:rounded-l-lg'
                  src='https://avatars.githubusercontent.com/u/75083426?v=4'
                  alt='Mohammed Iftekhar'
                />
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'>Mohammed Iftekhar</Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Managing Director
                  </span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                    Iftekhar drives the technical strategy of the Ghureberai
                    platform and brand.
                  </p>
                  <ul className='flex space-x-4 sm:mt-0'>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex'>
                <Link href='#'>
                  <img
                    className='h-[19rem] w-[48rem] rounded-lg sm:rounded-none sm:rounded-l-lg'
                    src='https://avatars.githubusercontent.com/u/94302061?v=4'
                    alt='Michael Avatar'
                  />
                </Link>
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'>MH Soikot</Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Transport Manager
                  </span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                    Soikot ensures the safety of our customers and arranges the
                    best and comfortable transport facility
                  </p>
                  <ul className='flex space-x-4 sm:mt-0'>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex'>
                <Link href='#'>
                  <img
                    className='h-[19rem] w-[32rem] rounded-lg sm:rounded-none sm:rounded-l-lg'
                    src='https://avatars.githubusercontent.com/u/87262791?v=4'
                    alt='Sofia Avatar'
                  />
                </Link>
                <div className='p-5'>
                  <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <Link href='#'>Mostafa Masud Safi</Link>
                  </h3>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Hotel Manager
                  </span>
                  <p className='mb-4 mt-3 font-light text-gray-500 dark:text-gray-400'>
                    Safi manages the hotel strategy of the Ghureberai platform
                    and brand.
                  </p>
                  <ul className='flex space-x-4 sm:mt-0'>
                    <li>
                      <Link
                        href='#'
                        className=' text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='text-gray-500 hover:text-gray-900 dark:hover:text-[#EB5148]'
                      >
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
