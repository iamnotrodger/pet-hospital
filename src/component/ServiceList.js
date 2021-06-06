import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ list }) => {
    return (
        <div className='grid grid-cols-services auto-rows-fr gap-6'>
            {list.map((service, i) => (
                <ServiceCard
                    key={i}
                    label={service.label}
                    icon={service.icon}
                />
            ))}
        </div>
    );
};

export default ServiceList;
