import ClusterIcon from '/public/icons/cluster.svg?react';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2, metrics3 } from '@/modules/Inventory/data/metrics';
import { PageTitle } from '@/components/PageTitle';
import { SearchInput } from '@/components/SearchInput';
import { columns, rows } from '@/modules/Inventory/data/inventory';
import { CircleButton } from '@/ui/CircleButton';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Inventory = () => {
    const navigate = useNavigate();

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={3}>
                <PageTitle icon={<InventoryIcon />}>Inventory</PageTitle>
                <Box
                    width={135}
                    height={25}
                    sx={{
                        objectFit: 'contain',
                    }}
                    src={'/assets/exonMobile.png'}
                    component={'img'}
                />
            </Stack>
            <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'}>
                <Metrics icon={<InventoryIcon />} data={metrics1} />
                <Metrics icon={<ClusterIcon />} data={metrics2} />
                <Metrics icon={<ClusterIcon />} data={metrics3} />
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                <Stack direction={'row'} spacing={2}>
                    <SearchInput />
                    <Filters />
                </Stack>
                <CircleButton onClick={() => navigate('/inventory/new')} />
            </Stack>
            <Box mt={2} flex={1} border={'1px solid'} borderColor={'grey.light'} borderRadius={'5px'} overflow={'hidden'}>
                <DefaultDataGrid columns={columns} rows={rows} onRowClick={({ id }) => navigate(`/inventory/${id}`)} />
            </Box>
        </Stack>
    );
};
