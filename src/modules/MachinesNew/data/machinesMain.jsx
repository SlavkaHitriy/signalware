import { Box, Stack, Typography } from '@mui/material';
import { ArrowForwardIos, Close } from '@mui/icons-material';
import { CircleButton } from '@/ui/CircleButton/index.js';
import React from 'react';

export const columns = [
    {
        field: 'shift',
        headerName: 'Shift',
        flex: 1,
        renderCell: ({ value: { text, isRed } }) => (
            <Box position={'relative'} pl={3}>
                {isRed && <Box width={6} height={55} left={-10} top={-18} bgcolor={'red.light'} position={'absolute'} />}
                <Typography fontSize={13}>{text}</Typography>
            </Box>
        ),
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 160,
    },
    {
        field: 'uptime',
        headerName: 'Uptime',
        width: 160,
    },
    {
        field: 'downtime',
        headerName: 'Downtime',
        width: 160,
    },
    {
        field: 'efficiency',
        headerName: 'Efficiency',
        width: 160,
    },
    {
        field: 'uptimePercentage',
        headerName: 'Uptime Percentage',
        flex: 1,
        renderCell: ({ value }) => (
            <Stack direction={'row'} spacing={2} width={'100%'} alignItems={'center'}>
                <Typography fontSize={13}>{value}%</Typography>
                <Box
                    position={'relative'}
                    width={100}
                    height={10}
                    bgcolor={'#EAEBEA'}
                    boxShadow={'inset 0 3px 6px rgba(0, 0, 0, .16)'}
                >
                    <Box position={'absolute'} height={'100%'} left={0} top={0} bgcolor={'green.main'} width={`${value}%`} />
                </Box>
            </Stack>
        ),
    },
    {
        field: 'callback',
        headerName: '',
        width: 100,
        renderCell: ({ value: { onClick, isArrow } }) =>
            isArrow ? (
                <Stack alignItems={'flex-end'} width={'100%'} pr={5}>
                    <ArrowForwardIos
                        sx={{
                            width: 18,
                            height: 18,
                        }}
                    />
                </Stack>
            ) : (
                <CircleButton icon={<Close />} onClick={onClick} />
            ),
        sortable: false,
        disableColumnMenu: true,
    },
];
