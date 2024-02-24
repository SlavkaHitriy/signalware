import { DefaultButton } from '@/ui/DefaultButton';
import { Stack, Typography } from '@mui/material';

export const columns = [
    {
        field: 'tallyId',
        headerName: 'Tally ID',
        width: 100,
        renderCell: ({ value }) => <Typography fontWeight={700}>{value}</Typography>,
    },
    {
        field: 'originalSite',
        headerName: 'Original Site',
        width: 150,
    },
    {
        field: 'newSite',
        headerName: 'New Site',
        width: 150,
    },
    {
        field: 'newEndUser',
        headerName: 'New End User',
        width: 150,
    },
    {
        field: 'modifiedBy',
        headerName: 'Modified By',
        width: 150,
    },
    {
        field: 'transferDate',
        headerName: 'Transfer Date',
        flex: 1,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 150,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        renderCell: ({ value: { text, isPending } }) => (
            <Stack direction={'row'} spacing={2} justifyContent={'space-between'} width={'100%'} alignItems={'center'}>
                <Typography>{text}</Typography>
                {isPending && (
                    <DefaultButton
                        sx={{
                            minWidth: 'unset',
                            bgcolor: '#E4E3E3',
                            color: 'primary.main',
                            boxShadow: 'none',
                            '&:hover': {
                                color: '#E4E3E3',
                            },
                        }}
                        variant={'contained'}
                    >
                        Undo
                    </DefaultButton>
                )}
            </Stack>
        ),
    },
];

export const rows = [
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
            isPending: false,
        },
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
            isPending: true,
        },
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
            isPending: false,
        },
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
            text: 'Completed',
            isPending: false,
        },
    },
];
