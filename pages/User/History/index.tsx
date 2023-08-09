import React from 'react';
import Navbar from '../Navbar';

const History = () => {
  return (
    <>
      <section className='bg-gray-50 p-3 antialiased sm:p-5'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
          <div className='relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
            <div className='flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0'>
              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label htmlFor='simple-search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <svg
                        aria-hidden='true'
                        className='h-5 w-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='simple-search'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                      placeholder='Search'
                      required
                    />
                  </div>
                </form>
              </div>
              <div className='flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0'>
                <button
                  type='button'
                  id='createProductModalButton'
                  data-modal-target='createProductModal'
                  data-modal-toggle='createProductModal'
                  className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4'
                >
                  <svg
                    className='mr-2 h-3.5 w-3.5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                    />
                  </svg>
                  Add product
                </button>
                <div className='flex w-full items-center space-x-3 md:w-auto'>
                  <button
                    id='actionsDropdownButton'
                    data-dropdown-toggle='actionsDropdown'
                    className='hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto'
                    type='button'
                  >
                    <svg
                      className='-ml-1 mr-1.5 h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                    Actions
                  </button>
                  <div
                    id='actionsDropdown'
                    className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                  >
                    <ul
                      className='py-1 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='actionsDropdownButton'
                    >
                      <li>
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  <button
                    id='filterDropdownButton'
                    data-dropdown-toggle='filterDropdown'
                    className='hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto'
                    type='button'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='mr-2 h-4 w-4 text-gray-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Filter
                    <svg
                      className='-mr-1 ml-1.5 h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        clipRule='evenodd'
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      />
                    </svg>
                  </button>
                  <div
                    id='filterDropdown'
                    className='z-10 hidden w-56 rounded-lg bg-white p-3 shadow dark:bg-gray-700'
                  >
                    <h6 className='mb-3 text-sm font-medium text-gray-900 dark:text-white'>
                      Category
                    </h6>
                    <ul
                      className='space-y-2 text-sm'
                      aria-labelledby='filterDropdownButton'
                    >
                      <li className='flex items-center'>
                        <input
                          id='apple'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='apple'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Apple (56)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='fitbit'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='fitbit'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Fitbit (56)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='dell'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='dell'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Dell (56)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='asus'
                          type='checkbox'
                          value=''
                          checked
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='asus'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Asus (97)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='logitech'
                          type='checkbox'
                          value=''
                          checked
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='logitech'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Logitech (97)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='msi'
                          type='checkbox'
                          value=''
                          checked
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='msi'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          MSI (97)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='bosch'
                          type='checkbox'
                          value=''
                          checked
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='bosch'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Bosch (176)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='sony'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='sony'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Sony (234)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='samsung'
                          type='checkbox'
                          value=''
                          checked
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='samsung'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Samsung (76)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='canon'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='canon'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Canon (49)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='microsoft'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='microsoft'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Microsoft (45)
                        </label>
                      </li>
                      <li className='flex items-center'>
                        <input
                          id='razor'
                          type='checkbox'
                          value=''
                          className='text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700'
                        />
                        <label
                          htmlFor='razor'
                          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                          Razor (49)
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-4 py-4'>
                      Product name
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Category
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Brand
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Description
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      Price
                    </th>
                    <th scope='col' className='px-4 py-3'>
                      <span className='sr-only'>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Apple iMac 27&#34;
                    </th>
                    <td className='px-4 py-3'>PC</td>
                    <td className='px-4 py-3'>Apple</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$2999</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='apple-imac-27-dropdown-button'
                        data-dropdown-toggle='apple-imac-27-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='apple-imac-27-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='apple-imac-27-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Apple iMac 20&#34;
                    </th>
                    <td className='px-4 py-3'>PC</td>
                    <td className='px-4 py-3'>Apple</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$1499</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='apple-imac-20-dropdown-button'
                        data-dropdown-toggle='apple-imac-20-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='apple-imac-20-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='apple-imac-20-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Apple iPhone 14
                    </th>
                    <td className='px-4 py-3'>Phone</td>
                    <td className='px-4 py-3'>Apple</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$999</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='apple-iphone-14-dropdown-button'
                        data-dropdown-toggle='apple-iphone-14-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='apple-iphone-14-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='apple-iphone-14-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Apple iPad Air
                    </th>
                    <td className='px-4 py-3'>Tablet</td>
                    <td className='px-4 py-3'>Apple</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$1199</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='apple-ipad-air-dropdown-button'
                        data-dropdown-toggle='apple-ipad-air-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='apple-ipad-air-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='apple-ipad-air-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Xbox Series S
                    </th>
                    <td className='px-4 py-3'>Gaming/Console</td>
                    <td className='px-4 py-3'>Microsoft</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$299</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='xbox-series-s-dropdown-button'
                        data-dropdown-toggle='xbox-series-s-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='xbox-series-s-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='xbox-series-s-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      PlayStation 5
                    </th>
                    <td className='px-4 py-3'>Gaming/Console</td>
                    <td className='px-4 py-3'>Sony</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$799</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='playstation-5-dropdown-button'
                        data-dropdown-toggle='playstation-5-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='playstation-5-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='playstation-5-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Xbox Series X
                    </th>
                    <td className='px-4 py-3'>Gaming/Console</td>
                    <td className='px-4 py-3'>Microsoft</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$699</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='xbox-series-x-dropdown-button'
                        data-dropdown-toggle='xbox-series-x-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='xbox-series-x-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='xbox-series-x-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Apple Watch SE
                    </th>
                    <td className='px-4 py-3'>Watch</td>
                    <td className='px-4 py-3'>Apple</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$399</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='apple-watch-se-dropdown-button'
                        data-dropdown-toggle='apple-watch-se-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='apple-watch-se-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='apple-watch-se-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      NIKON D850
                    </th>
                    <td className='px-4 py-3'>Photo</td>
                    <td className='px-4 py-3'>Nikon</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$599</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='nikon-d850-dropdown-button'
                        data-dropdown-toggle='nikon-d850-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='nikon-d850-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='nikon-d850-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b dark:border-gray-700'>
                    <th
                      scope='row'
                      className='whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white'
                    >
                      Monitor BenQ EX2710Q
                    </th>
                    <td className='px-4 py-3'>TV/Monitor</td>
                    <td className='px-4 py-3'>BenQ</td>
                    <td className='max-w-[12rem] truncate px-4 py-3'>
                      What is a product description? A product description
                      describes a product.
                    </td>
                    <td className='px-4 py-3'>$499</td>
                    <td className='flex items-center justify-end px-4 py-3'>
                      <button
                        id='benq-ex2710q-dropdown-button'
                        data-dropdown-toggle='benq-ex2710q-dropdown'
                        className='dark:hover-bg-gray-800 inline-flex items-center rounded-lg p-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                        type='button'
                      >
                        <svg
                          className='h-5 w-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                        </svg>
                      </button>
                      <div
                        id='benq-ex2710q-dropdown'
                        className='z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700'
                      >
                        <ul
                          className='py-1 text-sm'
                          aria-labelledby='benq-ex2710q-dropdown-button'
                        >
                          <li>
                            <button
                              type='button'
                              data-modal-target='updateProductModal'
                              data-modal-toggle='updateProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                />
                              </svg>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='readProductModal'
                              data-modal-toggle='readProductModal'
                              className='flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                              >
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                />
                              </svg>
                              Preview
                            </button>
                          </li>
                          <li>
                            <button
                              type='button'
                              data-modal-target='deleteModal'
                              data-modal-toggle='deleteModal'
                              className='flex w-full items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400'
                            >
                              <svg
                                className='mr-2 h-4 w-4'
                                viewBox='0 0 14 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  fill='currentColor'
                                  d='M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z'
                                />
                              </svg>
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav
              className='flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0'
              aria-label='Table navigation'
            >
              <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                Showing
                <span className='font-semibold text-gray-900 dark:text-white'>
                  1-10
                </span>
                of
                <span className='font-semibold text-gray-900 dark:text-white'>
                  1000
                </span>
              </span>
              <ul className='inline-flex items-stretch -space-x-px'>
                <li>
                  <a
                    href='#'
                    className='ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Previous</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    aria-current='page'
                    className='text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border px-3 py-2 text-sm leading-tight dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  >
                    <span className='sr-only'>Next</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div
        id='createProductModal'
        tabIndex={-1}
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'
      >
        <div className='relative max-h-full w-full max-w-2xl p-4'>
          <div className='relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5'>
            <div className='mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Add Product
              </h3>
              <button
                type='button'
                className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-target='createProductModal'
                data-modal-toggle='createProductModal'
              >
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form action='#'>
              <div className='mb-4 grid gap-4 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Type product name'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='brand'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Brand
                  </label>
                  <input
                    type='text'
                    name='brand'
                    id='brand'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Product brand'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Price
                  </label>
                  <input
                    type='number'
                    name='price'
                    id='price'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='$2999'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='category'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Category
                  </label>
                  <select
                    id='category'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  >
                    <option selected=''>Select category</option>
                    <option value='TV'>TV/Monitors</option>
                    <option value='PC'>PC</option>
                    <option value='GA'>Gaming/Console</option>
                    <option value='PH'>Phones</option>
                  </select>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='description'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Description
                  </label>
                  <textarea
                    id='description'
                    rows={4}
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Write product description here'
                  ></textarea>
                </div>
              </div>
              <button
                type='submit'
                className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
              >
                <svg
                  className='-ml-1 mr-1 h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                    clipRule='evenodd'
                  />
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        id='updateProductModal'
        tabIndex={-1}
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'
      >
        <div className='relative max-h-full w-full max-w-2xl p-4'>
          <div className='relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5'>
            <div className='mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Update Product
              </h3>
              <button
                type='button'
                className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='updateProductModal'
              >
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form action='#'>
              <div className='mb-4 grid gap-4 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value='iPad Air Gen 5th Wi-Fi'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Ex. Apple iMac 27&ldquo;'
                  />
                </div>
                <div>
                  <label
                    htmlFor='brand'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Brand
                  </label>
                  <input
                    type='text'
                    name='brand'
                    id='brand'
                    value='Google'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Ex. Apple'
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Price
                  </label>
                  <input
                    type='number'
                    value='399'
                    name='price'
                    id='price'
                    className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='$299'
                  />
                </div>
                <div>
                  <label
                    htmlFor='category'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Category
                  </label>
                  <select
                    id='category'
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                  >
                    <option selected=''>Electronics</option>
                    <option value='TV'>TV/Monitors</option>
                    <option value='PC'>PC</option>
                    <option value='GA'>Gaming/Console</option>
                    <option value='PH'>Phones</option>
                  </select>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='description'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Description
                  </label>
                  <textarea
                    id='description'
                    rows={5}
                    className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    placeholder='Write a description...'
                  >
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US
                  </textarea>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <button
                  type='submit'
                  className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                >
                  Update product
                </button>
                <button
                  type='button'
                  className='inline-flex items-center rounded-lg border border-red-600 px-5 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
                >
                  <svg
                    className='-ml-1 mr-1 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id='readProductModal'
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'
      >
        <div className='relative max-h-full w-full max-w-xl p-4'>
          <div className='relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5'>
            <div className='mb-4 flex justify-between rounded-t sm:mb-5'>
              <div className='text-lg text-gray-900 dark:text-white md:text-xl'>
                <h3 className='font-semibold '>Apple iMac 27”</h3>
                <p className='font-bold'>$2999</p>
              </div>
              <div>
                <button
                  type='button'
                  className='inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-toggle='readProductModal'
                >
                  <svg
                    aria-hidden='true'
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
            </div>
            <dl>
              <dt className='mb-2 font-semibold leading-none text-gray-900 dark:text-white'>
                Details
              </dt>
              <dd className='mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5'>
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
              <dt className='mb-2 font-semibold leading-none text-gray-900 dark:text-white'>
                Category
              </dt>
              <dd className='mb-4 font-light text-gray-500 dark:text-gray-400 sm:mb-5'>
                Electronics/PC
              </dd>
            </dl>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3 sm:space-x-4'>
                <button
                  type='button'
                  className='bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                >
                  <svg
                    aria-hidden='true'
                    className='-ml-1 mr-1 h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Edit
                </button>
                <button
                  type='button'
                  className='hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
                >
                  Preview
                </button>
              </div>
              <button
                type='button'
                className='inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'
              >
                <svg
                  aria-hidden='true'
                  className='-ml-1 mr-1.5 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id='deleteModal'
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0'
      >
        <div className='relative max-h-full w-full max-w-md p-4'>
          <div className='relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5'>
            <button
              type='button'
              className='absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='deleteModal'
            >
              <svg
                aria-hidden='true'
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
            <svg
              className='mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <p className='mb-4 text-gray-500 dark:text-gray-300'>
              Are you sure you want to delete this item?
            </p>
            <div className='flex items-center justify-center space-x-4'>
              <button
                data-modal-toggle='deleteModal'
                type='button'
                className='focus:ring-primary-300 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600'
              >
                No, cancel
              </button>
              <button
                type='submit'
                className='rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
