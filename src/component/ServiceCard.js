import React from 'react';

const ServiceCard = ({ Icon, label, onClick }) => {
    return (
        <div
            className='p-8 rounded-lg shadow-xl text-center bg-white hover:bg-gray-50 active:shadow-md transition-all cursor-pointer'
            onClick={onClick}>
            {Icon}
            <p className='inline font-sans font-bold text-base text-black'>
                {label}
            </p>
        </div>
    );
};

export default ServiceCard;
