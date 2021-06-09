import React from 'react';

const FormGroup = ({ className = '', children }) => {
    return (
        <div className={`shadow p-4 pb-8 md:p-8 md:pb-10 ${className}`}>
            {children}
        </div>
    );
};

export default FormGroup;
