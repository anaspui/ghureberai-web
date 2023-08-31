import { useEffect } from 'react';
import { Chart } from 'chart.js';
function SalesReport() {
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
      <div className='ml-2 mt-1 items-start justify-between rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
        <div className='max-w-lg'>
          <h3 className='text-xl font-bold text-white sm:text-2xl'>
            Projection History
          </h3>
        </div>
      </div>
      <div className='mb-2 ml-2 mt-2 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
        <div className='flex w-[900px]'>
          <div className='my-auto h-fit w-full rounded-xl  border border-gray-700 pt-0  shadow-xl'>
            <canvas id='myChart'></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesReport;
