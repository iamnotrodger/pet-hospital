import React from 'react';

const Card = ({ children, selected = false, disabled = false, ...props }) => {
    return (
        <div
            className={`rounded-lg ${
                !selected ? 'shadow-xl' : 'shadow'
            } overflow-hidden ${
                !disabled ? clickUtilClasses : ''
            } transition-all`}
            {...props}>
            {children}
        </div>
    );
};

const clickUtilClasses =
    'transform active:shadow-md active:scale-95 cursor-pointer';

export default Card;
