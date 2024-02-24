import { ColorStatus } from '@/ui/ColorStatus';
import { Stack, Typography } from '@mui/material';

export const columns = [
    {
        field: 'tallyId',
        headerName: 'Tally ID',
        width: 100,
    },
    {
        field: 'tallyTitle',
        headerName: 'Tally Title',
        flex: 1,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: ({ value: { text, code } }) => (
            <Stack direction={'row'} spacing={2} width={'100%'} alignItems={'center'}>
                <ColorStatus code={code} />
                <Typography fontSize={13}>{text}</Typography>
            </Stack>
        ),
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 100,
    },
    {
        field: 'footage',
        headerName: 'Footage',
        width: 100,
    },
    {
        field: 'joints',
        headerName: 'Joints',
        width: 100,
    },
    {
        field: 'order',
        headerName: 'Order',
        width: 100,
    },
    {
        field: 'endUser',
        headerName: 'End User',
        width: 150,
    },
    {
        field: 'pipeName',
        headerName: 'Pipe Name',
        width: 240,
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 150,
    },
];

export const rows = [
    {
        id: 1,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323',
        status: {
            code: 1,
            text: 'Completed',
        },
        type: 'Outbound',
        footage: '10,235',
        joints: '5,222',
        order: '120047',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Houston Yard',
    },
    {
        id: 2,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323',
        status: {
            code: 1,
            text: 'Completed',
        },
        type: 'Outbound',
        footage: '15,214',
        joints: '7,698',
        order: 'PO-565056',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Conroe Yard 1',
    },
    {
        id: 3,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323',
        status: {
            code: 2,
            text: 'In Progress',
        },
        type: 'Outbound',
        footage: '5,058',
        joints: '2,457',
        order: '1201487',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Midland Yard 23',
    },
    {
        id: 4,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323',
        status: {
            code: 1,
            text: 'Completed',
        },
        type: 'Inbound',
        footage: '25,014',
        joints: '10,789',
        order: '1305577',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Houston Base 1',
    },
    {
        id: 5,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323 P-110',
        status: {
            code: 1,
            text: 'Completed',
        },
        type: 'Transfer',
        footage: '15,257',
        joints: '8,564',
        order: '5048879',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Odessa, TX Yard 1',
    },
    {
        id: 6,
        tallyId: '1200554',
        tallyTitle: 'Outbound_Rig101_112323',
        status: {
            code: 1,
            text: 'Completed',
        },
        type: 'Inbound',
        footage: '14,789',
        joints: '7,987',
        order: '9898980',
        endUser: 'ACME Energy',
        pipeName: '2.875” x 0.276”w 7.90 Lb/ft,',
        location: 'Well Site',
    },
];
