import { InspectionsIcon } from '@/assets/icons/InspectionsIcon';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { Metrics } from '@/components/Metrics';
import { Transfer } from '@/modules/PipeTallyDetails/Transfer';
import { Details } from './Details';
import { tabs } from './data/tabs';
import { ColorStatus } from '@/ui/ColorStatus';
import { Tabs } from '@/ui/Tabs';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { metrics1, metrics2 } from './data/metrics';
import { Attachments } from './Attachments';
import { Notes } from './Notes';
import { Map } from '@/components/Map/Map';

export const PipeTallyDetails = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [previousTab, setPreviousTab] = useState(tabs[0].value);

    const handleChangeTab = (tab) => {
        setPreviousTab(activeTab);
        setActiveTab(tab);
    };

    const isFirstTab = activeTab === tabs[0].value || (activeTab === tabs[3].value && previousTab === tabs[0].value);
    const isSecondTab = activeTab === tabs[1].value || (activeTab === tabs[3].value && previousTab === tabs[1].value);
    const isThirdTab = activeTab === tabs[2].value || (activeTab === tabs[3].value && previousTab === tabs[2].value);
    const isForthTab = activeTab === tabs[3].value;
    const isFifthTab = activeTab === tabs[4].value || (activeTab === tabs[3].value && previousTab === tabs[4].value);

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
                {isFirstTab && <Details disabled={isForthTab} />}
                {isSecondTab && <Transfer disabled={isForthTab} />}
                {isThirdTab && <Attachments disabled={isForthTab} />}
                {isForthTab && <Notes onClose={() => setActiveTab(previousTab)} />}
                {isFifthTab && <Map />}
            </Stack>
        </Stack>
    );
};
