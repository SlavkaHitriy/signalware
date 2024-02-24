import ClusterIcon from '/public/icons/cluster.svg?react';
import { InventoryIcon } from '@/assets/icons/InventoryIcon';
import { MapViewIcon } from '@/assets/icons/MapViewIcon';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon';
import { Map } from '@/components/Map/Map';
import { Metrics } from '@/components/Metrics';
import { PageTitle } from '@/components/PageTitle';
import { SearchInput } from '@/components/SearchInput';
import { metrics1, metrics2, metrics3 } from '@/modules/Inventory/data/metrics';
import { CircleButton } from '@/ui/CircleButton';
import { Filters } from '@/ui/Filters';
import { Fullscreen, FullscreenExit } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';

export const MapView = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <Stack pb={!isFullScreen && 5} pt={isFullScreen ? 2 : 5} px={2.5} width={'100%'}>
            {!isFullScreen && (
                <Stack>
                    <Stack mb={3}>
                        <PageTitle icon={<MapViewIcon />}>Map View</PageTitle>
                    </Stack>
                    <Stack direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'}>
                        <Metrics icon={<InventoryIcon />} data={metrics1} />
                        <Metrics icon={<ClusterIcon />} data={metrics2} />
                        <Metrics icon={<ClusterIcon />} data={metrics3} />
                    </Stack>
                </Stack>
            )}
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={isFullScreen ? 0 : 2}>
                <Stack direction={'row'} spacing={2}>
                    <SearchInput />
                    <Filters />
                </Stack>
                <CircleButton
                    icon={isFullScreen ? <FullscreenExit /> : <Fullscreen />}
                    onClick={() => setIsFullScreen((prevState) => !prevState)}
                />
            </Stack>
            <Box
                mx={isFullScreen && '-20px'}
                mt={2}
                flex={1}
                border={'1px solid'}
                borderColor={'grey.light'}
                borderRadius={'5px'}
                overflow={'hidden'}
            >
                {!isFullScreen && <Map />}
                {isFullScreen && <Map />}
            </Box>
        </Stack>
    );
};
