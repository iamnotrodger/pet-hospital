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
        <Card disabled={disabled} selected={selected}>
            <div
                onClick={onClick}
                className={`relative flex flex-col items-center h-full p-6 lg:p-8 text-center ${
                    selected
                        ? 'text-white bg-blue-400 hover:bg-blue-500'
                        : 'bg-white text-black hover:bg-gray-50'
                } `}>
                <InformationCircleIcon
                    className={`absolute top-0 right-0 w-5 h-5 lg:w-7 lg:h-7 m-2 ${
                        selected ? 'text-gray-50' : 'text-gray-400'
                    } hover:text-black active:text-black transition-all`}
                    onClick={handleModalClick}
                />
                <div className='mb-3'>
                    <Icon
                        name={icon}
                        className='w-8 h-8 lg:w-10 lg:h-10'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                    />
                </div>
                <div className='inline font-sans font-bold text-base leading-none lg:text-xl line-clamp-2'>
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
