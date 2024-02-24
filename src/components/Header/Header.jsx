import { NotificationsIcon } from '@/assets/icons/NotificationsIcon';
import { DefaultAvatar } from '@/ui/DefaultAvatar';
import { Dropdown } from '@/ui/Dropdown';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
    return (
        <Stack
            position={'relative'}
            direction={'row'}
            alignItems={'center'}
            component={'header'}
            justifyContent={'space-between'}
            height={75}
            pl={2.5}
            pr={6}
            flexShrink={0}
            sx={{
                borderBottom: '1px solid',
                borderColor: 'grey.light',
            }}
        >
            <Stack spacing={0.5}>
                <Typography fontSize={13}>Monday, November 11, 2023</Typography>
                <Typography fontSize={13} fontWeight={700} component={'div'}>
                    Daniel Pacheco{' '}
                    <Typography fontSize={13} fontWeight={400} display={'inline'}>
                        (admin)
                    </Typography>
                </Typography>
            </Stack>
            <Box width={128} height={47} src={'/assets/flowserve-logo.png'} component={'img'} />
            <Stack direction={'row'} spacing={6} alignItems={'center'}>
                <Dropdown>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Box
                            sx={{
                                position: 'relative',
                                svg: {
                                    width: 24,
                                    height: 24,
                                    position: 'static',
                                    transform: 'unset',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: 'green.main',
                                    borderRadius: '10px',
                                    position: 'absolute',
                                    right: 0,
                                    top: 2,
                                    zIndex: 3,
                                }}
                            />
                            <NotificationsIcon />
                        </Box>
                        <Typography fontSize={13}>Notifications</Typography>
                    </Stack>
                </Dropdown>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <DefaultAvatar>AB</DefaultAvatar>
                    <Dropdown>
                        <Stack alignItems={'center'} justifyContent={'center'} color={'grey.blue'} fontSize={13} fontWeight={700}>
                            Daniel
                        </Stack>
                    </Dropdown>
                </Stack>
            </Stack>
        </Stack>
    );
};
