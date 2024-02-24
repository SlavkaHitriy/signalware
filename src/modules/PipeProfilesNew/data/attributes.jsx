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
        attributes1: '-- --',
        attributes2: '-- --',
        attributes3: '-- --',
    },
    {
        id: 2,
        attributes1: '-- --',
        attributes2: '-- --',
        attributes3: '-- --',
    },
    {
        id: 3,
        attributes1: '-- --',
        attributes2: '-- --',
        attributes3: '-- --',
    },
    {
        id: 4,
        attributes1: '-- --',
        attributes2: '-- --',
        attributes3: '-- --',
    },
    {
        id: 5,
        attributes1: '-- --',
        attributes2: '-- --',
        attributes3: '-- --',
    },
];
