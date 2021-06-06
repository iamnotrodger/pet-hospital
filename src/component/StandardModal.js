import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Modal from './Modal';

const StandardModal = ({ children, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='h-full flex justify-center items-start p-5 md:pt-10'>
                <div className='relative w-full max-w-5xl bg-white p-5 rounded-xl shadow-md'>
                    <XCircleIcon
                        className='absolute top-0 right-0 w-7 h-7 m-2 text-gray-400 hover:text-black active:text-black cursor-pointer'
                        onClick={onClose}
                    />
                    {children}
                </div>
            </div>
        </Modal>
    );
};

export default StandardModal;
