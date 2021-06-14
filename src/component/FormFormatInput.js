import { ErrorMessage, useFormikContext } from 'formik';
import React from 'react';

const FormFormatInput = ({ name, label, format, className = '', ...props }) => {
    const { values, setFieldValue } = useFormikContext();
    const handleChange = (event) => {
        let { value } = event.target;
        if (format) value = format(value);
        setFieldValue(name, value);
    };

    return (
        <div className='relative mb-6 last:mb-0'>
            <label className='font-serif text-sm'>
                {label}
                <input
                    name={name}
                    value={values[name]}
                    onChange={handleChange}
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

export default FormFormatInput;
