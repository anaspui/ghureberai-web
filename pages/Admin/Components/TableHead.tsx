import React from 'react';

type TProps = {
  colNames: string[];
};

function TableHead({ colNames }: TProps) {
  return (
    <thead className='border-b bg-gray-800 font-medium text-gray-500'>
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
