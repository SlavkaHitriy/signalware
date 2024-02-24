import { ArrowIcon } from '@/assets/icons/ArrowIcon';
import { theme } from '@/core/theme/theme';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const SidebarItem = ({ data }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = (e) => {
        if (data.items) {
            e.preventDefault();
        }

        setIsOpened((prev) => !prev);
    };

    return (
        <>
            <NavLink to={data.link} onClick={handleClick}>
                {({ isActive }) => (
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={2}
                        position={'relative'}
                        px={3}
                        py={2}
                        sx={{
                            '&:hover': {
                                bgcolor: 'grey.200',
                                color: 'grey.blue',
                            },

                            bgcolor: isActive ? '#E4E3E3' : 'transparent',
                            pointerEvents: isActive ? 'none' : 'auto',
                        }}
                    >
                        {isActive && <Box position={'absolute'} right={0} height={'100%'} bgcolor={'secondary.main'} width={6} />}
                        <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            width={24}
                            height={24}
                            sx={{
                                svg: {
                                    width: 24,
                                    height: 24,
                                },
                            }}
                        >
                            {data.icon}
                        </Stack>
                        <Typography fontWeight={isActive ? 700 : 400}>{data.title}</Typography>
                        {data.items && (
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                                ml={'auto'}
                                sx={{
                                    transform: isOpened ? 'rotate(180deg)' : 'unset',
                                    svg: {
                                        stroke: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <ArrowIcon />
                            </Stack>
                        )}
                    </Stack>
                )}
            </NavLink>
            {isOpened && data.items?.map((item) => <SidebarItem key={item.title} data={item} />)}
        </>
    );
};
