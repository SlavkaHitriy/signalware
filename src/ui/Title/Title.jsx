import React from 'react';

import { Typography } from '@mui/material';

export const Title = ({ sx, children, ...props }) => {
    return (
        <Typography sx={{ fontWeight: 'bold', fontSize: 25, ...sx }} {...props}>
            {children}
        </Typography>
    );
};
