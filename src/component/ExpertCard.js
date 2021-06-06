import React from 'react';

const ExpertCard = ({ photo, name, role, description }) => {
    return (
        <figure className='flex items-center md:items-stretch p-6 md:p-0 rounded-lg shadow-xl bg-white overflow-hidden hover:bg-gray-50 active:shadow-md transition-all cursor-pointer'>
            <img
                src={photo}
                alt='doctor'
                className='w-20 h-20 md:w-48 object-cover md:h-auto rounded-full md:rounded-none'
            />
            <div className='pl-8 md:p-8'>
                <figcaption className='text-base font-bold'>
                    <div className='text-black'>{name}</div>
                    <div className='text-blue-500'>{role}</div>
                </figcaption>
                <blockquote className='hidden md:block'>
                    <p className='font-serif text-gray-500'>"{description}"</p>
                </blockquote>
            </div>
        </figure>
    );
};

export default ExpertCard;
