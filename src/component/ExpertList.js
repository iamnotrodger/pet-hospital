import React from 'react';
import ExpertCard from './ExpertCard';

const ExpertList = ({ list, selected, onClick }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {list.map((expert, i) => (
                <ExpertCard
                    key={i}
                    photo={expert.photo}
                    name={expert.name}
                    role={expert.role}
                    description={expert.description}
                    selected={selected && selected.id === expert.id}
                    onClick={() => onClick(expert)}
                />
            ))}
        </div>
    );
};

export default ExpertList;
