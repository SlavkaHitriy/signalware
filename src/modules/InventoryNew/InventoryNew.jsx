import { InspectionsIcon } from '@/assets/icons/InspectionsIcon';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { Metrics } from '@/components/Metrics';
import { SearchInput } from '@/components/SearchInput';
import { Details } from './Details.jsx';
import { tabs } from '@/modules/InventoryDetails/data/tabs';
import { ColorStatus } from '@/ui/ColorStatus';
import { Filters } from '@/ui/Filters';
import { Tabs } from '@/ui/Tabs';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { metrics1, metrics2 } from './data/metrics';
import { Popup } from '@/components/Popup/index.js';
import { DefaultButton } from '@/ui/DefaultButton/index.js';
import { useNavigate } from 'react-router-dom';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';

export const InventoryNew = () => {
    const navigate = useNavigate();
    const [activeTab] = useState(tabs[0].value);

    const handleChangeTab = () => {};

    const onClose = () => {
        navigate('/inventory/1');
    };

    return (
        <Stack py={5} px={2.5} width={'100%'}>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={3}>
                <Stack direction={'row'} spacing={8}>
                    <Stack spacing={2}>
                        <Typography fontSize={20}>Purchase Order</Typography>
                        <Typography fontSize={25} fontWeight={700}>
                            -- --
                        </Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Stack direction={'row'} spacing={3} alignItems={'center'}>
                            <Typography fontSize={20}>Status</Typography>
                            <ColorStatus code={1} />
                        </Stack>
                        <Typography fontSize={25}>-- --</Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} spacing={2}>
                    <SearchInput />
                    <Filters />
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
                    <Stack px={3} pt={3} pb={2} spacing={2} height={'100%'}>
                        <Typography fontSize={20}>Inventory Details</Typography>
                        <Box flexGrow={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Pipe Category'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Pipe Type'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Condition'} />
                                </Grid>
                                <Grid item xs={8}>
                                    <DefaultSelect helperText={'Pipe Profile Name'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Site Location'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Purchase Order'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Status'} />
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
