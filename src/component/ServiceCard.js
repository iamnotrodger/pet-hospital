import React from 'react';
import Card from './Card';

const ServiceCard = ({ Icon, label, onClick, disabled = false }) => {
    return (
        <Card onClick={onClick} disabled={disabled}>
            <div className='p-6 text-center bg-white'>
                {Icon}
                <p className='inline font-sans font-bold text-base md:text-lg  text-black'>
                    {label}
                </p>
            </div>
        </Card>
    );
};

export default ServiceCard;
