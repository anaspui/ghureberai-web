import { MdSpaceDashboard } from 'react-icons/md';
// import { FaUsers } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import {
  FC,
  ReactNode,
  HTMLProps,
  useContext,
  useState,
  forwardRef,
} from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { GlobalContext } from '@/context/GlobalContext';
import Link from 'next/link';

const Sidebar = ({ setActiveButton, currentPage }: any) => {
  const store = useContext(GlobalContext);
  const { isOpen } = store as any;

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };
  return (
    <div className='flex overflow-hidden bg-gray-50 dark:bg-gray-900'>
      <aside
        className={`transition-width fixed left-0 top-0 z-20 h-full w-64 flex-shrink-0 flex-col pt-14 font-normal duration-75 lg:flex ${
          !isLargeScreen && !isOpen ? 'hidden' : 'flex'
        }`}
      >
        {/* hidden */}
        <div className='relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0 dark:border-gray-700 dark:bg-gray-800'>
          <div className='flex flex-1 flex-col overflow-y-auto pb-4 pt-5'>
            <div className='flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3 dark:divide-gray-700 dark:bg-gray-800'>
              <ul className='space-y-2 pb-2'>
                {sideNavBar.map((nav, index) => (
                  <li key={index}>
                    <NavItem nav={nav} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      {!isLargeScreen && isOpen && (
        <div
          className='fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90'
          id='sidebarBackdrop'
        />
      )}
    </div>
    // <aside
    //   id='sidebar'
    //   className='fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal text-white duration-75 bg-gray-800 transition-width lg:flex'
    //   aria-label='Sidebar'
    // >
    //   <div className='flex-shrink-0 px-8 py-4'>
    //     <h1 className='text-2xl font-semibold'>Dashboard</h1>
    //   </div>
    //   <nav className='flex-1 px-4 py-8 space-y-2 overflow-y-auto'>
    //     <a
    //       href='#'
    //       className={`${
    //         currentPage === 'dashboard' ? 'bg-blue-500' : 'bg-gray-700'
    //       } flex items-center gap-2 rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-100 hover:text-blue-500  active:rounded-lg`}
    //       onClick={() => handleButtonClick('dashboard')}
    //     >
    //       <MdSpaceDashboard />
    //       Dashboard
    //     </a>
    //     <a
    //       href='#'
    //       className={`${
    //         currentPage === 'employee' ? 'bg-blue-500' : 'bg-gray-700'
    //       } flex items-center gap-2 rounded-lg px-4 py-2 transition duration-150 hover:bg-gray-100 hover:text-blue-500 active:rounded-lg`}
    //       onClick={() => handleButtonClick('employee')}
    //     >
    //       <FaUsers />
    //       Employee
    //     </a>
    //     {/* Add more navigation links here */}
    //   </nav>
    //   <main>
    //     <div className='px-4 pt-6'>
    //       <div className='grid gap-4 xl:grid-cols-2 2xl:grid-cols-3'></div>
    //     </div>
    //   </main>
    // </aside>
  );
};

export default Sidebar;

const NavItem = ({ nav }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {/* <LOL
        as={nav.subnav ? 'div' : 'link'}
        href={nav.link}
        onClick={() => nav.subnav && setIsClicked((prev) => !prev)}
        className='group grid w-full grid-cols-[40px_auto] rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
      >
        <div>{nav.icon}</div>
        <div className='flex items-center justify-between'>
          <span>{nav.name}</span>
          {nav.subnav && (
            <span>
              <BiChevronDown />
            </span>
          )}
        </div>
      </LOL> */}
      {nav.subnav ? (
        <div
          onClick={() => nav.subnav && setIsClicked((prev) => !prev)}
          className='group grid w-full grid-cols-[40px_auto] rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
        >
          <div>{nav.icon}</div>
          <div className='flex items-center justify-between'>
            <span>{nav.name}</span>
            {nav.subnav && (
              <span>
                <BiChevronDown />
              </span>
            )}
          </div>
        </div>
      ) : (
        <Link
          href={nav.link}
          className='group grid w-full grid-cols-[40px_auto] rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
        >
          <div>{nav.icon}</div>
          <div className='flex items-center justify-between'>
            <span>{nav.name}</span>
            {nav.subnav && (
              <span>
                <BiChevronDown />
              </span>
            )}
          </div>
        </Link>
      )}
      {nav.subnav && isClicked && (
        <ul className='space-y-2 py-2 '>
          {nav.subnav.map((sub: any, idx: any) => (
            <li key={idx}>
              <Link
                href={sub.link}
                className={`group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 `}
              >
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const sideNavBar = [
  {
    name: 'Dashboard',
    icon: <MdSpaceDashboard size={30} />,
    link: '/Admin/Home',
  },
  {
    name: 'CRUD',
    icon: <MdSpaceDashboard size={30} />,
    subnav: [
      {
        name: 'Employee',
        link: '/Admin/CRUD/Employee',
      },
      {
        name: 'Hotel Manager',
        link: '/Admin/CRUD/HotelManager',
      },
      {
        name: 'Packages',
        link: '/Admin/CRUD/Packages',
      },
    ],
  },
];

type Props = {
  children: ReactNode;
};

// const NavAnchor: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
//   children,
//   href,
//   replace,
//   prefetch,
//   scroll,
//   ...props
// }) => {
//   return (
//     <Link
//       replace={replace}
//       prefetch={prefetch}
//       scroll={scroll}
//       href={href}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };

// const NavBtn = <PROPS extends Props>({ children, ...props }: Props) => {
//   return <button {...props}></button>;
// };

const LOL = forwardRef(
  ({ as: component, href, children, ...props }: any, ref) => {
    return (
      <>
        {component === 'div' ? (
          <div ref={ref} {...props}>
            {children}
          </div>
        ) : (
          <Link ref={ref} href={href} {...props}>
            {children}
          </Link>
        )}
      </>
    );
  }
);
