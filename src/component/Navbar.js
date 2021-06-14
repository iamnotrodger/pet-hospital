import React from 'react';
import NavItem from './NavItem';
import { CalendarIcon, UserGroupIcon } from '@heroicons/react/solid';
import { ReactComponent as GeneralMedicineIcon } from '../icon/general-medicine.svg';

const Navbar = ({ className = '' }) => {
    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between py-4 px-8 bg-blue-400 shadow-md ${className}`}>
            <div className='flex items-center'>
                <img
                    src={`${process.env.PUBLIC_URL}/logo512.png`}
                    alt='logo'
                    className='w-auto h-8'
                />
                <h1 className='ml-2 font-sans font-bold text-xl text-white'>
                    Pet Hospital
                </h1>
            </div>
            <div className='grid grid-cols-4 items-center gap-3 md:gap-5'>
                <NavItem href='#date' Icon={CalendarIcon} label='Date' />
                <NavItem
                    href='#services'
                    Icon={GeneralMedicineIcon}
                    viewBox='0 0 24 24'
                />
                <NavItem href='#expert' Icon={UserGroupIcon} label='Services' />
                <NavItem href='#contact' />
            </div>
        </nav>
    );
};

export default Navbar;
