import React from 'react';

type TProps = {
  colNames: string[];
};

function TableHead({ colNames }: TProps) {
  return (
    <thead className='border-b bg-gray-50 font-medium text-gray-600'>
      <tr>
        {colNames.map((col, idx) => (
          <th key={idx} className='px-6 py-3'>
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
