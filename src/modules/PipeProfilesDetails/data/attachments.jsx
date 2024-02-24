import { ArrowForwardIos } from '@mui/icons-material';
import { Stack } from '@mui/material';

export const columns = [
    {
        field: 'fileName',
        headerName: 'File Name',
        width: 350,
    },
    {
        field: 'uploadedBy',
        headerName: 'Uploaded By',
        width: 150,
    },
    {
        field: 'description',
        headerName: 'Description',
        flex: 1,
    },
    {
        field: 'lastUpdated',
        headerName: 'Last Updated',
        width: 200,
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
        fileName: 'Inspection Report.xls',
        uploadedBy: 'John Smith',
        description: 'Sales Order 122002, AUX Energy Partners',
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 2,
        fileName: 'Inspection Report.xls',
        uploadedBy: 'James Parker',
        description: 'Sales Order 122002, AUX Energy Partners',
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 3,
        fileName: 'Pipe Data Package.pdf',
        uploadedBy: 'William Scott',
        description: 'Sales Order 122002, AUX Energy Partners',
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 4,
        fileName: 'Inspection Report.xls',
        uploadedBy: 'Jerry Haynes',
        description: 'Sales Order 122002, AUX Energy Partners',
        lastUpdated: '11-23-2023 1:23PM',
    },
    {
        id: 5,
        fileName: 'Images.jpg',
        uploadedBy: 'Mike Moore',
        description: 'Sales Order 122002, AUX Energy Partners',
        lastUpdated: '11-23-2023 1:23PM',
    },
];
