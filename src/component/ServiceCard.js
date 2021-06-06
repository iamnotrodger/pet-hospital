import { InformationCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Card from './Card';
import Icon from './Icon';
import StandardModal from './StandardModal';

const ServiceCard = ({
    icon,
    label,
    description,
    onClick,
    selected = false,
    disabled = false,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalClick = (event) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <Card onClick={onClick} disabled={disabled}>
            <div
                className={`relative flex flex-col items-center h-full p-6 text-center ${
                    selected ? 'bg-blue-400 text-white' : 'bg-white text-black'
                }`}>
                <InformationCircleIcon
                    className='absolute top-0 right-0 w-5 h-5 m-2 text-gray-400 hover:text-black active:text-black'
                    onClick={handleModalClick}
                />
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

            <StandardModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                label={label}
                description={description}>
                <h2 className='font-sans font-bold text-xl mb-3'>{label}</h2>
                <p className='font-serif text-base text-gray-500'>
                    {description}
                </p>
            </StandardModal>
        </Card>
    );
};

export default ServiceCard;
