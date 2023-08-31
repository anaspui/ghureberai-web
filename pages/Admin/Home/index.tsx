import React, { useState, useEffect } from 'react';
// import Sidebar from '../Components/Sidebar';
import Employees from '../Components/Employees';
import NavigationBar from '../Components/Navbar';
import Dashboard from '../Components/Dashboard';
import Sidebar from '../Components/Sidebar';
import Layout from '@/pages/Admin/Components/Layout';
import SalesReport from '../Components/SalesChart';
import { BiSolidReport } from 'react-icons/bi';
export default function Index() {
  const [activeButton, setActiveButton] = useState('dashboard');
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <>
      <Layout>
        <div className='mb-2 mt-2 flex gap-3 px-8 text-orange-600'>
          <BiSolidReport size={22} />
          Dashboard
          <svg
            className='h-6 w-6 '
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
        <SalesReport />
      </Layout>
      {/* <div className='grid grid-cols-8'>
        <div className='col-span-1 bg-gray-500 border'>
          <Sidebar
            currentPage={activeButton}
            setActiveButton={handleButtonClick}
          />
        </div>
        <div className='col-span-7 ml-4 mt-14'>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 border'>
              {componentMapping[activeButton as keyof typeof componentMapping]}
            </div>
          </div>
        </div>
      </div> */}
      {/* {React.createElement(componentMapping[activeButton])} */}
    </>
  );
}
const componentMapping = {
  dashboard: <Dashboard />,
  employee: <Employees />,
  // Add more mappings here as needed
};
