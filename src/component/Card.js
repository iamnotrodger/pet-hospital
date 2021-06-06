import React from 'react';

const Card = ({ children, disabled = false, ...props }) => {
    return (
        <div
            className={`rounded-lg shadow-xl overflow-hidden ${
                !disabled ? clickUtilClasses : ''
            }`}
            {...props}>
            {children}
        </div>
    );
};

const clickUtilClasses =
    'transform hover:bg-gray-50 active:shadow-md active:scale-95 transition-all cursor-pointer';

export default Card;
