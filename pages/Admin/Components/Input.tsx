import React, { HTMLInputTypeAttribute, forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type TInputProps = {
  lable: string;
  type?: HTMLInputTypeAttribute;
  htmlFor: string;
  placeholder: string;
};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ lable, type, htmlFor, placeholder, ...props }, ref) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true);
    return (
      <div>
        <label htmlFor={htmlFor} className='block py-3 text-gray-500'>
          {lable}
        </label>
        <div className='relative flex items-center rounded-md border p-2'>
          {type === 'password' && (
            <button
              className='absolute inset-y-0 right-3 my-auto text-gray-400 active:text-gray-600'
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <AiOutlineEye size={25} />
              ) : (
                <AiOutlineEyeInvisible size={25} />
              )}
            </button>
          )}
          <input
            ref={ref}
            {...props}
            placeholder={placeholder}
            id={htmlFor}
            className='ml-3 w-full bg-transparent p-1 text-gray-500 outline-none'
          />
        </div>
      </div>
    );
  }
);

export default Input;
