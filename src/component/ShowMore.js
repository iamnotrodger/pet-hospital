import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React from 'react';

const ShowMore = ({
    active,
    activeLabel = 'Show more',
    inactiveLabel = 'Show less',
    onClick,
}) => {
    return (
        <div className='md:hidden inline-flex mt-1'>
            <div
                className={`flex items-center py-1 px-3 rounded-full text-xs text-white ${
                    !active ? 'bg-gray-300' : 'bg-gray-500'
                }`}
                onClick={onClick}>
                <div className='mr-1'>
                    {!active ? activeLabel : inactiveLabel}
                </div>
                {!active ? (
                    <ChevronDownIcon className='w-4 h-4' />
                ) : (
                    <ChevronUpIcon className='w-4 h-4' />
                )}
            </div>
        </div>
    );
};

export default ShowMore;
