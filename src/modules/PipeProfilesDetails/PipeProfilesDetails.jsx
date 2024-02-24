import ClusterIcon from '/public/icons/cluster.svg?react';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon';
import { Metrics } from '@/components/Metrics';
import { PageTitle } from '@/components/PageTitle';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Tabs } from '@/ui/Tabs';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Attachments } from './Attachments';
import { columns, rows } from './data/attributes';
import { metrics1, metrics2 } from './data/metrics';
import { tabs } from './data/tabs';

export const PipeProfilesDetails = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const isFirstTab = activeTab === tabs[0].value;
    const isSecondTab = activeTab === tabs[1].value;

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack mb={3}>
                <PageTitle icon={<PipeProfilesIcon />}>Pipe Profiles</PageTitle>
            </Stack>
            <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'} mb={3}>
                <Metrics icon={<InventoryIcon />} data={metrics1} />
                <Metrics icon={<ClusterIcon />} data={metrics2} />
            </Stack>
            <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
            <Stack
                flex={1}
                border={'1px solid'}
                borderColor={'grey.light'}
                borderRadius={'5px'}
                overflow={'hidden'}
                position={'relative'}
                bgcolor={'common.white'}
            >
                {isFirstTab && (
                    <Stack spacing={2} flex={1}>
                        <Stack direction={'row'} justifyContent={'space-between'} spacing={3} pt={2} px={2}>
                            <Stack spacing={1}>
                                <Typography color={'#A8A8A7'}>Pipe Profile Name</Typography>
                                <Typography fontWeight={700}>2.875” P-110 SMLS R2 Tubing.</Typography>
                            </Stack>
                            <Box>
                                <Filters />
                            </Box>
                        </Stack>
                        <Box px={2}>
                            <Grid container columnSpacing={4} rowSpacing={2}>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Category</Typography>
                                        <Typography fontWeight={700}>OCTG</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Type</Typography>
                                        <Typography fontWeight={700}>Tubing</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Pipe O.D.</Typography>
                                        <Typography fontWeight={700}>2.875”</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Connection</Typography>
                                        <Typography fontWeight={700}>CONN-PRO</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Description</Typography>
                                        <Typography fontWeight={700}>2.875” P-110 SMLS R2 Tubing.</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Weight (lb/ft)</Typography>
                                        <Typography fontWeight={700}>6.50</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Wall Thickness</Typography>
                                        <Typography fontWeight={700}>0.217</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Grade</Typography>
                                        <Typography fontWeight={700}>P110</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <DefaultDataGrid columns={columns} rows={rows} />
                    </Stack>
                )}
                {isSecondTab && <Attachments />}
            </Stack>
        </Stack>
    );
};
