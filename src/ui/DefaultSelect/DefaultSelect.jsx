import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import { ArrowIcon } from '@/assets/icons/ArrowIcon';
import { theme } from '@/core/theme/theme.js';

export const DefaultSelect = ({ sx, label, helperText, helperTextColor }) => {
    return (
        <FormControl variant='standard' sx={{ minWidth: '100%', alignItems: 'center', ...sx }}>
            {label && (
                <Typography
                    sx={{
                        transform: 'unset',
                    }}
                >
                    {label}
                </Typography>
            )}
            {!label && (
                <>
                    <Typography
                        color={helperTextColor || '#A8A8A7'}
                        sx={{
                            alignSelf: 'flex-start',
                        }}
                    >
                        {helperText}
                    </Typography>
                    <Select
                        IconComponent={ArrowIcon}
                        sx={{
                            width: '100%',
                            '&::before': {
                                borderBottom: '2px dotted',
                                borderColor: 'primary.main',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error)': {
                                '&::before, &::after': {
                                    borderBottom: '2px dotted',
                                },
                            },
                            '.MuiSelect-select': {
                                py: '10px',
                                fontSize: 15,
                                fontWeight: 700,
                            },
                            '& .MuiSelect-icon': {
                                top: 'calc(50% - 4px)',
                                right: '12px',
                                stroke: theme.palette.primary.main,
                            },
                        }}
                        defaultValue={'active'}
                    >
                        <MenuItem value={'active'}>Active</MenuItem>
                        <MenuItem value={'deactivated'}>Deactivated</MenuItem>
                        <MenuItem value={'done'}>Done</MenuItem>
                    </Select>
                </>
            )}
        </FormControl>
    );
};
