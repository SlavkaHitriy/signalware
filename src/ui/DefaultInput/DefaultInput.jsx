import { TextField } from '@mui/material';
import React from 'react';

export const DefaultInput = ({ label, placeholder, ...otherProps }) => {
    return (
        <TextField
            label={label}
            variant='standard'
            InputLabelProps={{
                shrink: true,
            }}
            placeholder={placeholder}
            sx={{
                width: '100%',
                '.MuiFormLabel-root': {
                    fontSize: 15,
                    fontWeight: 700,
                    transform: 'unset',
                    color: 'primary.main',
                    position: 'static',
                    lineHeight: '1.5',
                    '&.Mui-disabled': {
                        color: 'primary.main',
                    },
                },
                '.MuiInput-input': {
                    py: '10px',
                    fontSize: 15,
                    fontWeight: 700,
                    '&::placeholder': {
                        color: 'grey.blue',
                        opacity: 1,
                    },
                },
                '.MuiInputBase-root': {
                    mt: label ? 1 : 0,
                    '&::before': {
                        borderColor: 'grey.light',
                    },
                    '&.Mui-disabled': {
                        '&::before': {
                            display: 'none',
                        },
                    },
                },
            }}
            {...otherProps}
        />
    );
};
