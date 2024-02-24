import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { tabs } from '@/modules/Settings/data/tabs.js';
import { SearchInput } from '@/components/SearchInput/index.js';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid/index.js';
import { columns, rows } from './data/sensors.jsx';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultButton } from '@/ui/DefaultButton/index.js';
import { Popup } from '@/components/Popup/index.js';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { columnsUsers, rowsUsers } from '@/modules/Settings/data/users.jsx';

export const Settings = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [isOpenedSensorDetails, setIsOpenedSensorDetails] = useState(false);
    const [isOpenedUserDetails, setIsOpenedUserDetails] = useState(false);

    useEffect(() => {
        setIsOpenedUserDetails(false);
        setIsOpenedSensorDetails(false);
    }, [activeTab]);

    return (
        <Stack p={2.5} width={'100%'}>
            <Box bgcolor={'#F6F6F7'} p={2} pt={0} borderRadius={'10px 10px 0 0'} border={'1px solid #DBDDE2'}>
                <Stack mb={3} direction={'row'} justifyContent={'space-between'} spacing={3} alignItems={'center'}>
                    <Stack direction={'row'} borderBottom={'1px solid #DBDDE2'}>
                        {tabs.map(({ id, label, value }) => (
                            <ButtonBase
                                type={'button'}
                                key={id}
                                sx={{
                                    px: 3,
                                    py: 2,
                                    position: 'relative',
                                }}
                                onClick={() => setActiveTab(value)}
                            >
                                <Typography>{label}</Typography>
                                {activeTab === value && (
                                    <Box
                                        width={'100%'}
                                        position={'absolute'}
                                        left={0}
                                        bottom={0}
                                        height={3}
                                        bgcolor={'primary.main'}
                                    />
                                )}
                            </ButtonBase>
                        ))}
                    </Stack>
                    {activeTab === 'sensors' && (
                        <ButtonBase
                            type={'button'}
                            bgcolor={'blue.light'}
                            onClick={() => setIsOpenedSensorDetails(true)}
                            sx={{
                                py: 1.5,
                                px: 2,
                                position: 'relative',
                                boxShadow: '0px 3px 6px rgba(0 0 0 / 16%)',
                                borderRadius: '5px',
                            }}
                        >
                            + New Sensor
                        </ButtonBase>
                    )}

                    {activeTab === 'users' && (
                        <ButtonBase
                            type={'button'}
                            bgcolor={'blue.light'}
                            onClick={() => setIsOpenedUserDetails(true)}
                            sx={{
                                py: 1.5,
                                px: 2,
                                position: 'relative',
                                boxShadow: '0px 3px 6px rgba(0 0 0 / 16%)',
                                borderRadius: '5px',
                            }}
                        >
                            + New User
                        </ButtonBase>
                    )}
                </Stack>
                {activeTab === 'users' && (
                    <>
                        <Typography mb={2} fontWeight={700}>
                            User Manager
                        </Typography>
                        <Stack direction={'row'} spacing={3} alignItems={'flex-end'} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={6}>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Total Enrolled</Typography>
                                    <Stack direction={'row'} spacing={2} alignItems={'baseline'}>
                                        <Typography fontSize={30} fontWeight={700}>
                                            125
                                        </Typography>
                                        <Typography>Devices</Typography>
                                    </Stack>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Active Users</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        100
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Disabled</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        25
                                    </Typography>
                                </Stack>
                                <Box width={'1px'} bgcolor={'#DBDDE2'} />
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Admin Users</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        10
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Standard Users</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        115
                                    </Typography>
                                </Stack>
                            </Stack>
                            <SearchInput
                                sx={{
                                    border: '1px solid #DBDDE2',
                                }}
                            />
                        </Stack>
                    </>
                )}

                {activeTab === 'sensors' && (
                    <>
                        <Typography mb={2} fontWeight={700}>
                            Sensor Fleet
                        </Typography>
                        <Stack direction={'row'} spacing={3} alignItems={'flex-end'} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={6}>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Total Registered</Typography>
                                    <Stack direction={'row'} spacing={2} alignItems={'baseline'}>
                                        <Typography fontSize={30} fontWeight={700}>
                                            520
                                        </Typography>
                                        <Typography>Devices</Typography>
                                    </Stack>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Activated</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        500
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Deactivated</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        25
                                    </Typography>
                                </Stack>
                                <Box width={'1px'} bgcolor={'#DBDDE2'} />
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Online</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        500
                                    </Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography color={'#A0A3A6'}>Offlline</Typography>
                                    <Typography fontSize={30} fontWeight={700}>
                                        20
                                    </Typography>
                                </Stack>
                            </Stack>
                            <SearchInput
                                sx={{
                                    border: '1px solid #DBDDE2',
                                }}
                            />
                        </Stack>
                    </>
                )}
            </Box>
            <Box flex={1} border={'1px solid #DBDDE2'} mt={'-1px'}>
                {activeTab === 'users' && <DefaultDataGrid columns={columnsUsers} rows={rowsUsers} />}
                {activeTab === 'sensors' && <DefaultDataGrid columns={columns} rows={rows} />}
            </Box>
            <Popup
                isOpened={activeTab === 'users' && isOpenedUserDetails}
                width={700}
                bgcolor={'common.white'}
                sx={{
                    bottom: 20,
                    right: 20,
                    border: '1px solid #DBDDE2',
                    borderColor: '#DBDDE2',
                    borderRadius: '10px',
                }}
            >
                <Stack px={3} pt={3} pb={3} gap={'32px'} height={'100%'} alignItems={'flex-start'}>
                    <Typography fontSize={20}>User Details</Typography>
                    <Box width={'100%'}>
                        <Grid spacing={3} container>
                            <Grid item xs={4}>
                                <DefaultInput label={'First Name'} />
                            </Grid>
                            <Grid item xs={4}>
                                <DefaultInput label={'Last Name'} />
                            </Grid>
                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <DefaultSelect helperText={'Role'} />
                            </Grid>
                            <Grid item xs={4}>
                                <DefaultSelect helperText={'Status'} />
                            </Grid>
                            <Grid item xs={4} />
                            <Grid item xs={4}>
                                <DefaultInput label={'Mobile'} />
                            </Grid>
                            <Grid item xs={8}>
                                <DefaultInput label={'Email'} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box height={'1px'} width={'80%'} border={'1px solid #DBDDE2'} />
                    <Box width={'100%'}>
                        <Grid spacing={3} container>
                            <Grid item xs={4}>
                                <DefaultInput label={'Password'} type={'password'} />
                            </Grid>
                            <Grid item xs={4}>
                                <DefaultInput label={'Confirm Password'} type={'password'} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box height={'1px'} width={'80%'} border={'1px solid #DBDDE2'} />
                    <Stack spacing={1}>
                        <Typography fontWeight={700}>Invitation Email</Typography>
                        <ButtonBase
                            sx={{
                                bgcolor: 'blue.light',
                                px: 3,
                                py: 1,
                                borderRadius: '5px',
                                fontWeight: 700,
                            }}
                        >
                            Send
                        </ButtonBase>
                    </Stack>
                    <Stack direction={'row'} spacing={1} mt={'auto'} width={'100%'}>
                        <Box flexGrow={1}>
                            <DefaultButton onClick={() => setIsOpenedUserDetails(false)} color={'error'}>
                                Delete
                            </DefaultButton>
                        </Box>
                        <DefaultButton onClick={() => setIsOpenedUserDetails(false)}>Cancel</DefaultButton>
                        <DefaultButton color={'success'} onClick={() => setIsOpenedUserDetails(false)}>
                            Save
                        </DefaultButton>
                    </Stack>
                </Stack>
            </Popup>

            <Popup
                isOpened={activeTab === 'sensors' && isOpenedSensorDetails}
                width={700}
                bgcolor={'common.white'}
                sx={{
                    bottom: 20,
                    right: 20,
                    border: '1px solid #DBDDE2',
                    borderColor: '#DBDDE2',
                    borderRadius: '10px',
                }}
            >
                <Stack px={3} pt={3} pb={3} gap={'32px'} height={'100%'} alignItems={'flex-start'}>
                    <Typography fontSize={20}>Sensor Details</Typography>
                    <Stack spacing={3} maxWidth={420} width={'100%'}>
                        <DefaultSelect helperText={'Manufacturer'} />
                        <DefaultSelect helperText={'Sensor Model'} />
                        <DefaultInput label={'Sensor ID (MAC)'} />
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontWeight={700}>Device State</Typography>
                        <Stack direction={'row'} spacing={3} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>Online</Typography>
                            <ColorStatus code={1} />
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontWeight={700}>Last Transmission</Typography>
                        <Typography>12-07-2023 12:09pm</Typography>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontWeight={700}>Assigned Machine</Typography>
                        <Box bgcolor={'blue.light'} px={3} py={1} borderRadius={'5px'}>
                            <Typography>Mazak CNC 2500</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} spacing={1} mt={'auto'} width={'100%'}>
                        <Box flexGrow={1}>
                            <DefaultButton onClick={() => setIsOpenedSensorDetails(false)} color={'error'}>
                                Delete
                            </DefaultButton>
                        </Box>
                        <DefaultButton onClick={() => setIsOpenedSensorDetails(false)}>Cancel</DefaultButton>
                        <DefaultButton color={'success'} onClick={() => setIsOpenedSensorDetails(false)}>
                            Save
                        </DefaultButton>
                    </Stack>
                </Stack>
            </Popup>
        </Stack>
    );
};
