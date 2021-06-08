import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ list }) => {
    return (
        <div className='grid grid-cols-services xl:grid-cols-servicesLarge auto-rows-fr gap-6 xl:gap-4'>
            {list.map((service, i) => (
                <ServiceCard
                    key={i}
                    icon={service.icon}
                    label={service.label}
                    description={service.description}
                />
            ))}
        </div>
    );
};

export default ServiceList;
