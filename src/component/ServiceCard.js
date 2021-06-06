import React from 'react';
import Card from './Card';
import Icon from './Icon';

const ServiceCard = ({
    icon,
    label,
    onClick,
    selected = false,
    disabled = false,
}) => {
    return (
        <Card onClick={onClick} disabled={disabled}>
            <div
                className={`flex flex-col items-center h-full p-6 text-center ${
                    selected ? 'bg-blue-400 text-white' : 'bg-white text-black'
                }`}>
                <div className='mb-3'>
                    <Icon
                        name={icon}
                        className='w-8 h-8'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                    />
                </div>
                <div className='inline font-sans font-bold text-base leading-none md:text-lg md:leading-none line-clamp-2'>
                    {label}
                </div>
            </div>
        </Card>
    );
};

export default ServiceCard;
