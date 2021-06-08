import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ list, selected, onClick }) => {
    return (
        <div className='grid grid-cols-services xl:grid-cols-servicesLarge auto-rows-fr gap-6 xl:gap-4'>
            {list.map((service, i) => (
                <ServiceCard
                    key={i}
                    icon={service.icon}
                    label={service.label}
                    description={service.description}
                    selected={checkServiceSelected(service, selected)}
                    onClick={() => onClick(service)}
                />
            ))}
        </div>
    );
};

const checkServiceSelected = (service, selected) => {
    if (!selected || selected.length === 0) return false;
    return selected.some((s) => s.id === service.id);
};

export default ServiceList;
