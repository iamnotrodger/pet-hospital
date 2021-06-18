import React from 'react';
import ErrorHeader from './ErrorHeader';
import FormHeader from './FormHeader';

const FormHeaderGroup = ({ label, Icon, error, visible }) => {
    return (
        <div className='flex items-center md:justify-between gap-2 mb-3'>
            <FormHeader Icon={Icon}>{label}</FormHeader>
            <ErrorHeader error={error} visible={visible} />
        </div>
    );
};

export default FormHeaderGroup;
