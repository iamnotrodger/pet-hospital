import React from 'react';
import { UserIcon } from '@heroicons/react/solid';

const NavItem = ({ href, Icon = UserIcon, className = '', ...props }) => {
    return (
        <a href={href}>
            <Icon
                className={`h-6 w-auto text-white hover:text-gray-200 ${className}`}
                fill='currentColor'
                {...props}
            />
        </a>
    );
};

export default NavItem;
