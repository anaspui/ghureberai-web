import React, { useState, useEffect } from 'react';
// import Sidebar from '../Components/Sidebar';
import Employees from '../Components/Employees';
import NavigationBar from '../Components/Navbar';
import Dashboard from '../Components/Dashboard';
import Sidebar from '../Components/Sidebar';
import Layout from '@/pages/Admin/Components/Layout';

export default function Index() {
  const [activeButton, setActiveButton] = useState('dashboard');
  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <>
      <Layout>
        <h1>HHHHHHHHHHHH</h1>
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
