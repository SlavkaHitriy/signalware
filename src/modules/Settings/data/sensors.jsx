import { Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';

export const columns = [
    {
        field: 'sensorId',
        headerName: 'Sensor ID',
        flex: 1,
    },
    {
        field: 'sensorModel',
        headerName: 'Sensor Model',
        width: 200,
    },
    {
        field: 'manufacturer',
        headerName: 'Manufacturer',
        width: 200,
    },
    {
        field: 'assignedMachine',
        headerName: 'Assigned Machine',
        width: 200,
    },
    {
        field: 'deviceState',
        headerName: 'Device State',
        width: 150,
        renderCell: ({ value: { value, code } }) => (
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                <Typography>{value}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'lastTransmission',
        headerName: 'Last Transmission',
        width: 250,
    },
];

export const rows = [
    {
        id: 1,
        sensorId: '736498',
        sensorModel: 'Asset 10554',
        manufacturer: 'Active',
        assignedMachine: 'Tracker/Oyster3-4G',
        deviceState: {
            value: 'Online',
            code: 1,
        },
        lastTransmission: '12-07-2023 12:09pm',
    },
    {
        id: 2,
        sensorId: '736498',
        sensorModel: 'Asset 10554',
        manufacturer: 'Deactivated',
        assignedMachine: 'Tracker/Oyster3-4G',
        deviceState: {
            value: 'Online',
            code: 1,
        },
        lastTransmission: '12-07-2023 12:09pm',
    },
];
