import React, { useEffect, useState } from 'react';
import Layout from '@/pages/Admin/Components/Layout';
import axiosInstance from '@/pages/utils/axiosInstance';
import PackagesTable from '../Components/PackagesTable';

const Packages: React.FC = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackageData() {
      try {
        const response = await axiosInstance({
          method: 'get',
          url: '/package',
          withCredentials: true,
        });
        setPackages(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchPackageData();
  }, []);
  return (
    <Layout>
      <div className='mt-2 px-8'>
        <ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
          <li className='inline-flex items-center'>
            <a
              href='#'
              className='hover:text-primary-600 inline-flex items-center text-gray-700 dark:text-gray-300 dark:hover:text-white'
            >
              <svg
                className='mr-2.5 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                className='h-6 w-6 text-gray-400'
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
              <a
                href='#'
                className='hover:text-primary-600 ml-1 text-gray-700 dark:text-gray-300 dark:hover:text-white md:ml-2'
              >
                Management
              </a>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                className='h-6 w-6 text-gray-400'
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
              <span
                className='ml-1 text-gray-400 dark:text-gray-500 md:ml-2'
                aria-current='page'
              >
                Packages
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div>
        <PackagesTable />
      </div>
    </Layout>
  );
};
export default Packages;
