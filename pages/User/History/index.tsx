import { useState } from 'react';
import Navbar from '../Navbar';

export default () => {
  const tableItems = [
    {
      label: 'Packages',
      title: 'Top pages',
      items: [
        {
          prop: 'https://www.google.com',
          date: '129',
          impression: 'Successful',
        },
        {
          prop: 'https://www.youtube.com',
          date: '798',
          impression: 'On Process',
        },
        {
          prop: 'https://www.github.com',
          date: '399',
          impression: 'Pending',
        },
        {
          prop: 'https://www.floatui.com',
          date: '678',
          impression: 'Pending',
        },
      ],
    },
    {
      label: 'Hotels',
      title: 'Top countries',
      items: [
        {
          prop: 'Mauritania',
          date: '203',
          impression: 'Successful',
        },
        {
          prop: 'United state america',
          date: '408',
          impression: 'Successful',
        },
        {
          prop: 'France',
          date: '99',
          impression: 'Canceled',
        },
        {
          prop: 'Germany',
          date: '320',
          impression: 'Pending',
        },
      ],
    },
    {
      label: 'Devices',
      title: 'Top devices',
      items: [
        {
          prop: 'Android',
          date: '360',
          impression: 'On Process',
        },
        {
          prop: 'Linux',
          date: '190',
          impression: 'Successful',
        },
        {
          prop: 'Macbook',
          date: '129',
          impression: 'Pending',
        },
        {
          prop: 'Windows',
          date: '50',
          impression: 'Canceled',
        },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  const labelColors = {
    Successful: {
      color: 'text-green-600 bg-green-50',
    },
    'On Process': {
      color: 'text-blue-600 bg-blue-50',
    },
    Pending: {
      color: 'text-pink-600 bg-pink-50',
    },
    Canceled: {
      color: 'text-red-600 bg-red-50',
    },
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-4 px-4 md:px-8'>
        <div className='max-w-lg'>
          <h3 className='text-xl font-bold text-gray-800 sm:text-2xl'>
            Travel History
          </h3>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='mt-4 max-w-md px-4'
        >
          <div className='relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <input
              type='text'
              placeholder='Search'
              className='w-full rounded-md border bg-gray-50 py-3 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white'
            />
          </div>
        </form>
        <div className='mt-4 overflow-x-auto text-sm'>
          <ul
            role='tablist'
            className='flex w-full items-center gap-x-3 overflow-x-auto border-b'
          >
            {tableItems.map((item, idx) => (
              <li
                key={idx}
                className={`border-b-2 py-2 ${
                  selectedItem == idx
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-white text-gray-500'
                }`}
              >
                <button
                  role='tab'
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  className='rounded-lg px-4 py-2.5 font-medium duration-150 hover:bg-gray-50 hover:text-indigo-600 active:bg-gray-100'
                  onClick={() => setSelectedItem(idx)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <table className='w-full table-auto text-left'>
            <thead className='border-b font-medium text-gray-600'>
              <tr>
                <th className='w-9/12 py-4 pr-6'>
                  {tableItems[selectedItem].title}
                </th>
                <th className='py-4 pr-6'>Date</th>
                <th className='py-4 pr-6'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y text-gray-600'>
              {tableItems[selectedItem].items.map((item, idx) => (
                <tr key={idx}>
                  <td className='whitespace-nowrap py-4 pr-6'>{item.prop}</td>
                  <td className='whitespace-nowrap py-4 pr-6 text-indigo-600'>
                    {item.date}
                  </td>
                  <td className='whitespace-nowrap py-4 pr-6'>
                    {/* <span className={`py-2 px-3 rounded-full font-semibold text-xs ${labelColors[item?.impression]?.color || ""}`}>{item.impression}</span> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
