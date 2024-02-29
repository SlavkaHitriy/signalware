import { Box, Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { ArrowForwardIos } from '@mui/icons-material';

export const columns = [
    {
        field: 'machine',
        headerName: 'Machine',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} spacing={2} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                <Typography fontSize={13}>{text}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'workCenter',
        headerName: 'Work Center',
        width: 150,
    },
    {
        field: 'location',
        headerName: 'Location',
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
        field: 'utilization',
        headerName: 'Utilization',
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
        field: 'arrowIcon',
        headerName: '',
        width: 100,
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
        machine: 'Mazak 1250',
        status: {
            text: 'Running',
            code: 1,
        },
        workCenter: '1200-A',
        location: 'Houston Site',
        uptime: '08:56 (hrs)',
        downtime: '08:56 (hrs)',
        utilization: 80,
    },
    {
        id: 2,
        machine: 'Mazak 1250',
        status: {
            text: 'Running',
            code: 1,
        },
        workCenter: '1200-A',
        location: 'Houston Site',
        uptime: '08:56 (hrs)',
        downtime: '08:56 (hrs)',
        utilization: 50,
    },
    {
        id: 3,
        machine: 'Mazak 1250',
        status: {
            text: 'Running',
            code: 1,
        },
        workCenter: '1200-A',
        location: 'Houston Site',
        uptime: '08:56 (hrs)',
        downtime: '08:56 (hrs)',
        utilization: 25,
    },
    {
        id: 4,
        machine: 'Mazak 1250',
        status: {
            text: 'Offline',
            code: 2,
        },
        workCenter: '1200-A',
        location: 'Houston Site',
        uptime: '08:56 (hrs)',
        downtime: '08:56 (hrs)',
        utilization: 60,
    },
    {
        id: 5,
        machine: 'Mazak 1250',
        status: {
            text: 'Down',
            code: 3,
        },
        workCenter: '1200-A',
        location: 'Houston Site',
        uptime: '08:56 (hrs)',
        downtime: '08:56 (hrs)',
        utilization: 80,
    },
];
