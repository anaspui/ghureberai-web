import React from 'react';
import NavigationBar from '../Navbar';
import Sidebar from '../Sidebar';

function index({ children }: any) {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className='flex h-screen overflow-hidden bg-gray-900 pt-16'>
        <Sidebar />
        <div className='relative h-full w-full overflow-y-auto lg:ml-64'>
          {children}
        </div>
      </div>
    </>
  );
}

export default index;
