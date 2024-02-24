import { CircleButton } from '@/ui/CircleButton';
import { ColorStatus } from '@/ui/ColorStatus';
import { Check, Close } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export const columnsTransfers = [
    {
        field: 'tallyId',
        headerName: 'Tally ID',
        width: 120,
        renderCell: ({ value }) => <Typography fontWeight={700}>{value}</Typography>,
    },
    {
        field: 'originalSite',
        headerName: 'Original Site',
        width: 160,
    },
    {
        field: 'newSite',
        headerName: 'New Site',
        width: 160,
    },
    {
        field: 'newEndUser',
        headerName: 'New End User',
        width: 160,
    },
    {
        field: 'modifiedBy',
        headerName: 'Modified By',
        width: 160,
    },
    {
        field: 'transferDate',
        headerName: 'Transfer Date',
        width: 160,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 160,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: ({ value: { text, isDeclined } }) => (
            <Typography
                sx={{
                    color: isDeclined && 'red.light',
                }}
            >
                {text}
            </Typography>
        ),
    },
    {
        field: 'buttons',
        headerName: '',
        flex: 1,
        sortable: false,
        disableColumnMenu: true,
        renderCell: ({ value }) =>
            value && (
                <Stack direction={'row'} spacing={2}>
                    <CircleButton
                        sx={{
                            svg: {
                                width: 16,
                            },
                        }}
                        onClick={(e) => e.stopPropagation()}
                        icon={<Close />}
                        size={24}
                    />
                    <CircleButton
                        sx={{
                            bgcolor: 'green.main',
                            '&:hover': {
                                bgcolor: 'green.dark',
                            },
                            svg: {
                                width: 16,
                            },
                        }}
                        onClick={(e) => e.stopPropagation()}
                        icon={<Check />}
                        size={24}
                    />
                </Stack>
            ),
    },
];

export const rowsTransfers = [
    {
        id: 1,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site Transfer',
        status: {
            text: 'Completed',
            isDeclined: false,
        },
        buttons: false,
    },
    {
        id: 2,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site/End User',
        status: {
            text: 'Pending',
            isDeclined: false,
        },
        buttons: true,
    },
    {
        id: 3,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site Transfer',
        status: {
            text: 'Declined',
            isDeclined: true,
        },
        buttons: false,
    },
    {
        id: 4,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site Transfer',
        status: {
            text: 'Pending',
            isDeclined: false,
        },
        buttons: true,
    },
    {
        id: 5,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site Transfer',
        status: {
            text: 'Pending',
            isDeclined: false,
        },
        buttons: true,
    },
    {
        id: 6,
        tallyId: '1200554',
        originalSite: 'Houston Yard',
        newSite: 'Odessa Yard 121',
        newEndUser: 'No Change',
        modifiedBy: 'Bob Parker',
        transferDate: '11-23-2023 1:23PM',
        actions: 'Site Transfer',
        status: {
            text: 'Completed',
            isDeclined: false,
        },
        buttons: false,
    },
];
