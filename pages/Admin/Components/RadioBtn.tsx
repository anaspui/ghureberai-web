import React, { forwardRef } from 'react';

type TRadioType = {
  label: string;
  name: string;
  value: string | undefined;
};

const RadioBtn = forwardRef<HTMLInputElement, TRadioType>(
  ({ label, name, value, ...props }, ref) => {
    return (
      <>
        <div className='mb-4 flex items-center'>
          <input
            id={name}
            type='radio'
            name={name}
            value={value}
            className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
          />
          <label
            htmlFor={name}
            className='ml-2 text-sm font-medium capitalize text-gray-900 dark:text-gray-300'
          >
            {label}
          </label>
        </div>
      </>
    );
  }
);

export default RadioBtn;
