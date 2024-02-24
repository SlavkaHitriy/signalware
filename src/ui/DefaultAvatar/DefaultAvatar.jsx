import { Avatar } from '@mui/material';
import React from 'react';

export const DefaultAvatar = ({ children, size = 45, sx }) => {
    return (
        <Avatar
            sx={{
                width: size,
                height: size,
                backgroundColor: 'blue.light',
                fontSize: 13,
                fontWeight: 700,
                color: 'primary.main',
                flexShrink: 0,
                ...sx,
            }}
        >
            {children}
        </Avatar>
    );
};
