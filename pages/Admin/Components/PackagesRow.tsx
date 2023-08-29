import React from 'react';
import { Package } from './PackagesTable';

interface PackageRowProps {
  packageItem: Package;
}

const PackageRow: React.FC<PackageRowProps> = ({ packageItem }) => {
  return (
    <tr key={packageItem.PackageId}>
      <td>{packageItem.Name}</td>
      <td>{packageItem.ValidFrom}</td>
      <td>{packageItem.ValidTill}</td>
      <td>{packageItem.PackageType}</td>
      <td>{packageItem.TransportFacility}</td>
      {/* Add more columns as needed */}
    </tr>
  );
};

export default PackageRow;
