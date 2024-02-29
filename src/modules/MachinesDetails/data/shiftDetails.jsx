import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { CircleButton } from '@/ui/CircleButton/index.js';
import React from 'react';

export const shiftDetailsColumns = [
    {
        field: 'code',
        headerName: 'Code',
        width: 160,
        renderCell: ({ value }) => (
            <Select
                sx={{
                    '& .MuiSelect-select': {
                        padding: '10px 15px',
                        fontSize: '13px',
                        border: 0,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                }}
                value={value}
            >
                <MenuItem value={value}>{value}</MenuItem>
                <MenuItem value={`${value} 1`}>{`${value} 1`}</MenuItem>
                <MenuItem value={`${value} 2`}>{`${value} 2`}</MenuItem>
            </Select>
        ),
    },
    {
        field: 'subCode',
        headerName: 'Sub-Code',
        width: 160,
        renderCell: ({ value }) => (
            <Select
                sx={{
                    '& .MuiSelect-select': {
                        padding: '10px 15px',
                        fontSize: '13px',
                        border: 0,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                }}
                value={value}
            >
                <MenuItem value={value}>{value}</MenuItem>
                <MenuItem value={`${value} 1`}>{`${value} 1`}</MenuItem>
                <MenuItem value={`${value} 2`}>{`${value} 2`}</MenuItem>
            </Select>
        ),
    },
    {
        field: 'duration',
        headerName: 'Duration',
        flex: 1,
        renderCell: ({ value: { text, percent } }) => (
            <Stack direction={'row'} spacing={2} width={'100%'} alignItems={'center'}>
                <Typography fontSize={13}>{text}</Typography>
                <Box
                    position={'relative'}
                    width={100}
                    height={10}
                    bgcolor={'#EAEBEA'}
                    boxShadow={'inset 0 3px 6px rgba(0, 0, 0, .16)'}
                >
                    <Box position={'absolute'} height={'100%'} left={0} top={0} bgcolor={'green.main'} width={`${percent}%`} />
                </Box>
            </Stack>
        ),
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 250,
    },
    {
        field: 'notes',
        headerName: 'Notes',
        flex: 1,
    },
];

export const shiftDetailsRows = [
    {
        id: 1,
        code: 'Down',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
    {
        id: 2,
        code: 'Down',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
    {
        id: 3,
        code: 'OPS',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
    {
        id: 4,
        code: 'OPS',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
    {
        id: 5,
        code: 'OPS',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
    {
        id: 6,
        code: 'OPS',
        subCode: 'Maintenance',
        duration: { text: '09:53', percent: 60 },
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        notes: 'Notes go here…',
    },
];
