import { useState } from 'react';
import { IoIosLogIn } from 'react-icons/io';
import { MdOutlineHotelClass } from 'react-icons/md';
import Link from 'next/link';
import { FiLogOut, FiMenu } from 'react-icons/fi';
import { BiHotel } from 'react-icons/bi';
import Cookies from 'js-cookie';

export default function Navbar({
  token,
  user,
  handleLogout,
  userLoggedIn,
  userRole,
}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <nav className='w-100 md:px-auto px-4'>
      <div className='container mx-auto flex h-16 items-center justify-between md:h-16 md:px-4'>
        {/* Logo section */}
        <div className='text-black lg:order-1'>
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
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M59.8708 28.1218L40.1473 8.67923C39.5816 8.12149 38.8214 7.80914 38.0298 7.80914C37.2382 7.80914 36.478 8.12149 35.9123 8.67923L16.1918 28.1218'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M68.2416 44.9145V2.63986'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M62.8154 6.55589L68.2406 2.21716L74.0098 6.55589'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M62.8154 12.623L68.2406 8.28427L74.0098 12.623'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M62.8154 18.5584L68.2406 14.2167L74.0098 18.5584'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M62.8124 24.3562L68.2377 20.0175L74.0069 24.3562'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M38.0313 44.9669C42.4736 44.9669 46.0748 40.8603 46.0748 35.7945C46.0748 30.7288 42.4736 26.6221 38.0313 26.6221C33.589 26.6221 29.9878 30.7288 29.9878 35.7945C29.9878 40.8603 33.589 44.9669 38.0313 44.9669Z'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                />
                <path
                  d='M8.0863 2.85168V45.1263'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.66101 6.77467L8.08625 2.42902L13.8555 6.77467'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.66101 12.8319L8.08625 8.49609L13.8555 12.8319'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.66101 18.7703L8.08625 14.4286L13.8555 18.7703'
                  stroke='#282828'
                  stroke-width='2.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M2.65717 24.5681L8.0824 20.2294L13.8516 24.5681'
                  stroke='#282828'
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
        </div>

        {/* Sidebar toggle button */}
        <div className='lg:hidden'>
          <button className='p-2 text-gray-500' onClick={toggleSidebar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-6 w-6'
            >
              <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
            </svg>
          </button>
        </div>

        {/* Main navigation */}
        <div className='order-3 hidden w-full text-gray-500 md:order-2 md:w-auto lg:block'>
          <ul className='hidden justify-between font-semibold md:flex'>
            <NavItem href='/' label='Home' />
            <NavItem href='/Package' label='Package' />
            <NavItem href='/About' label='About' />
            <NavItem href='/ContactUs' label='Contact' />
            {userRole === 'admin' && (
              <NavItem href='/Admin/Home' label='Admin Panel' />
            )}
          </ul>
        </div>

        {/* User actions */}
        <div className='order-2 hidden md:order-3 lg:block'>
          {(userLoggedIn || token) &&
            (user === null ? null : (
              <div className='hidden md:block'>
                <a
                  href=''
                  className='p-5 align-[3px] font-semibold text-gray-500 hover:align-[4px] hover:text-[#EB5148]'
                >
                  <> Welcome, {(user as any).Username}!</>
                </a>
                <Link onClick={handleLogout} href='/' passHref>
                  <button className='hover:shadow-[0px 8px 9px -4px rgba(51, 45, 45, 0.2), 0px 4px 18px 0px rgba(51, 45, 45, 0.1)] focus:shadow-[0px 8px 9px -4px rgba(51, 45, 45, 0.2), 0px 4px 18px 0px rgba(51, 45, 45, 0.1)] dark:shadow-[0px 4px 9px -4px #030202] dark:focus:shadow-[0px 8px 9px -4px rgba(3, 2, 2, 0.3), 0px 4px 18px 0px rgba(3, 2, 2, 0.2)] dark:active:shadow-[0px 8px 9px -4px rgba(3, 2, 2, 0.3), 0px 4px 18px 0px rgba(3, 2, 2, 0.2)] inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:active:bg-neutral-900'>
                    <FiLogOut size='1rem' />
                  </button>
                </Link>
              </div>
            ))}
          {!userLoggedIn && (
            <Link href='/Login' passHref>
              <button className='flex items-center gap-2 rounded-xl border-2 bg-[#EB5148] px-4 py-2 hover:border-black hover:bg-white hover:text-[#EB5148]'>
                <IoIosLogIn />
                <span>Login</span>
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Responsive sidebar */}
      {sidebarOpen && (
        <div className='absolute left-0 top-0 h-full w-3/4 overflow-y-auto bg-white lg:hidden'>
          {/* Close button */}
          <button
            className='absolute right-0 top-0 px-5 py-5 text-gray-500 '
            onClick={closeSidebar}
          >
            <FiMenu />
          </button>

          {/* Navigation items */}
          <ul className='mt-8 space-y-2'>
            <ResponsiveNavItem href='/' label='Home' />
            <ResponsiveNavItem href='/Package' label='Package' />
            <ResponsiveNavItem href='/About' label='About' />
            <ResponsiveNavItem href='/ContactUs' label='Contact' />
            {userRole === 'admin' && (
              <ResponsiveNavItem href='/Admin/Home' label='Admin Panel' />
            )}
          </ul>

          {/* User welcome and logout */}
          {(userLoggedIn || token) && (
            <div className='border-t p-5'>
              <a
                href=''
                className='block p-2 font-semibold text-gray-500 hover:text-[#EB5148]'
              >
                <> Welcome, {(user as any).Username}!</>
              </a>
              <Link onClick={handleLogout} href='/' passHref>
                <button className='hover:shadow-[0px 8px 9px -4px rgba(51, 45, 45, 0.2), 0px 4px 18px 0px rgba(51, 45, 45, 0.1)] focus:shadow-[0px 8px 9px -4px rgba(51, 45, 45, 0.2), 0px 4px 18px 0px rgba(51, 45, 45, 0.1)] dark:shadow-[0px 4px 9px -4px #030202] dark:focus:shadow-[0px 8px 9px -4px rgba(3, 2, 2, 0.3), 0px 4px 18px 0px rgba(3, 2, 2, 0.2)] dark:active:shadow-[0px 8px 9px -4px rgba(3, 2, 2, 0.3), 0px 4px 18px 0px rgba(3, 2, 2, 0.2)] inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-0 active:bg-neutral-900 dark:bg-neutral-900 dark:hover:bg-neutral-900 dark:active:bg-neutral-900'>
                  <FiLogOut size='1rem' />
                </button>
              </Link>
            </div>
          )}

          {/* Login button */}
          {!userLoggedIn && (
            <div className='border-t p-5'>
              <Link href='/Login' passHref>
                <button className='flex items-center gap-2 rounded-xl border-2 bg-[#EB5148] px-4 py-2 hover:border-black hover:bg-white hover:text-[#EB5148]'>
                  <IoIosLogIn />
                  <span>Login</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

// ... (other components remain the same)

function NavItem({ href, label }: any) {
  const isAdminHome = href === '/Admin/Home';

  if (isAdminHome) {
    return (
      <li className='md:px-4 md:py-2'>
        <Link href={href} legacyBehavior>
          <button className='flex items-center gap-2 rounded-lg bg-indigo-600 px-2 text-white duration-150 hover:bg-orange-500 active:bg-orange-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z'
                clipRule='evenodd'
              />
            </svg>
            {label}
          </button>
        </Link>
      </li>
    );
  }

  return (
    <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
      <Link href={href} legacyBehavior>
        <a>{label}</a>
      </Link>
    </li>
  );
}

function ResponsiveNavItem({ href, label }: any) {
  return (
    <li className='px-6 py-2'>
      <Link href={href} legacyBehavior>
        <a className='text-gray-600 hover:text-black'>{label}</a>
      </Link>
    </li>
  );
}
