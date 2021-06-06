import React from 'react';
import ExpertCard from './ExpertCard';

const ExpertList = ({ list }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {list.map((expert, i) => (
                <ExpertCard key={i} {...expert} />
            ))}
        </div>
    );
};

export default ExpertList;
