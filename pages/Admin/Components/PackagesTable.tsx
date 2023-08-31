import React, { useEffect, useState } from 'react';
import axiosInstance from '@/pages/utils/axiosInstance';
import TableHead from '../Components/TableHead';
import { AiFillDelete } from 'react-icons/ai';

const colNames = [
  'Package Id',
  'Name',
  'Valid From',
  'Valid Till',
  'Type',
  'Rental',
];

const limit = 2;

interface Package {
  PackageId: string;
  Name: string;
  ValidFrom: string;
  ValidTill: string;
  PackageType: string;
  TransportFacility: string;
}

function PackageManagement() {
  const [packageData, setPackageData] = useState<Package[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPackageData() {
      try {
        const response = await axiosInstance({
          method: 'get',
          url: '/admin/showallpackages',
          withCredentials: true,
        });
        setPackageData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchPackageData();
  }, []);

  useEffect(() => {
    if (packageData && currentPage) {
      setPackages(paginate(packageData, currentPage, limit) || []);
    }
  }, [packageData, currentPage]);

  function paginate(items: any, page = 1, perPage = limit) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  }

  const handleDeletePackage = async (selectedPackage: Package) => {
    const packageId = selectedPackage.PackageId;
    console.log('Package Id:', packageId);

    try {
      const response = await axiosInstance.delete(
        '/package/delete/' + packageId
      );
      if (response.status === 200) {
        setPackageData((prev) =>
          prev.filter((pkg) => pkg.PackageId !== packageId)
        );
      } else {
        console.log('Package Not Deleted', response);
      }
    } catch (error) {
      console.error('Error deleting package', error);
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl bg-gray-900 px-4 pt-4 md:px-8'>
      <div className='mb-4 items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:flex 2xl:col-span-2'>
        <div className='max-w-lg'>
          <h3 className='text-xl font-bold text-white sm:text-2xl'>Packages</h3>
          <h4 className=' text-white'>Review packages from here</h4>
        </div>
        <div className='max-w-lg'>
          <a href='/Package'>
            <button className='mb-2 mr-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'>
              Packages Page
            </button>
          </a>
        </div>
      </div>
      <div className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
        <div className='mt-12 overflow-x-auto'>
          <table className='w-full table-auto text-left text-sm'>
            <TableHead colNames={colNames} />
            <tbody className='divide-y text-white'>
              {packages?.map((pkg, idx) => (
                <PackageRow
                  key={idx}
                  package={pkg}
                  handleDeletePackage={handleDeletePackage}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className='mx-auto max-w-screen-xl px-4 py-12 text-white md:px-8'>
          <div className='flex items-center justify-between text-sm font-medium text-white'>
            <button
              onClick={() =>
                currentPage > 1 && setCurrentPage((prev) => prev - 1)
              }
              className='rounded-lg border bg-gray-900 px-4 py-2 duration-150 hover:bg-gray-600'
            >
              Previous
            </button>
            <div>
              Page {currentPage} of {Math.round(packageData?.length / limit)}
            </div>
            <button
              onClick={() =>
                currentPage < Math.round(packageData?.length / limit) &&
                setCurrentPage((prev) => prev + 1)
              }
              className='rounded-lg border bg-gray-900 px-4 py-2 duration-150 hover:bg-gray-600'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PackageRow = ({
  package: pkg,
  handleDeletePackage,
}: {
  package: Package;
  handleDeletePackage: (selectedPackage: Package) => Promise<void>;
}) => {
  return (
    <tr key={pkg.PackageId} className=''>
      <td className='flex items-center gap-x-3 whitespace-nowrap px-6 py-3 '>
        <img
          src={'https://www.svgrepo.com/download/73468/package.svg'}
          alt={`${pkg.Name}'s profile picture`}
          className='h-10 w-10 rounded-full'
        />
        <div>
          <span className='block text-sm font-medium text-white'>
            {pkg.PackageId}
          </span>
        </div>
      </td>
      <td className='whitespace-nowrap px-6 py-4 capitalize'>{pkg.Name}</td>
      <td className='whitespace-nowrap px-6 py-4 capitalize'>
        {new Date(pkg.ValidFrom).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className='whitespace-nowrap px-6 py-4'>
        {new Date(pkg.ValidTill).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className='whitespace-nowrap px-6 py-4 capitalize'>
        {pkg.PackageType}
      </td>
      <td className='whitespace-nowrap px-6 py-4 capitalize'>
        {pkg.TransportFacility === 'true' ? 'Yes' : 'No'}
      </td>
      <td className='whitespace-nowrap px-6 text-right'>
        <button
          onClick={() => handleDeletePackage(pkg)}
          className='rounded-lg px-3 py-2 font-medium leading-none text-red-600 duration-150 hover:bg-red-600 hover:text-white'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PackageManagement;
