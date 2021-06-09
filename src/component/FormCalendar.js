import { useFormikContext } from 'formik';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FormHeaderGroup from './FormHeaderGroup';

const FormCalendar = ({ name, label = 'Date', className }) => {
    const { values, errors, touched, setFieldValue } = useFormikContext();

    return (
        <div className={className}>
            <FormHeaderGroup
                label={label}
                error={errors[name]}
                visible={touched[name]}
            />
            <Calendar
                value={values[name]}
                onChange={(date) => setFieldValue(name, date)}
                className='w-full p-8 shadow-md border-none rounded-lg'
            />
        </div>
    );
};

export default FormCalendar;
