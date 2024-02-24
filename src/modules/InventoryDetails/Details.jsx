import { columns, rows } from '@/modules/InventoryDetails/data/joints';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Popup } from '@/components/Popup/index.js';
import { ColorStatus } from '@/ui/ColorStatus/index.js';
import { CircleButton } from '@/ui/CircleButton/index.js';
import { Close } from '@mui/icons-material';
import QrCodeIcon from '/public/icons/qr-code.svg?react';
import { Line } from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.3,
            fill: true,
            // fill: 'start',
            // backgroundColor: '#000',
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false,
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const Details = ({ disabled }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <Stack
            sx={{
                pointerEvents: disabled && 'none',
            }}
        >
            <Stack direction={'row'} spacing={4} p={2} alignItems={'flex-end'}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>End User</Typography>
                                <Typography fontWeight={700}>ACME Tubular Services</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Category</Typography>
                                <Typography fontWeight={700}>OCTG/Casing</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Type</Typography>
                                <Typography fontWeight={700}>API 5.00”</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Purchase Order</Typography>
                                <Typography fontWeight={700}>4587001</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Site Location</Typography>
                                <Typography fontWeight={700}>Houston Yard</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <Box bgcolor={'grey.light'} width={'1px'} height={160} flexShrink={0} />
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pipe Name</Typography>
                                <Typography fontWeight={700}>2.875” x 0.276”w 7.90 Lb/ft, P-110 SMLS R2 Tubing.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Grade</Typography>
                                <Typography fontWeight={700}>S-135</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Connection</Typography>
                                <Typography fontWeight={700}>FLEX TSS</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>O.D.</Typography>
                                <Typography fontWeight={700}>5&quot; 7/8</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Weight (lb/ft)</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Wall Thick.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Range</Typography>
                                <Typography fontWeight={700}>2</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                <Box bgcolor={'grey.light'} width={'1px'} height={160} flexShrink={0} />
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Stack maxWidth={100} ml={'auto'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                                <Filters fixValue={'Edit'} />
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>O.D.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>I.D.</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Pin Tong</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Box Tong</Typography>
                                <Typography fontWeight={700}>00.00</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>Hardband</Typography>
                                <Typography fontWeight={700}>DURABAND</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack spacing={1.5}>
                                <Typography color={'#A8A8A7'}>IPC</Typography>
                                <Typography fontWeight={700}>YES</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
            <Box flex={1}>
                <DefaultDataGrid columns={columns} rows={rows} onRowClick={() => setIsOpened(true)} />
            </Box>
            <Popup right={0} isOpened={isOpened} bgcolor={'blue.light'} width={930} p={2}>
                <CircleButton
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 2,
                    }}
                    icon={<Close />}
                    onClick={() => setIsOpened(false)}
                />
                <Box display={'flex'} flexDirection={'row'} gap={4}>
                    <Stack flexGrow={1} spacing={2.5} position={'relative'}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography>Joint</Typography>
                                        <Typography fontSize={25} fontWeight={700}>
                                            20
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Length (ft)</Typography>
                                        <Typography fontSize={25} fontWeight={700}>
                                            30.55
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={5}>
                                    <Stack spacing={2}>
                                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                            <Typography>Health Rating</Typography>
                                            <ColorStatus code={1} />
                                        </Stack>
                                        <Typography fontSize={25} fontWeight={700}>
                                            Prime
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            width={'100%'}
                            sx={{
                                height: '1px',
                                backgroundImage: 'linear-gradient(to right, #d5d5d5, #d5d5d5 60%, transparent 50%)',
                                backgroundSize: '13px 1px',
                            }}
                        />
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography>Serial</Typography>
                                        <Typography fontWeight={700}>25047</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography>Heat</Typography>
                                        <Typography fontWeight={700}>1000455</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography>Lot</Typography>
                                        <Typography fontWeight={700}>65055</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack spacing={2}>
                                        <Typography>Status</Typography>
                                        <Typography fontWeight={700}>In Service</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            width={'100%'}
                            sx={{
                                height: '1px',
                                backgroundImage: 'linear-gradient(to right, #d5d5d5, #d5d5d5 60%, transparent 50%)',
                                backgroundSize: '13px 1px',
                            }}
                        />
                        <Box>
                            <CircleButton
                                sx={{
                                    bgcolor: 'transparent',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    '&:hover': {
                                        bgcolor: 'grey.blue',
                                    },
                                }}
                                icon={<QrCodeIcon />}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Grade</Typography>
                                        <Typography fontWeight={700}>S-135</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Connection</Typography>
                                        <Typography fontWeight={700}>FLEX TSS</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>O.D.</Typography>
                                        <Typography fontWeight={700}>5&quot; 7/8</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Weight (lb/ft)</Typography>
                                        <Typography fontWeight={700}>00.00</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Wall Thick.</Typography>
                                        <Typography fontWeight={700} color={'green.main'}>
                                            0.217
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Range</Typography>
                                        <Typography fontWeight={700}>2</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>O.D.</Typography>
                                        <Typography fontWeight={700}>00.00</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>I.D.</Typography>
                                        <Typography fontWeight={700}>00.00</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Pin Tong</Typography>
                                        <Typography fontWeight={700}>00.00</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Box Tong</Typography>
                                        <Typography fontWeight={700}>00.00</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>Hardband</Typography>
                                        <Typography fontWeight={700}>DURABAND</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2}>
                                        <Typography>IPC</Typography>
                                        <Typography fontWeight={700}>YES</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>Unique Identifier</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography fontWeight={700}>E0012400040000001</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                    <Stack spacing={1.5} width={400} flexShrink={0}>
                        <Stack spacing={1}>
                            <Typography>Remaining Body Wall</Typography>
                            <Box height={190}>
                                <Line data={data} options={config} />
                            </Box>
                        </Stack>
                        <Stack spacing={1}>
                            <Typography fontWeight={700}>Inspection data</Typography>
                            <Box px={3} py={2} bgcolor={'common.white'} borderRadius={'10px'}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography>Wall Thickness Value</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Date/Time</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography fontWeight={700}>0.254</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>11/02/23 1:23PM</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography fontWeight={700}>0.274</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>11/02/23 1:23PM</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography fontWeight={700}>0.254</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>11/02/23 1:23PM</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography fontWeight={700}>0.274</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>11/02/23 1:23PM</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Popup>
        </Stack>
    );
};
