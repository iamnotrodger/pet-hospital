import React, { useState } from 'react';
import Card from './Card';
import ShowMore from './ShowMore';
import { CheckIcon } from '@heroicons/react/solid';

const ExpertCard = ({
    photo,
    name,
    role,
    description,
    selected = false,
    disabled = false,
    onClick,
}) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = (event) => {
        event.stopPropagation();
        setShowMore(!showMore);
    };

    return (
        <Card disabled={disabled} selected={selected}>
            <figure
                className='grid grid-cols-experts gap-x-8 items-start h-full md:items-stretch p-6 md:p-0 bg-white hover:bg-gray-50'
                onClick={onClick}>
                {selected && (
                    <div className='absolute top-0 right-0 p-1 bg-blue-500 rounded-bl-lg'>
                        <CheckIcon
                            className='w-5 h-5 lg:w-7 lg:h-7 text-white'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        />
                    </div>
                )}

                <img
                    src={photo}
                    alt='doctor'
                    className='col-span-1 row-span-3 w-20 h-20 md:w-48 object-cover md:h-auto rounded-full md:rounded-none'
                />

                <figcaption className='font-bold md:mt-6 md:mr-6 leading-none'>
                    <div className='text-black md:text-xl'>{name}</div>
                    <div className='text-blue-500'>{role}</div>
                </figcaption>

                <div className='md:hidden inline-flex mt-1'>
                    <ShowMore active={showMore} onClick={handleShowMore} />
                </div>

                <blockquote
                    className={`${
                        !showMore ? 'hidden' : 'col-span-full mt-2'
                    } md:block md:mr-6 md:col-span-1 md:mb-6`}>
                    <p className='font-serif text-gray-500'>"{description}"</p>
                </blockquote>
            </figure>
        </Card>
    );
};

export default ExpertCard;
