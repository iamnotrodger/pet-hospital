import React from 'react';
import { formatCreditCard, formatPhoneNumber } from '../util/format';
import { mockExperts, mockServices } from '../util/mock';
import { AppointmentSchema } from '../util/schema';
import Form from './Form';
import FormCalendar from './FormCalendar';
import FormFormatInput from './FormFormatInput';
import FormGroup from './FormGroup';
import FormHeader from './FormHeader';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import SelectExpert from './SelectExpert';
import SelectServices from './SelectServices';

const AppointmentForm = () => {
    const handleSubmit = (data, { resetForm }) => {
        resetForm();
        console.log(data);
    };

    return (
        <Form
            initialValues={{
                date: null,
                services: [],
                expert: null,
                name: '',
                email: '',
                phone: '',
                card: '',
            }}
            validationSchema={AppointmentSchema}
            onSubmit={handleSubmit}
            className='grid grid-cols-2 gap-x-8 gap-y-10 justify-center'>
            <div className='col-span-full text-center'>
                <h2
                    id='schedule'
                    className='font-sans font-bold text-blue-500 text-4xl md:text-6xl'>
                    Schedule your appointment today
                </h2>
            </div>
            <SelectServices
                name='services'
                id='services'
                list={mockServices}
                className='col-span-full'
            />
            <SelectExpert
                name='expert'
                id='expert'
                label='Available veterinaries'
                list={mockExperts}
                className='col-span-full'
            />
            <FormCalendar
                name='date'
                id='date'
                label='Book a date'
                className='col-span-full md:col-span-1 h-full'
            />
            <div className='col-span-full md:col-span-1'>
                <FormGroup className='max-w-2xl m-auto' id='contact'>
                    <FormHeader>Contact Information</FormHeader>
                    <FormInput name='name' label='Name' placeholder='name' />
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        placeholder='email'
                    />
                    <FormFormatInput
                        name='phone'
                        label='Phone Number'
                        type='tel'
                        placeholder='phone number'
                        format={formatPhoneNumber}
                    />
                    <FormFormatInput
                        name='card'
                        label='Credit Card'
                        type='tel'
                        placeholder='credit card'
                        format={formatCreditCard}
                    />
                </FormGroup>
            </div>
            <FormSubmit className='col-span-full w-full max-w-xs m-auto' />
        </Form>
    );
};

export default AppointmentForm;
