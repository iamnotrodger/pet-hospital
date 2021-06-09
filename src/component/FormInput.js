import { ErrorMessage, FastField } from 'formik';
import React from 'react';

const FormInput = ({ name, className = '', label, ...props }) => {
    return (
        <div className='relative mb-6 last:mb-0'>
            <label className='font-serif text-sm'>
                {label}
                <FastField
                    name={name}
                    className={`block w-full p-2 mt-2 text-lg shadow rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
                    {...props}
                />

                <ErrorMessage
                    component='div'
                    name={name}
                    className='absolute -bottom-6 w-full font-bold text-red-500'
                />
            </label>
        </div>
    );
};

export default FormInput;
