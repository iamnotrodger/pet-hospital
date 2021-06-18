import { useFormikContext } from 'formik';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { setUnavailableDates } from '../util/date';
import FormHeaderGroup from './FormHeaderGroup';

const FormCalendar = ({
    name,
    id,
    label = 'Date',
    unavailableDates = [],
    className,
}) => {
    const { values, errors, touched, setFieldValue } = useFormikContext();

    return (
        <div className={className} id={id}>
            <FormHeaderGroup
                label={label}
                error={errors[name]}
                visible={touched[name]}
            />
            <Calendar
                value={values[name]}
                onChange={(date) => setFieldValue(name, date)}
                tileDisabled={setUnavailableDates(unavailableDates)}
                className='w-full p-8 shadow-md border-none rounded-lg'
            />
        </div>
    );
};

export default FormCalendar;
