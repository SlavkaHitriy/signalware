import { ArrowForwardIos } from '@mui/icons-material';
import { Stack } from '@mui/material';

export const columns = [
    {
        field: 'pipeProfile',
        headerName: 'Pipe Profile Name',
        flex: 1,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 120,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 120,
    },
    {
        field: 'od',
        headerName: 'O.D.',
        width: 120,
    },
    {
        field: 'weight',
        headerName: 'Weight (lb/ft)',
        width: 120,
    },
    {
        field: 'wallThickness',
        headerName: 'Wall Thick.',
        width: 120,
    },
    {
        field: 'grade',
        headerName: 'Grade',
        width: 120,
    },
    {
        field: 'connection',
        headerName: 'Connection',
        width: 120,
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
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Drill Pipe',
        type: 'Premium',
        od: '4.50',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'FLEX',
    },
    {
        id: 2,
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Drill Pipe',
        type: 'API',
        od: '4.50',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'NC46',
    },
    {
        id: 3,
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Casing',
        type: 'Premium',
        od: '16.50',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'Tenaris',
    },
    {
        id: 4,
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Casing',
        type: 'Premium',
        od: '16.50',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'Tenaris',
    },
    {
        id: 5,
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Tubing',
        type: 'Premium',
        od: '5.00',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'TTUS',
    },
    {
        id: 6,
        pipeProfile: '2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.',
        category: 'Tubing',
        type: 'API',
        od: '5.00',
        weight: '0.342',
        wallThickness: '0.342',
        grade: 'S-135',
        connection: 'Buttress',
    },
];
