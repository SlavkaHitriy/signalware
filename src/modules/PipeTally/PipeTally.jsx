import ClusterIcon from '/public/icons/cluster.svg?react';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { PipeTallyIcon } from '@/assets/icons/PipeTallyIcon';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2, metrics3 } from '@/modules/Inventory/data/metrics';
import { PageTitle } from '@/components/PageTitle';
import { SearchInput } from '@/components/SearchInput';
import { columnsTransfers, rowsTransfers } from '@/modules/PipeTally/data/transfers';
import { columns, rows } from './data/tallies';
import { tabs } from './data/tabs';
import { CircleButton } from '@/ui/CircleButton';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Tabs } from '@/ui/Tabs';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PipeTally = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const isFirstTab = activeTab === tabs[0].value;
    const isSecondTab = activeTab === tabs[1].value;

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={3}>
                <PageTitle icon={<PipeTallyIcon />}>Pipe Tally</PageTitle>
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
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2} width={'100%'}>
                <Box
                    sx={{
                        mb: '-40px',
                    }}
                >
                    <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
                </Box>
                <Stack direction={'row'} flex={1} alignItems={'center'} justifyContent={'flex-end'} gap={2}>
                    <Stack direction={'row'} spacing={2}>
                        <SearchInput />
                        <Filters />
                    </Stack>
                    <CircleButton
                        sx={{
                            flexShrink: 0,
                        }}
                        onClick={() => navigate('/pipe-tally/new')}
                    />
                </Stack>
            </Stack>
            <Box mt={2} flex={1} border={'1px solid'} borderColor={'grey.light'} borderRadius={'5px'} overflow={'hidden'}>
                {isFirstTab && (
                    <DefaultDataGrid
                        columns={columns}
                        rows={rows}
                        pageItems={6}
                        pageSizeOptions={[6, 10, 25]}
                        onRowClick={({ id }) => navigate(`/pipe-tally/${id}`)}
                    />
                )}
                {isSecondTab && (
                    <DefaultDataGrid
                        defaultSize={15}
                        columns={columnsTransfers}
                        rows={rowsTransfers}
                        pageItems={6}
                        pageSizeOptions={[6, 10, 25]}
                        onRowClick={({ id }) => navigate(`/pipe-tally/${id}`)}
                    />
                )}
            </Box>
        </Stack>
    );
};
