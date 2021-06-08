import React from 'react';
import Icon from './Icon';

const Footer = () => {
    return (
        <footer className='flex justify-center items-center gap-4 p-8 mt-8 bg-blue-400'>
            <h2 className='font-serif text-xl text-white'>
                Made by Rodger Retanal
            </h2>
            <a
                href='https://github.com/iamnotrodger/pet-hospital'
                target='_blink'
                rel='noopener noreferrer'>
                <Icon
                    name='github'
                    className='w-8 h-8 text-white hover:text-black transition-color'
                    fill='currentColor'
                />
            </a>
        </footer>
    );
};

export default Footer;
