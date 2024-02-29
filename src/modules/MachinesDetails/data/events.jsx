import { Box, Stack, Typography } from '@mui/material';
import { ArrowForwardIos, Close } from '@mui/icons-material';
import { CircleButton } from '@/ui/CircleButton/index.js';
import React from 'react';

export const columnsEvents = [
    {
        field: 'eventId',
        headerName: 'Event ID',
        width: 100,
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        width: 250,
    },
    {
        field: 'typeChannel',
        headerName: 'Type/Channel',
        width: 160,
    },
    {
        field: 'message',
        headerName: 'Message',
        width: 160,
    },
    {
        field: 'rowData',
        headerName: 'Row Data',
        width: 160,
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
];

export const rowsEvents = [
    {
        id: 1,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
    {
        id: 2,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
    {
        id: 3,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
    {
        id: 4,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
    {
        id: 5,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
    {
        id: 6,
        eventId: '1784',
        timestamp: '11/21/23 03:19 PM - 03:30 PM',
        typeChannel: 'A/C Current/Channel 1',
        message: 'Above Threshold',
        rowData: '37.00',
        duration: {
            text: '09:53',
            percent: 50,
        },
    },
];
