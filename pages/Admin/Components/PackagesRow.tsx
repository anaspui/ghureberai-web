// import React from 'react';

// interface Package {
//   PackageId: number;
//   Name: string;
//   ValidFrom: Date;
//   ValidTill: Date;
//   PackageType: string;
//   TransportFacility: string;
// }

// interface PackageRowProps {
//   packageItem: {
//     PackageId: number;
//     Name: string;
//     ValidFrom?: Date; // Optional ValidFrom
//     ValidTill?: Date; // Optional ValidTill
//     PackageType: string;
//     TransportFacility: string;
//   };
// }

// const PackageRow: React.FC<PackageRowProps> = ({ packageItem }) => {
//   return (
//     <tr key={packageItem.PackageId}>
//       <td>{packageItem.Name}</td>
//       <td>{packageItem.ValidFrom.toLocaleDateString()}</td>{' '}
//       {/* Convert to a formatted string */}
//       <td>{packageItem.ValidTill.toLocaleDateString()}</td>{' '}
//       {/* Convert to a formatted string */}
//       <td>{packageItem.PackageType}</td>
//       <td>{packageItem.TransportFacility}</td>
//       {/* Add more columns as needed */}
//     </tr>
//   );
// };

// export default PackageRow;
