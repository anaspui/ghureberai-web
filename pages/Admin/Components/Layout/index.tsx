import React, { useState, useEffect } from 'react';
import NavigationBar from '../Navbar';
import Sidebar from '../Sidebar';

function Index({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(loadingTimeout);
    }
  }, [isLoading]);

  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className='flex h-screen overflow-hidden bg-gray-900 pt-16'>
        <Sidebar />
        <div className='relative h-full w-full overflow-y-auto lg:ml-64'>
          {isLoading ? (
            <div className='flex h-screen items-center justify-center bg-gray-900'>
              <div className='absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform '>
                <div className='h-20 w-20 animate-spin  rounded-full border-8 border-solid border-white border-t-transparent'></div>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
