import { useFormikContext } from 'formik';
import React from 'react';
import ExpertList from './ExpertList';
import FormHeaderGroup from './FormHeaderGroup';

const SelectExpert = ({
    name,
    id,
    label = 'Choose expert',
    list,
    className,
    onChange,
}) => {
    const { values, errors, touched, setFieldValue } = useFormikContext();

    const handleClick = (selectedExpert) => {
        const expert = values[name];
        if (expert && selectedExpert && expert.id === selectedExpert.id) {
            setFieldValue(name, null);
            onChange(null);
        } else {
            setFieldValue(name, selectedExpert);
            onChange(selectedExpert);
        }
    };

    return (
        <div className={className} id={id}>
            <FormHeaderGroup
                label={label}
                error={errors[name]}
                visible={touched[name]}
            />
            <ExpertList
                list={list}
                selected={values[name]}
                onClick={handleClick}
            />
        </div>
    );
};

export default SelectExpert;
