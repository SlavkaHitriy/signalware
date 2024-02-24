import ClusterIcon from '/public/icons/cluster.svg?react';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon';
import { Metrics } from '@/components/Metrics';
import { PageTitle } from '@/components/PageTitle';
import { Popup } from '@/components/Popup';
import { DefaultButton } from '@/ui/DefaultButton';
import { DefaultSelect } from '@/ui/DefaultSelect';
import { columns, rows } from './data/attributes';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Tabs } from '@/ui/Tabs';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { metrics1, metrics2 } from './data/metrics';
import { tabs } from './data/tabs';

export const PipeProfilesNew = () => {
    const navigate = useNavigate();
    const [activeTab] = useState(tabs[0].value);

    const handleChangeTab = () => {};

    const onClose = () => {
        navigate('/pipe-profiles');
    };

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
                <Popup isOpened={true} width={700} bgcolor={'common.white'}>
                    <Stack px={3} pt={3} pb={2} spacing={4} height={'100%'}>
                        <Typography fontSize={20} fontWeight={700}>
                            Pipe Profile
                        </Typography>
                        <Box flexGrow={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={8}>
                                    <DefaultSelect helperText={'Pipe Profile Name'} />
                                </Grid>
                                <Grid item xs={4} />
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Category'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Type'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Pipe O.D.'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Weight (lb/ft)'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Wall Thickness'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Grade'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Connection'} />
                                </Grid>
                                <Grid item xs={8}>
                                    <DefaultSelect helperText={'Description'} />
                                </Grid>
                            </Grid>
                        </Box>
                        <Stack direction={'row'} spacing={1}>
                            <Box flexGrow={1}>
                                <DefaultButton onClick={onClose} color={'error'}>
                                    Delete
                                </DefaultButton>
                            </Box>
                            <DefaultButton onClick={onClose}>Cancel</DefaultButton>
                            <DefaultButton color={'success'} onClick={onClose}>
                                Save
                            </DefaultButton>
                        </Stack>
                    </Stack>
                </Popup>
                <Stack
                    spacing={2}
                    flex={1}
                    sx={{
                        '*': {
                            pointerEvents: 'none',
                        },
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={3} pt={2} px={2}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>Pipe Profile Name</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
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
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Type</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Pipe O.D.</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Connection</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Description</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Weight (lb/ft)</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Wall Thickness</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Stack spacing={1}>
                                    <Typography color={'#A8A8A7'}>Grade</Typography>
                                    <Typography fontWeight={700}>-- --</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    <DefaultDataGrid columns={columns} rows={rows} />
                </Stack>
            </Stack>
        </Stack>
    );
};
