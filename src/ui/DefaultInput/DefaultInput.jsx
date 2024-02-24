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
                    transform: 'unset',
                    color: '#A8A8A7',
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
                    mt: 0,
                    '&::before': {
                        borderBottom: '2px dotted',
                        borderColor: 'primary.main',
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
