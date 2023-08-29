import React from 'react';
import PackageRow from './PackagesRow';

export interface Package {
  PackageId: number;
  Name: string;
  ValidFrom?: Date;
  ValidTill?: Date;
  PackageType: PackageType;
  TransportFacility: Validity;
}

export enum PackageType {
  Hotel = 'hotel',
  Transport = 'transport',
  Package = 'package',
}

export enum Validity {
  TRUE = 'true',
  FALSE = 'false',
}

interface PackagesTableProps {
  packages: Package[];
}

const PackagesTable: React.FC<PackagesTableProps> = ({ packages }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 bg-white'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='px-4 py-2 text-left'>Name</th>
            <th className='px-4 py-2 text-left'>Valid From</th>
            <th className='px-4 py-2 text-left'>Valid Till</th>
            <th className='px-4 py-2 text-left'>Package Type</th>
            <th className='px-4 py-2 text-left'>Transport Facility</th>
            {/* Add more header columns as needed */}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-300'>
          {packages.map((packageItem) => (
            <PackageRow key={packageItem.PackageId} packageItem={packageItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesTable;
