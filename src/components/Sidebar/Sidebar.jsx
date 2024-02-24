import { ArrowIcon } from '@/assets/icons/ArrowIcon';
import { SupportIcon } from '@/assets/icons/SupportIcon';
import logo from '@/assets/images/logo.svg';
import { SidebarItem } from '@/components/Sidebar/SidebarItem';
import { theme } from '@/core/theme/theme';
import { Box, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mainMenu, systemMenu } from './data/menu';

export const Sidebar = () => {
    const [name, setName] = useState('HOUSTON');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Stack
            component={'aside'}
            width={220}
            flexShrink={0}
            bgcolor={'grey.300'}
            boxShadow={theme.shadows[1]}
            position={'relative'}
            zIndex={11}
            sx={{
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    width: '4px',
                    bgcolor: 'grey.400',
                },
            }}
        >
            <Box p={3}>
                <Box
                    mb={1.5}
                    sx={{
                        img: {
                            width: '100%',
                            objectFit: 'contain',
                        },
                    }}
                >
                    <Link to={'/'}>
                        <img src={logo} alt='logo' />
                    </Link>
                </Box>
                <Typography mb={4} fontSize={13} whiteSpace={'nowrap'}>
                    Machine Monitoring Platform
                </Typography>
                <FormControl
                    variant='filled'
                    fullWidth
                    hiddenLabel
                    sx={{
                        mb: 1,
                        '.MuiSelect-filled': {
                            bgcolor: 'primary.main',
                            borderRadius: '5px',
                            py: '10px',
                            pl: '15px',
                            color: 'common.white',
                            fontWeight: 700,
                            '&:focus': {
                                bgcolor: 'primary.main',
                                borderRadius: '5px',
                            },
                        },
                        '.MuiFilledInput-root::before, .MuiFilledInput-root::after': {
                            display: 'none',
                        },
                    }}
                >
                    <Select
                        sx={{
                            '& .MuiSelect-icon': {
                                top: 'calc(50% - 4px)',
                                right: '12px',
                                stroke: theme.palette.common.white,
                            },
                        }}
                        value={name}
                        onChange={handleChange}
                        IconComponent={ArrowIcon}
                    >
                        <MenuItem value={'HOUSTON 1'}>HOUSTON 1</MenuItem>
                        <MenuItem value={'HOUSTON'}>HOUSTON</MenuItem>
                    </Select>
                </FormControl>
                <Typography mb={1} fontSize={13} color={'grey.blue'}>
                    Select Site
                </Typography>
            </Box>
            <Box mb={3}>
                {mainMenu.map((item) => (
                    <SidebarItem key={item.title} data={item} />
                ))}
            </Box>
            <Stack spacing={3}>
                <Box px={3}>
                    <Typography fontSize={13} textTransform={'uppercase'} fontWeight={700}>
                        SYSTEM
                    </Typography>
                </Box>
                <Box>
                    {systemMenu.map((item) => (
                        <SidebarItem key={item.title} data={item} />
                    ))}
                </Box>
            </Stack>
            <Box px={3} py={2} mt={'auto'}>
                <Box mb={2} bgcolor={'grey.light'} height={'1px'} />
                <Typography fontSize={13} textTransform={'uppercase'} fontWeight={700}>
                    HELP & SUPPORT
                </Typography>
            </Box>
            <SidebarItem
                data={{
                    title: 'Support',
                    link: '/support',
                    icon: <SupportIcon />,
                }}
            />
        </Stack>
    );
};
