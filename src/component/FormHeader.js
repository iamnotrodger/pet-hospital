import React from 'react';

const FormHeader = ({ children, className = '', Icon }) => {
    return (
        <div className='flex items-center text-2xl lg:text-3xl text-black'>
            {Icon && (
                <Icon className='w-em-1 h-em-1 mr-2' fill='currentColor' />
            )}
            <h3 className={`font-sans font-bold ${className}`}>{children}</h3>
        </div>
    );
};

export default FormHeader;
