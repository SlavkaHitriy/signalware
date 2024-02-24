import { InspectionsIcon } from '@/assets/icons/InspectionsIcon';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { Metrics } from '@/components/Metrics';
import { Popup } from '@/components/Popup/index.js';
import { tabs } from './data/tabs';
import { ColorStatus } from '@/ui/ColorStatus';
import { DefaultButton } from '@/ui/DefaultButton/index.js';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { Tabs } from '@/ui/Tabs';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { metrics1, metrics2 } from './data/metrics';
import { Details } from './Details.jsx';

export const PipeTallyNew = () => {
    const navigate = useNavigate();
    const [activeTab] = useState(tabs[0].value);

    const handleChangeTab = () => {};

    const onClose = () => {
        navigate('/pipe-tally');
    };

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack direction={'row'} spacing={8} alignItems={'flex-end'} mb={3}>
                <Stack spacing={2}>
                    <Typography fontSize={20}>Tally ID</Typography>
                    <Typography fontSize={25} fontWeight={700}>
                        1200554
                    </Typography>
                </Stack>
                <Box
                    width={'1px'}
                    height={40}
                    bgcolor={'grey.light'}
                    sx={{
                        transform: 'translateY(-8px)',
                    }}
                />
                <Stack spacing={2}>
                    <Stack direction={'row'} spacing={3} alignItems={'center'}>
                        <Typography fontSize={20}>Status</Typography>
                        <ColorStatus code={1} />
                    </Stack>
                    <Typography fontSize={25}>Ready</Typography>
                </Stack>
                <Box
                    width={'1px'}
                    height={40}
                    bgcolor={'grey.light'}
                    sx={{
                        transform: 'translateY(-8px)',
                    }}
                />
                <Stack spacing={2}>
                    <Typography fontSize={20}>Title</Typography>
                    <Typography fontSize={25}>Outbound_Rig101_112323</Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'} mb={3}>
                <Metrics icon={<InventoryIcon />} data={metrics1} />
                <Metrics icon={<InspectionsIcon />} data={metrics2} />
            </Stack>
            <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
            <Stack
                flex={1}
                border={'1px solid'}
                borderColor={'grey.light'}
                borderRadius={'5px'}
                overflow={'hidden'}
                bgcolor={'common.white'}
                position={'relative'}
            >
                <Details disabled={true} />
                <Popup isOpened={true} width={700} bgcolor={'common.white'}>
                    <Stack px={3} pt={3} pb={2} spacing={4} height={'100%'}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack spacing={1}>
                                <Typography fontSize={20}>Tally Details</Typography>
                                <Typography fontSize={25} fontWeight={700}>
                                    1200554
                                </Typography>
                            </Stack>
                            <Typography fontSize={13}>Monday, November 11, 2023 1:23PM</Typography>
                        </Stack>
                        <Box flexGrow={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={8}>
                                    <DefaultSelect helperText={'Title'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Type'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Purchase Order'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'End User'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Site Location'} />
                                </Grid>
                                <Grid item xs={8}>
                                    <DefaultSelect helperText={'Pipe Name'} />
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
            </Stack>
        </Stack>
    );
};
