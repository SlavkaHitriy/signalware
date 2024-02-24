import React from 'react';

import { Button } from '@mui/material';

export const DefaultButton = ({ sx, children, variant = 'outlined', ...otherProps }) => {
    return (
        <Button
            sx={{
                minWidth: 140,
                textTransform: 'none',
                borderRadius: '5px',
                ...sx,
            }}
            variant={variant}
            {...otherProps}
        >
            {children}
        </Button>
    );
};
