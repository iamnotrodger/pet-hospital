import { useFormikContext } from 'formik';
import React from 'react';
import FormHeaderGroup from './FormHeaderGroup';
import ServiceList from './ServiceList';

const SelectServices = ({
    name,
    id,
    label = 'Choose services',
    list,
    className,
}) => {
    const { values, errors, touched, setFieldValue } = useFormikContext();

    const handleClick = (service) => {
        if (!service) return;

        const services = values[name];
        const index = services.findIndex((s) => s.id === service.id);

        if (index > -1) {
            services.splice(index, 1);
            setFieldValue(name, [...services]);
        } else {
            setFieldValue(name, [...services, service]);
        }
    };

    return (
        <div className={className} id={id}>
            <FormHeaderGroup
                label={label}
                error={errors[name]}
                visible={touched[name]}
            />
            <ServiceList
                list={list}
                selected={values[name]}
                onClick={handleClick}
            />
        </div>
    );
};

export default SelectServices;
