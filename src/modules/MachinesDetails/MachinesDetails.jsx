import ClusterIcon from '/public/icons/cluster.svg?react';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2 } from './data/metrics';
import { columns } from './data/machinesMain.jsx';
import { CircleButton } from '@/ui/CircleButton';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Box, ButtonBase, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Close } from '@mui/icons-material';
import { TimeIcon } from '@/assets/icons/TimeIcon.jsx';
import { tabs } from './data/tabs.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { shiftDetailsColumns, shiftDetailsRows } from '@/modules/MachinesDetails/data/shiftDetails.jsx';
import { DefaultButton } from '@/ui/DefaultButton/index.js';
import { Datepicker } from '@/ui/Datepicker/index.js';
import { Filters } from '@/ui/Filters/index.js';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { columnsEvents, rowsEvents } from '@/modules/MachinesDetails/data/events.jsx';
import { SensorIcon } from '@/assets/icons/SensorIcon.jsx';
import { ConfigurationIcon } from '@/assets/icons/ConfigurationIcon.jsx';
import { DefaultInput } from '@/ui/DefaultInput/index.js';

export const MachinesDetails = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [isActivityDetailsOpen, setIsActivityDetailsOpen] = useState(false);

    const rows = useMemo(() => {
        const resArr = [
            {
                id: 1,
                shift: {
                    text: 'Shift 1',
                    isRed: isActivityDetailsOpen,
                },
                total: '08:56',
                uptime: '03:23',
                downtime: '09:53',
                efficiency: '60%',
                uptimePercentage: 60,
                callback: {
                    onClick: () => setIsActivityDetailsOpen(false),
                    isArrow: !isActivityDetailsOpen,
                },
            },
        ];

        if (!isActivityDetailsOpen) {
            resArr.push({
                id: 2,
                shift: {
                    text: 'Shift 2',
                    isRed: isActivityDetailsOpen,
                },
                total: '08:56',
                uptime: '03:23',
                downtime: '09:53',
                efficiency: '60%',
                uptimePercentage: 60,
                callback: {
                    onClick: () => setIsActivityDetailsOpen(true),
                    isArrow: !isActivityDetailsOpen,
                },
            });
            resArr.push({
                id: 3,
                shift: {
                    text: 'Shift 2',
                    isRed: isActivityDetailsOpen,
                },
                total: '08:56',
                uptime: '03:23',
                downtime: '09:53',
                efficiency: '60%',
                uptimePercentage: 60,
                callback: {
                    onClick: () => setIsActivityDetailsOpen(true),
                    isArrow: !isActivityDetailsOpen,
                },
            });
        }

        return resArr;
    }, [isActivityDetailsOpen]);

    const handleChangeTab = (tab) => {
        setActiveTab(tab);
    };

    useLayoutEffect(() => {
        if (!isActivityDetailsOpen && activeTab === tabs[0].value) {
            let root = am5.Root.new('chartdiv');

            root.dateFormatter.setAll({
                dateFormat: 'yyyy',
                dateFields: ['valueX'],
            });

            root.setThemes([am5themes_Animated.new(root)]);

            let chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: 'panX',
                    wheelY: 'zoomX',
                    pinchZoomX: true,
                })
            );

            let cursor = chart.set(
                'cursor',
                am5xy.XYCursor.new(root, {
                    behavior: 'none',
                })
            );
            cursor.lineY.set('visible', false);

            let data = [
                { hour: new Date().setHours(0, 0), value: 0 },
                { hour: new Date().setHours(1, 0), value: 0 },
                { hour: new Date().setHours(2, 0), value: 0 },
                { hour: new Date().setHours(3, 0), value: 0 },
                { hour: new Date().setHours(4, 0), value: 0 },
                { hour: new Date().setHours(5, 0), value: 0 },
                { hour: new Date().setHours(6, 0), value: 0 },
                { hour: new Date().setHours(7, 0), value: 0 },
                { hour: new Date().setHours(8, 0), value: 0 },
                { hour: new Date().setHours(9, 0), value: 0 },
                { hour: new Date().setHours(10, 0), value: 0 },
                { hour: new Date().setHours(11, 0), value: 0 },
                { hour: new Date().setHours(12, 0), value: 0 },
                { hour: new Date().setHours(13, 0), value: 0 },
                { hour: new Date().setHours(14, 0), value: 0 },
                { hour: new Date().setHours(15, 0), value: 0 },
                { hour: new Date().setHours(16, 0), value: 0 },
                { hour: new Date().setHours(17, 0), value: 0 },
                { hour: new Date().setHours(18, 0), value: 0 },
                { hour: new Date().setHours(19, 0), value: 0 },
                { hour: new Date().setHours(20, 0), value: 0 },
                { hour: new Date().setHours(21, 0), value: 0 },
                { hour: new Date().setHours(22, 0), value: 0 },
                { hour: new Date().setHours(23, 0), value: 0 },
            ];

            let xAxis = chart.xAxes.push(
                am5xy.DateAxis.new(root, {
                    maxDeviation: 0.5,
                    baseInterval: { timeUnit: 'hour', count: 1 },
                    renderer: am5xy.AxisRendererX.new(root, { pan: 'zoom' }),
                    tooltip: am5.Tooltip.new(root, {}),
                })
            );

            const yRenderer = am5xy.AxisRendererY.new(root, { pan: 'zoom' });
            yRenderer.labels.template.set('visible', false);

            let yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    maxDeviation: 1,
                    renderer: yRenderer,
                })
            );

            chart.get('colors').set('colors', [am5.color('#F06566')]);
            let series = chart.series.push(
                am5xy.StepLineSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: 'value',
                    valueXField: 'hour',
                })
            );

            series.strokes.template.setAll({
                strokeWidth: 300,
                fill: am5.color('#ccc'),
            });

            series.data.processor = am5.DataProcessor.new(root, {
                dateFormat: 'hh',
                dateFields: ['hour'],
            });

            series.data.setAll(data);

            chart.set(
                'scrollbarX',
                am5.Scrollbar.new(root, {
                    orientation: 'horizontal',
                })
            );

            return () => {
                root.dispose();
            };
        }
    }, [isActivityDetailsOpen, activeTab]);

    const isFirstTab = activeTab === tabs[0].value;
    const isSecondTab = activeTab === tabs[1].value;
    const isThirdTab = activeTab === tabs[2].value;

    return (
        <Stack p={2.5} width={'100%'}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={1} spacing={2}>
                <Typography fontSize={20}>Name</Typography>
                <CircleButton icon={<Close />} onClick={() => navigate('/machines')} />
            </Stack>
            <Stack direction={'row'} spacing={4} alignItems={'baseline'} mb={2}>
                <Typography width={'50%'} fontSize={40} fontWeight={700}>
                    Mazak 1250
                </Typography>
                <Stack direction={'row'} alignItems={'baseline'} spacing={10}>
                    <Box width={'1px'} height={40} bgcolor={'grey.light'} flexShrink={0} />
                    <Typography fontSize={25}>Bay Area 1</Typography>
                    <Box width={'1px'} height={40} bgcolor={'grey.light'} flexShrink={0} />
                    <Typography fontSize={25}>Running</Typography>
                </Stack>
            </Stack>
            <Stack mb={2} direction={'row'} gap={4} rowGap={2} flexWrap={'wrap'}>
                <Metrics icon={<TimeIcon />} data={metrics1} />
                <Metrics icon={<ClusterIcon />} data={metrics2} />
            </Stack>
            <Tabs data={tabs} activeTab={activeTab} setActiveTab={handleChangeTab} />
            <Stack
                flex={1}
                border={'1px solid'}
                borderColor={'grey.light'}
                borderRadius={'5px'}
                overflow={'hidden'}
                position={'relative'}
                bgcolor={'common.white'}
            >
                {isFirstTab && !isActivityDetailsOpen && (
                    <>
                        <Box p={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Manufacturer</Typography>
                                        <Typography>MAZAK</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Model</Typography>
                                        <Typography>1250</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Serial Number</Typography>
                                        <Typography>S-135</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Work Center</Typography>
                                        <Typography>1200-A</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction={'row'} spacing={3}>
                                        <Box maxWidth={500}>
                                            <Datepicker />
                                        </Box>
                                        <Box maxWidth={200}>
                                            <Filters />
                                        </Box>
                                        <ButtonBase
                                            type={'button'}
                                            onClick={() => setIsActivityDetailsOpen(true)}
                                            sx={{
                                                py: 1.5,
                                                px: 4,
                                                position: 'relative',
                                                borderRadius: '5px',
                                                flexShrink: 0,
                                                bgcolor: 'blue.light',
                                            }}
                                        >
                                            Edit
                                        </ButtonBase>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Type</Typography>
                                        <Typography>CNC Tool</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Site Location</Typography>
                                        <Typography>Houston Plant North</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box height={200} mb={3}>
                            <Box
                                sx={{
                                    height: '100%',
                                }}
                                id={'chartdiv'}
                            />
                        </Box>
                        <Box flexGrow={1}>
                            <DefaultDataGrid columns={columns} rows={rows} onRowClick={() => setIsActivityDetailsOpen(true)} />
                        </Box>
                    </>
                )}
                {isFirstTab && isActivityDetailsOpen && (
                    <>
                        <Box>
                            <DefaultDataGrid columns={columns} rows={rows} disablePagination />
                        </Box>
                        <Box flexGrow={1}>
                            <DefaultDataGrid
                                pageItems={10}
                                pageSizeOptions={[10, 20, 30]}
                                columns={shiftDetailsColumns}
                                rows={shiftDetailsRows}
                            />
                        </Box>
                        <Stack direction={'row'} justifyContent={'flex-end'} spacing={2} p={2}>
                            <DefaultButton onClick={() => setIsActivityDetailsOpen(false)}>Cancel</DefaultButton>
                            <DefaultButton color={'success'} onClick={() => setIsActivityDetailsOpen(false)}>
                                Save
                            </DefaultButton>
                        </Stack>
                    </>
                )}
                {isSecondTab && (
                    <>
                        <Stack p={2} direction={'row'} spacing={2}>
                            <Box maxWidth={500}>
                                <Datepicker />
                            </Box>
                            <Box maxWidth={300}>
                                <Filters />
                            </Box>
                        </Stack>
                        <Box flexGrow={1}>
                            <DefaultDataGrid columns={columnsEvents} rows={rowsEvents} />
                        </Box>
                    </>
                )}
                {isThirdTab && (
                    <Stack p={2} flexGrow={1}>
                        <Box flexGrow={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Sensor Manufacturer</Typography>
                                        <Typography>NCD.io</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Sensor Model</Typography>
                                        <Typography>A/C Current 3 Channel</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Stack
                                            direction={'row'}
                                            spacing={2}
                                            justifyContent={'space-between'}
                                            alignItems={'center'}
                                            pr={1}
                                        >
                                            <Typography color={'#A8A8A7'}>Sensor ID</Typography>
                                            <SensorIcon />
                                        </Stack>
                                        <Typography>00:13:A2:00:41:B1:A0:C1</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Battery</Typography>
                                        <Typography>56%</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Gateway</Typography>
                                        <Typography>NCD Gateway (34:94:54:C7:F3:60)</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Stack my={3} direction={'row'} alignItems={'center'} spacing={2}>
                                <Typography fontWeight={700}>Configuration</Typography>
                                <ConfigurationIcon />
                            </Stack>
                            <Stack direction={'row'} spacing={6}>
                                <Box maxWidth={'60%'} width={'100%'}>
                                    <Grid container rowSpacing={6} columnSpacing={3}>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Channel 1 Name'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Min Threshold (amps)'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Max Threshold (amps)'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Channel 2 Name'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Min Threshold (amps)'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Max Threshold (amps)'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Channel 3 Name'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Min Threshold (amps)'} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <DefaultInput label={'Max Threshold (amps)'} />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Stack spacing={2} flexGrow={1} maxWidth={375}>
                                    <Stack spacing={1} bgcolor={'blue.light'} p={2} borderRadius={'5px'}>
                                        <Typography>Real-time Data</Typography>
                                        <Stack direction={'row'} spacing={3} alignItems={'baseline'}>
                                            <Typography fontSize={25} fontWeight={700}>
                                                58.22
                                            </Typography>
                                            <Typography>Amps</Typography>
                                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                                <Typography>0</Typography>
                                                <Box
                                                    position={'relative'}
                                                    width={100}
                                                    height={10}
                                                    bgcolor={'#EAEBEA'}
                                                    boxShadow={'inset 0 3px 6px rgba(0, 0, 0, .16)'}
                                                >
                                                    <Box
                                                        position={'absolute'}
                                                        height={'100%'}
                                                        left={0}
                                                        top={0}
                                                        bgcolor={'green.main'}
                                                        width={`${70}%`}
                                                    />
                                                </Box>
                                                <Typography>100</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={1} bgcolor={'blue.light'} p={2} borderRadius={'5px'}>
                                        <Typography>Real-time Data</Typography>
                                        <Stack direction={'row'} spacing={3} alignItems={'baseline'}>
                                            <Typography fontSize={25} fontWeight={700}>
                                                100.1
                                            </Typography>
                                            <Typography>Amps</Typography>
                                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                                <Typography>0</Typography>
                                                <Box
                                                    position={'relative'}
                                                    width={100}
                                                    height={10}
                                                    bgcolor={'#EAEBEA'}
                                                    boxShadow={'inset 0 3px 6px rgba(0, 0, 0, .16)'}
                                                >
                                                    <Box
                                                        position={'absolute'}
                                                        height={'100%'}
                                                        left={0}
                                                        top={0}
                                                        bgcolor={'green.main'}
                                                        width={`${70}%`}
                                                    />
                                                </Box>
                                                <Typography>100</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={1} bgcolor={'blue.light'} p={2} borderRadius={'5px'}>
                                        <Typography>Real-time Data</Typography>
                                        <Stack direction={'row'} spacing={3} alignItems={'baseline'}>
                                            <Typography fontSize={25} fontWeight={700}>
                                                58.22
                                            </Typography>
                                            <Typography>Amps</Typography>
                                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                                <Typography>0</Typography>
                                                <Box
                                                    position={'relative'}
                                                    width={100}
                                                    height={10}
                                                    bgcolor={'#EAEBEA'}
                                                    boxShadow={'inset 0 3px 6px rgba(0, 0, 0, .16)'}
                                                >
                                                    <Box
                                                        position={'absolute'}
                                                        height={'100%'}
                                                        left={0}
                                                        top={0}
                                                        bgcolor={'green.main'}
                                                        width={`${70}%`}
                                                    />
                                                </Box>
                                                <Typography>100</Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                        <Stack direction={'row'} justifyContent={'flex-end'} spacing={2} mt={2}>
                            <DefaultButton onClick={() => setIsActivityDetailsOpen(false)}>Cancel</DefaultButton>
                            <DefaultButton color={'success'} onClick={() => setIsActivityDetailsOpen(false)}>
                                Save
                            </DefaultButton>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};
