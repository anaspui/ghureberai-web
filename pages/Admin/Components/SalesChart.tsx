import { useEffect, useState } from 'react';
import { Chart } from 'chart.js';
import axiosInstance from '@/pages/utils/axiosInstance';
import { BiSolidReport } from 'react-icons/bi';
import { AiFillDatabase } from 'react-icons/ai';
function SalesReport() {
  const [roleCounts, setRoleCounts] = useState({
    customer: 0,
    employee: 0,
    hotelManager: 0,
    tpmanager: 0,
  });

  useEffect(() => {
    fetchRoleCounts();
  }, []);

  const fetchRoleCounts = async () => {
    try {
      const response = await axiosInstance.get('/admin/user-count');
      setRoleCounts(response.data);
    } catch (error) {
      console.log('Error fetching role counts:', error);
    }
  };

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: 'Recieved',
            borderColor: '#3cba9f',
            backgroundColor: '#71d1bd',
            fill: false,
          },
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: 'Applied',
            borderColor: '#3e95cd',
            backgroundColor: '#7bb6dd',
            fill: false,
          },

          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: 'Pending',
            borderColor: '#ffa500',
            backgroundColor: '#ffc04d',
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: 'Rejected',
            borderColor: '#c45850',
            backgroundColor: '#d78f89',
            fill: false,
          },
        ],
      },
    });
  }, []);
  return (
    <>
      <div className='flex'>
        <div>
          <div className='ml-2 mt-1 w-[650px] items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
              <h3 className='text-xl font-bold text-white sm:text-2xl'>
                Projection History
              </h3>
            </div>
          </div>
          <div className='mb-2 ml-2 mt-2 w-[650px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='flex w-[600px]'>
              <div className='my-auto h-fit w-full rounded-xl  border border-gray-700 pt-0  shadow-xl'>
                <canvas id='myChart'></canvas>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='ml-2 mt-1 w-[600px] items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
            <div className='max-w-lg'>
              <h3 className='text-xl font-bold text-white sm:text-2xl'>
                Users
              </h3>
            </div>
          </div>
          <div>
            <div className='flex'>
              <div className='mb-2 ml-2 mt-2 h-[165px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Customer
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          {roleCounts.customer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-2 ml-2 mt-2 h-[165px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Employee
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          {roleCounts.employee}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='mb-2 ml-2 h-[175px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Hotel Manager
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          {roleCounts.hotelManager}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-2 ml-2 h-[175px] w-[296px] items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
                <div>
                  <div className='absolute text-center'>
                    <p className='ml-8 text-center text-lg text-gray-300'>
                      Transport Manager
                    </p>
                    <div className='mb-2 ml-10 mt-2 items-start justify-between rounded-lg border border-gray-600 bg-gray-900 p-4 tracking-widest shadow-lg hover:bg-gray-700 hover:text-orange-800 sm:p-6 md:flex 2xl:col-span-2'>
                      <div className='flex w-full items-center justify-center pl-12 pr-12 hover:text-orange-600 '>
                        <p className='text-bold text-2xl text-white hover:text-orange-600'>
                          {roleCounts.tpmanager}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=' border-t border-gray-600' />
      <div className='mb-2 mt-2 flex gap-3 px-8 text-gray-400 '>
        <AiFillDatabase size={22} />
        <p>Logs</p>
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
      <div className='mx-auto max-w-screen-xl bg-gray-900  pt-2 md:px-2'>
        <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
          <div className='max-w-lg'>
            <h3 className='text-xl font-bold text-white sm:text-2xl'>Logs</h3>
            <p className='mt-2 text-white'>Find service reports here.</p>
          </div>
          <div className='mt-3 md:mt-0'></div>
        </div>
        <div className=' h-[1000px] rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
          <div className='mt-12 overflow-x-auto rounded-lg border shadow-sm '></div>
        </div>
      </div>
    </>
  );
}

export default SalesReport;
