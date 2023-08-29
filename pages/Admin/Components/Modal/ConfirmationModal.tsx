import React, { ReactNode } from 'react';
import Modal from '.';

type TConfirmation = {
  show: boolean;
  hide: () => void;
  title: string;
  description: string;
  handleAction: () => void;
  icon: ReactNode;
  actionTitle: string;
};

function ConfirmationModal({
  show,
  hide,
  title,
  description,
  handleAction,
  icon,
  actionTitle,
}: TConfirmation) {
  return (
    <>
      <Modal show={show} hide={hide}>
        {icon && <>{icon}</>}
        <div className='mt-2 text-center'>
          <h4 className='text-lg font-medium text-gray-800'>{title}</h4>
          <p className='mt-2 text-[15px] leading-relaxed text-gray-500'>
            {description}
          </p>
        </div>
        <div className='mt-6 items-center gap-2 sm:flex'>
          <button
            className='mt-2 w-full flex-1 rounded-md bg-indigo-600 p-2.5 capitalize text-white outline-none ring-indigo-600 ring-offset-2 focus:ring-2'
            onClick={() => handleAction()}
          >
            {actionTitle}
          </button>
          <button
            className='mt-2 w-full flex-1 rounded-md border p-2.5 text-gray-800 outline-none ring-indigo-600 ring-offset-2 focus:ring-2'
            onClick={() => hide()}
          >
            Cancle
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
