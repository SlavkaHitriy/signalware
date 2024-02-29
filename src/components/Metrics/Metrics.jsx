import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Metrics = ({ data, icon }) => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            bgcolor={'grey.200'}
            borderRadius={'5px'}
            pl={2}
            pr={4}
            pt={1.5}
            pb={0.5}
            minWidth={250}
        >
            <Box
                mr={2.5}
                sx={{
                    svg: {
                        width: 40,
                        height: 40,
                    },
                }}
            >
                {icon}
            </Box>
            <Stack direction={'row'} spacing={2.5} alignItems={'center'}>
                {data.map(({ title, value, isGreen, isRed, color, icon, hasIndicator }, idx) => (
                    <React.Fragment key={title}>
                        <Stack direction={'row'} spacing={1}>
                            {icon && (
                                <Box
                                    mr={1}
                                    sx={{
                                        svg: {
                                            width: 40,
                                            height: 40,
                                        },
                                    }}
                                >
                                    {icon}
                                </Box>
                            )}
                            <Stack>
                                <Typography>{title}</Typography>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                    <Typography
                                        fontWeight={700}
                                        fontSize={25}
                                        color={isGreen ? 'green.main' : isRed && 'red.main'}
                                    >
                                        {value}
                                    </Typography>
                                    {hasIndicator && (
                                        <Box
                                            width={10}
                                            height={10}
                                            borderRadius={'50%'}
                                            bgcolor={'green.main'}
                                            flexShrink={0}
                                            ml={1}
                                            sx={{
                                                transform: 'translateY(3px)',
                                            }}
                                        />
                                    )}
                                </Stack>
                            </Stack>
                            {color && (
                                <Box
                                    width={15}
                                    height={15}
                                    borderRadius={'50%'}
                                    border={'2px solid'}
                                    borderColor={color}
                                    sx={{
                                        transform: 'translateY(3px)',
                                    }}
                                />
                            )}
                        </Stack>
                        {idx !== data.length - 1 && <Box height={40} width={'1px'} flexShrink={0} bgcolor={'grey.light'} />}
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
    );
};
