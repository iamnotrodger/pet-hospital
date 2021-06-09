import React from 'react';

const FormHeader = ({ children, className = '' }) => {
    return (
        <h3
            className={`font-sans font-bold text-black text-2xl lg:text-3xl ${className}`}>
            {children}
        </h3>
    );
};

export default FormHeader;
