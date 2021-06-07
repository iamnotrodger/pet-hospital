import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({
    isOpen,
    onClose,
    fixed = false,
    overlay = true,
    children,
}) => {
    if (!isOpen) return null;

    return ReactDom.createPortal(
        <div className='fixed inset-0 z-50'>
            <div
                className={`absolute inset-0 ${
                    overlay ? 'bg-black bg-opacity-25' : ''
                }`}
                onClick={!fixed && onClose}
            />
            {children}
        </div>,
        document.getElementById('portal'),
    );
};

export default Modal;
