import { DefaultToggle } from '@/ui/DefaultToggle/DefaultToggle';
import { Stack, Typography } from '@mui/material';

export const columns = [
    {
        field: 'attributes1',
        headerName: 'Attributes',
        width: 300,
        renderCell: ({ value }) => (
            <Stack direction={'row'} alignItems={'center'} ml={'-20px'}>
                <DefaultToggle />
                <Typography>{value}</Typography>
            </Stack>
        ),
    },
    {
        field: 'attributes2',
        headerName: 'Attributes',
        width: 300,
        renderCell: ({ value }) => (
            <Stack direction={'row'} alignItems={'center'} ml={'-20px'}>
                <DefaultToggle />
                <Typography>{value}</Typography>
            </Stack>
        ),
    },
    {
        field: 'attributes3',
        headerName: 'Attributes',
        flex: 1,
        renderCell: ({ value }) => (
            <Stack direction={'row'} alignItems={'center'} ml={'-20px'}>
                <DefaultToggle />
                <Typography>{value}</Typography>
            </Stack>
        ),
    },
];

export const rows = [
    {
        id: 1,
        attributes1: 'Length',
        attributes2: 'Hardband',
        attributes3: 'Surface',
    },
    {
        id: 2,
        attributes1: 'Connection OD',
        attributes2: 'Internal Plastic Coating',
        attributes3: 'End Type',
    },
    {
        id: 3,
        attributes1: 'Connection ID',
        attributes2: 'Range',
        attributes3: 'Coating',
    },
    {
        id: 4,
        attributes1: 'Pin Tong',
        attributes2: 'Heat',
        attributes3: 'Serial Number',
    },
    {
        id: 5,
        attributes1: 'Box Tong',
        attributes2: 'Gauge',
        attributes3: 'TAG_ID',
    },
];
