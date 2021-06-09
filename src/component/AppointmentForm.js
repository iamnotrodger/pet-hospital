import React from 'react';
import { mockExperts, mockServices } from '../util/mock';
import { AppointmentSchema } from '../util/schema';
import Form from './Form';
import FormCalendar from './FormCalendar';
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
            <div className='col-span-full md:col-span-1'>
                <FormHeader>Why you should go to Pet Hospital!</FormHeader>
                <p className='font-serif text-lg text-gray-800'>
                    From vaccinations and wellness programs to complete surgical
                    care, Pet Hospital utilizes the latest in technology while
                    caring for your loved ones. We are fully computerized, with
                    modern veterinary software, in-house diagnostic lab, digital
                    whole-body and dental radiographs, and the ability to
                    perform complex imaging including ultrasounds and
                    echocardiograms.
                </p>
            </div>
            <FormCalendar
                name='date'
                label='Book a date'
                className='col-span-full md:col-span-1'
            />
            <SelectServices
                name='services'
                list={mockServices}
                className='col-span-full'
            />
            <SelectExpert
                name='expert'
                label='Available veterinaries'
                list={mockExperts}
                className='col-span-full'
            />
            <div className='col-span-full'>
                <FormGroup className='max-w-2xl m-auto'>
                    <FormHeader>Contact Information</FormHeader>
                    <FormInput name='name' label='Name' placeholder='name' />
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        placeholder='email'
                    />
                    <FormInput
                        name='phone'
                        label='Phone Number'
                        type='tel'
                        placeholder='phone number'
                    />
                </FormGroup>
            </div>
            <FormSubmit className='col-span-full w-full max-w-xs m-auto' />
        </Form>
    );
};

export default AppointmentForm;
