import { ExclamationCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const ErrorHeader = ({
    error,
    visible,
    className = '',
    Icon = ExclamationCircleIcon,
}) => {
    if (!visible || !error) return null;

    return (
        <div
            className={`flex items-center gap-1 font-bold text-red-500 md:text-xl ${className}`}>
            <Icon className='w-em-1-75 h-em-1-75' fill='currentColor' />
            <span className='hidden md:block'>{error}</span>
        </div>
    );
};

export default ErrorHeader;
