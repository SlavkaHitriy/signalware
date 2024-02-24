import { ArrowsIcon } from '@/assets/icons/Arrows';
import { UsersIcon } from '@/assets/icons/Users';
import { DefaultSelect } from '@/ui/DefaultSelect';
import { CheckCircle, PlayCircle } from '@mui/icons-material';
import { useState } from 'react';
import { columns, rows } from './data/transfer';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Box, Button, Stack, Typography } from '@mui/material';

export const Transfer = ({ disabled }) => {
    const [isSuccessScreen, setIsSuccessScreen] = useState(false);

    return (
        <>
            <Stack
                flex={1}
                sx={{
                    pointerEvents: disabled && 'none',
                }}
            >
                {!isSuccessScreen && (
                    <>
                        <Box p={2}>
                            <Typography fontSize={20} mb={2}>
                                Tally Transfer
                            </Typography>
                            <Stack direction={'row'} gap={4} alignItems={'flex-end'}>
                                <Box width={200}>
                                    <DefaultSelect helperText={'Current Site'} />
                                </Box>
                                <Stack
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                        bgcolor: '#EFEFEF',
                                        svg: {
                                            width: 24,
                                            height: 24,
                                        },
                                    }}
                                >
                                    <ArrowsIcon />
                                </Stack>
                                <Box width={200}>
                                    <DefaultSelect helperTextColor={'green.main'} helperText={'New Site'} />
                                </Box>
                                <Stack
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                        bgcolor: '#EFEFEF',
                                        svg: {
                                            width: 24,
                                            height: 24,
                                        },
                                    }}
                                >
                                    <UsersIcon />
                                </Stack>
                                <Box width={200}>
                                    <DefaultSelect helperTextColor={'green.main'} helperText={'New End User'} />
                                </Box>
                                <Box ml={'auto'}>
                                    <Button
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            py: 1,
                                            px: 2,
                                            borderRadius: '5px',
                                            '&:hover': {
                                                bgcolor: 'primary.dark',
                                            },
                                        }}
                                        onClick={() => setIsSuccessScreen(true)}
                                    >
                                        <Typography
                                            sx={{
                                                textTransform: 'capitalize',
                                            }}
                                            fontWeight={700}
                                            fontSize={15}
                                        >
                                            Transfer
                                        </Typography>
                                        <CheckCircle
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                color: 'green.main',
                                            }}
                                        />
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                        <Box flex={1}>
                            <DefaultDataGrid columns={columns} rows={rows} defaultSize={15} />
                        </Box>
                    </>
                )}

                {isSuccessScreen && (
                    <Stack flex={1} alignItems={'center'} justifyContent={'center'} textAlign={'center'} p={4} spacing={3}>
                        <Typography fontSize={25} fontWeight={700} color={'green.main'}>
                            Pipe Tally Transferred Successfully
                        </Typography>
                        <Stack>
                            <Typography fontSize={20}>
                                Your pipe tally has been successfully processed and transferred.
                            </Typography>
                            <Typography fontSize={20}>A confirmation will be sent to all stakeholders.</Typography>
                        </Stack>
                        <Button
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                py: 1,
                                px: 2,
                                borderRadius: '5px',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            }}
                            onClick={() => setIsSuccessScreen(false)}
                        >
                            <Typography
                                sx={{
                                    textTransform: 'capitalize',
                                }}
                                fontWeight={700}
                                fontSize={15}
                            >
                                View Transfers
                            </Typography>
                            <PlayCircle
                                sx={{
                                    width: 24,
                                    height: 24,
                                    color: 'green.main',
                                }}
                            />
                        </Button>
                    </Stack>
                )}
            </Stack>
        </>
    );
};
