import ClusterIcon from '/public/icons/cluster.svg?react';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2, metrics3 } from './data/metrics.jsx';
import { SearchInput } from '@/components/SearchInput';
import { Filters } from '@/ui/Filters';
import { Box, Stack, Typography } from '@mui/material';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon.jsx';
import { LinesIcon } from '@/assets/icons/LinesIcon.jsx';
import { DashboardItemIcon } from '@/assets/icons/DashboardItemIcon.jsx';
import React from 'react';
import { items } from '@/modules/Dashboard/data/items.js';

export const Dashboard = () => {
    return (
        <Stack p={2.5} width={'100%'}>
            <Stack direction={'row'} spacing={2} mb={2}>
                <SearchInput />
                <Filters />
            </Stack>
            <Stack direction={'row'} gap={4} rowGap={2} mb={2} flexWrap={'wrap'}>
                <Metrics icon={<PipeProfilesIcon />} data={metrics1} />
                <Metrics icon={<LinesIcon />} data={metrics2} />
                <Metrics icon={<ClusterIcon />} data={metrics3} />
            </Stack>
            <Stack direction={'row'} gap={'10px'} flexWrap={'wrap'}>
                {items.map((item) => (
                    <Box
                        key={item.id}
                        p={1}
                        borderRadius={'10px'}
                        border={'2px dashed'}
                        borderColor={item.borderColor || 'grey.light'}
                        width={'calc(16.66666% - 10px)'}
                        maxWidth={245}
                        minWidth={200}
                    >
                        <Stack direction={'row'} mb={1} spacing={2}>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                                width={40}
                                height={40}
                                borderRadius={'5px'}
                                bgcolor={'blue.light'}
                                sx={{
                                    svg: {
                                        width: 20,
                                        height: 20,
                                    },
                                }}
                            >
                                <DashboardItemIcon />
                            </Stack>
                            <Stack spacing={0.5} flexGrow={1}>
                                <Typography fontSize={12} fontWeight={700}>
                                    MAZAK 1250 SERIES
                                </Typography>
                                <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                                    <Typography fontSize={10} color={'#AAB0BC'}>
                                        Bay Area 1
                                    </Typography>
                                    <Box
                                        flexShrink={0}
                                        width={15}
                                        height={15}
                                        borderRadius={'50%'}
                                        border={'2px solid'}
                                        borderColor={'green.main'}
                                        sx={{
                                            transform: 'translateY(3px)',
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack p={0.5} direction={'row'} spacing={2} justifyContent={'space-between'}>
                            <Stack>
                                <Typography fontSize={20} fontWeight={700}>
                                    Down
                                </Typography>
                                <Typography fontSize={10} color={'#AAB0BC'}>
                                    Status
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography fontSize={20} fontWeight={700}>
                                    100%
                                </Typography>
                                <Typography fontSize={10} color={'#AAB0BC'}>
                                    Utilization
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack
                            p={0.5}
                            bgcolor={'blue.light'}
                            borderRadius={'10px'}
                            direction={'row'}
                            spacing={2}
                            justifyContent={'space-between'}
                        >
                            <Stack>
                                <Typography fontSize={20} fontWeight={700}>
                                    00:00
                                </Typography>
                                <Typography fontSize={10} color={'#AAB0BC'}>
                                    Uptime
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography fontSize={20} fontWeight={700}>
                                    00:00
                                </Typography>
                                <Typography fontSize={10} color={'#AAB0BC'}>
                                    Downtime
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Stack>
    );
};
