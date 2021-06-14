import React from 'react';

const FormGroup = ({ id, className = '', children }) => {
    return (
        <div
            className={`shadow rounded-xl p-4 pb-8 md:p-8 md:pb-10 ${className}`}
            id={id}>
            {children}
        </div>
    );
};

export default FormGroup;
