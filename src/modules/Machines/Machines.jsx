import ClusterIcon from '/public/icons/cluster.svg?react';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2, metrics3 } from './data/metrics';
import { SearchInput } from '@/components/SearchInput';
import { columns, rows } from './data/machines.jsx';
import { CircleButton } from '@/ui/CircleButton';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon.jsx';
import React from 'react';
import { LinesIcon } from '@/assets/icons/LinesIcon.jsx';

export const Machines = () => {
    const navigate = useNavigate();

    return (
        <Stack p={2.5} width={'100%'}>
            <Stack direction={'row'} spacing={2}>
                <SearchInput />
                <Filters />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'}>
                    <Metrics icon={<PipeProfilesIcon />} data={metrics1} />
                    <Metrics icon={<LinesIcon />} data={metrics2} />
                    <Metrics icon={<ClusterIcon />} data={metrics3} />
                </Stack>
                <CircleButton onClick={() => navigate('/machines/new')} />
            </Stack>
            <Box mt={2} flex={1} border={'1px solid'} borderColor={'grey.light'} borderRadius={'5px'} overflow={'hidden'}>
                <DefaultDataGrid columns={columns} rows={rows} onRowClick={({ id }) => navigate(`/machines/${id}`)} />
            </Box>
        </Stack>
    );
};
