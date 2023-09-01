import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaUserCog } from 'react-icons/fa';
import { IoPersonAddSharp } from 'react-icons/io5';

type TModal = {
  show: boolean;
  title?: string;
  hide: () => void;
  children: ReactNode;
};

const Modal = ({ show, hide, title, children }: TModal) => {
  return (
    show &&
    createPortal(
      <div className='fixed inset-0 z-30 overflow-y-auto'>
        <div
          className='fixed inset-0 h-full w-full bg-black opacity-40'
          onClick={() => hide()}
        ></div>
        <div className='flex min-h-screen items-center px-4 py-8'>
          <div className='relative mx-auto w-full max-w-xl rounded-md bg-gray-800 p-4 shadow-lg'>
            {title && (
              <div className=' rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
                <div className='-mx-4 -mt-4 flex gap-3 px-4 py-4'>
                  {title === 'Edit employee' ? (
                    <FaUserCog size={28} className='text-orange-700' />
                  ) : (
                    <IoPersonAddSharp size={28} className='text-orange-700' />
                  )}
                  <h1 className='text-xl font-bold text-white'>{title}</h1>
                </div>
              </div>
            )}
            <div className='mt-3'>{children}</div>
            {/* <div className='items-center gap-2 mt-3 sm:flex'></div> */}
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;
