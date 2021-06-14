import * as yup from 'yup';

const phoneRegExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

export const AppointmentSchema = yup.object().shape({
    date: yup.date().nullable().required('Please select a date'),
    services: yup
        .array()
        .of(
            yup.object().shape({
                id: yup.number(),
            }),
        )
        .min(1, 'Please select a service')
        .required('Please select a service'),
    expert: yup
        .object()
        .shape({ id: yup.number() })
        .nullable()
        .required('Please select a veterinarian'),
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup
        .string()
        .matches(phoneRegExp, 'Invalid phone number')
        .required('Phone is required'),
    card: yup
        .string()
        .min(19, 'Invalid Credit Card')
        .required('Credit card is required'),
});
