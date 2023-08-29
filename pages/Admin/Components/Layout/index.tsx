import React from 'react';
import NavigationBar from '../Navbar';
import Sidebar from '../Sidebar';

function index({ children }: any) {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className='overflow-hidde flex pt-16'>
        <Sidebar />
        <div className='relative h-full w-full overflow-y-auto lg:ml-64'>
          {children}
        </div>
      </div>
    </>
  );
}

export default index;
