import { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

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
          <div className='relative mx-auto w-full max-w-xl rounded-md bg-white p-4 shadow-lg'>
            {title && (
              <div className='-mx-4 -mt-4 border-b border-gray-300 px-4 py-4'>
                <h1 className='text-xl font-bold'>{title}</h1>
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
