import { Stack, Typography } from '@mui/material';
import { ColorStatus } from '@/ui/ColorStatus/index.js';

export const columnsUsers = [
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 200,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 200,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: ({ value: { value, code } }) => (
            <Stack direction={'row'} spacing={3} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                <Typography>{value}</Typography>
                <ColorStatus code={code} />
            </Stack>
        ),
    },
    {
        field: 'mobile',
        headerName: 'Mobile',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'role',
        headerName: '',
        flex: 1,
    },
];

export const rowsUsers = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Johnson',
        status: {
            value: 'Active',
            code: 1,
        },
        mobile: '000-000-0000',
        email: 'John@parkercontrols.com',
        role: 'Admin',
    },
    {
        id: 2,
        firstName: 'Jesse',
        lastName: 'Jones',
        status: {
            value: 'Disabled',
            code: 2,
        },
        mobile: '000-000-0000',
        email: 'John@parkercontrols.com',
        role: '',
    },
];
