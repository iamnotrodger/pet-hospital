import React from 'react';
import useDynamicSVGImport from '../hook/useDynamicSVGImport';

const Icon = ({ name, ...props }) => {
    const { SvgIcon } = useDynamicSVGImport(name);

    if (SvgIcon) {
        return <SvgIcon {...props} />;
    }

    return null;
};

export default Icon;
