import React from 'react';
import { Box } from '@mui/material';
import { getStatusColor } from '@/core/functions/statusHelpers.js';

export const ColorStatus = ({ code, size = 10 }) => {
    return (
        <Box
            sx={{
                width: size,
                height: size,
                borderRadius: '50%',
                backgroundColor: getStatusColor(code),
            }}
        />
    );
};
