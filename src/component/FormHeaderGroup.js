import React from 'react';
import ErrorHeader from './ErrorHeader';
import FormHeader from './FormHeader';

const FormHeaderGroup = ({ label, error, visible }) => {
    return (
        <div className='flex items-center md:justify-between gap-2 mb-3'>
            <FormHeader>{label}</FormHeader>
            <ErrorHeader error={error} visible={visible} />
        </div>
    );
};

export default FormHeaderGroup;
