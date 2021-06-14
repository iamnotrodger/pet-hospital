import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import React from 'react';

const Hero = () => {
    return (
        <header className='relative h-screen bg-blue-400 overflow-hidden'>
            <div className='absolute top-0 bottom-0 md:left-1/3 lg:left-1/4 right-0 hidden md:block z-0'>
                <img
                    src={`${process.env.PUBLIC_URL}/img/hero.jpeg`}
                    alt='hero'
                    className='object-cover w-auto h-full'
                />
            </div>

            <div className='md:absolute md:right-1/2 xl:right-2/3 flex flex-col justify-center items-center md:items-start h-full px-8 z-10'>
                <div className='text-center md:text-left'>
                    <h1 className='font-sans font-bold text-white text-6xl md:text-8xl'>
                        Pet Hospital
                    </h1>
                    <div className='flex justify-center md:justify-start items-end mt-1'>
                        <LocationMarkerIcon className='w-6 h-6 mr-1 text-red-400' />
                        <h3 className='font-serif text-white leading-none'>
                            75 Laurier Ave. E, Ottawa, ON K1N 6N5
                        </h3>
                    </div>
                    <p className='max-w-sm mt-4 font-serif text-sm text-white text-left'>
                        Pet Hospital has been providing veterinary care in
                        Ottawa for 30 years. We are passionate about helping
                        pets and educating owners. As a mid-sized practice
                        catering to dogs and cats, we offer the utmost in
                        personalized care from experienced vets. Your furry
                        friend will feel at home in our caring, welcoming
                        environment. We provide a modern facility which is kept
                        clean and is staffed by happy professionals.
                    </p>
                </div>

                <div className='mt-32 md:mt-11 group'>
                    <a
                        href='#schedule'
                        className='w-max flex items-center  py-2 px-3 rounded-full bg-white shadow-md transform active:shadow-md active:scale-95 transition-all'>
                        <div className='font-bold text-xl text-blue-400 group-hover:text-blue-500'>
                            Schedule your appointment
                        </div>
                        <ArrowCircleRightIcon className='w-9 h-9 ml-2 text-red-400 transform group-hover:translate-x-1 group-hover:text-red-500 transition-all' />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
