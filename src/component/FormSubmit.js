import { useFormikContext } from 'formik';
import React from 'react';

const FormSubmit = ({ label = 'Submit', className = '' }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <button
            onClick={handleSubmit}
            className={`py-2 px-6 text-xl text-white bg-blue-500 rounded-full shadow-lg transform hover:bg-blue-400 active:shadow-md active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
            type='submit'>
            {label}
        </button>
    );
};

export default FormSubmit;
