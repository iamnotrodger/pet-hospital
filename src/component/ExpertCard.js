import React from 'react';
import Card from './Card';

const ExpertCard = ({
    photo,
    name,
    role,
    description,
    disabled = false,
    onClick,
}) => {
    return (
        <Card disabled={disabled} onClick={onClick}>
            <figure className='flex items-center md:items-stretch p-6 md:p-0 bg-white'>
                <img
                    src={photo}
                    alt='doctor'
                    className='w-20 h-20 md:w-48 object-cover md:h-auto rounded-full md:rounded-none'
                />
                <div className='text-base md:text-lg pl-8 md:p-8'>
                    <figcaption className='font-bold'>
                        <div className='text-black'>{name}</div>
                        <div className='text-blue-500'>{role}</div>
                    </figcaption>
                    <blockquote className='hidden md:block'>
                        <p className='font-serif text-gray-500'>
                            "{description}"
                        </p>
                    </blockquote>
                </div>
            </figure>
        </Card>
    );
};

export default ExpertCard;
