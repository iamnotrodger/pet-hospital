import React from 'react';
import Card from './Card';

const ServiceCard = ({ Icon, label, onClick, disabled = false }) => {
    return (
        <Card onClick={onClick} disabled={disabled}>
            <div className='h-full p-6 text-center bg-white hover:bg-gray-50'>
                {Icon}
                <p className='inline font-sans font-bold text-base md:text-lg text-black line-clamp-2'>
                    {label}
                </p>
            </div>
        </Card>
    );
};

export default ServiceCard;
