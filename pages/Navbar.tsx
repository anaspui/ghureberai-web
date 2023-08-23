import { IoIosLogIn } from 'react-icons/io';
import { MdOutlineHotelClass } from 'react-icons/md';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
export default function Navbar({
  token,
  user,
  handleLogout,
  userLoggedIn,
}: any) {
  return (
    <nav className='w-100 md:px-auto px-8'>
      <div className='container mx-auto flex h-16 items-center justify-between md:h-16 md:px-4'>
        <div className='text-black md:order-1'>
          <div className='flex items-center'>
            <MdOutlineHotelClass className='text-3xl' />
            <h2 className='ml-3 text-2xl font-bold'>Ghureberai</h2>
          </div>
        </div>
        <div className='order-3 w-full text-gray-500 md:order-2 md:w-auto'>
          <ul className='flex justify-between font-semibold'>
            <NavItem href='/' label='Home' />
            <NavItem href='/Package' label='Package' />
            <NavItem href='/About' label='About' />
            <NavItem href='/ContactUs' label='Contact' />
          </ul>
        </div>
        <div className='order-2 md:order-3'>
          {(userLoggedIn || token) &&
            (user === null ? null : (
              <div>
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
    </nav>
  );
}

function NavItem({ href, label }: any) {
  return (
    <li className='hover:text-[#EB5148] md:px-4 md:py-2'>
      <Link href={href} legacyBehavior>
        <a>{label}</a>
      </Link>
    </li>
  );
}
