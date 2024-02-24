import { IconButton } from '@mui/material';
import React from 'react';

export const DefaultIconButton = ({ icon, size = 40, ...otherProps }) => {
    return (
        <IconButton
            sx={{
                width: `${size}px`,
                height: `${size}px`,
                color: 'common.white',
                backgroundColor: 'secondary.main',
                '&:hover': {
                    backgroundColor: 'secondary.dark',
                },
            }}
            {...otherProps}
        >
            {icon}
        </IconButton>
    );
};
