import { ColorStatus } from '@/ui/ColorStatus';
import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import QrCodeIcon from '/public/icons/qr-code.svg?react';

export const columns = [
    {
        field: 'empty',
        headerName: '',
        width: 0,
        sortable: false,
        disableColumnMenu: true,
    },
    {
        field: 'joint',
        headerName: 'Joint',
        width: 100,
        renderCell: ({ value }) => <Typography fontWeight={700}>{value}</Typography>,
    },
    {
        field: 'length',
        headerName: 'Length(ft)',
        width: 100,
        renderCell: ({ value }) => <Typography>{value}</Typography>,
    },
    {
        field: 'serialNumber',
        headerName: 'Serial Number',
        width: 150,
        renderCell: ({ value }) => <Typography>{value}</Typography>,
    },
    {
        field: 'uniqueIdentifier',
        headerName: 'Unique Identifier',
        width: 250,
        renderCell: ({ value }) => (
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
                <Typography>{value}</Typography>
                <Box
                    sx={{
                        svg: {
                            width: 24,
                            height: 24,
                        },
                    }}
                >
                    <QrCodeIcon />
                </Box>
            </Stack>
        ),
    },
    {
        field: 'health',
        headerName: 'Health',
        width: 100,
        renderCell: ({ value: { value, code } }) => (
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                <Typography>{value}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'lastUpdated',
        headerName: 'Last Updated',
        flex: 1,
        renderCell: ({ value }) => <Typography>{value}</Typography>,
    },
    {
        field: 'arrowIcon',
        headerName: '',
        flex: 1,
        renderCell: () => (
            <Stack alignItems={'flex-end'} width={'100%'} pr={5}>
                <ArrowForwardIos
                    sx={{
                        width: 18,
                        height: 18,
                    }}
                />
            </Stack>
        ),
        sortable: false,
        disableColumnMenu: true,
    },
];

export const rows = [
    {
        id: 1,
        joint: '01',
        length: '30.50',
        serialNumber: '805471',
        uniqueIdentifier: 'E0012400040000001',
        health: { value: 'Prime', code: 1 },
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 2,
        joint: '02',
        length: '30.50',
        serialNumber: '805471',
        uniqueIdentifier: 'E0012400040000001',
        health: { value: 'Prime', code: 1 },
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 3,
        joint: '03',
        length: '30.50',
        serialNumber: '805471',
        uniqueIdentifier: 'E0012400040000001',
        health: { value: 'Good', code: 2 },
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 4,
        joint: '04',
        length: '30.50',
        serialNumber: '805471',
        uniqueIdentifier: 'E0012400040000001',
        health: { value: 'Prime', code: 1 },
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 5,
        joint: '05',
        length: '30.50',
        serialNumber: '805471',
        uniqueIdentifier: 'E0012400040000001',
        health: { value: 'Prime', code: 1 },
        lastUpdated: '11-23-2023 1:23PM',
    },
];
