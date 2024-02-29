import ClusterIcon from '/public/icons/cluster.svg?react';
import { Metrics } from '@/components/Metrics';
import { metrics1, metrics2 } from './data/metrics';
import { columns } from './data/machinesMain.jsx';
import { CircleButton } from '@/ui/CircleButton';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Box, ButtonBase, Grid, Stack, ToggleButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Close } from '@mui/icons-material';
import { TimeIcon } from '@/assets/icons/TimeIcon.jsx';
import { tabs } from './data/tabs.js';
import { Tabs } from '@/ui/Tabs/index.js';
import { Datepicker } from '@/ui/Datepicker/index.js';
import { Filters } from '@/ui/Filters/index.js';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { DefaultSelect } from '@/ui/DefaultSelect/index.js';
import { DefaultButton } from '@/ui/DefaultButton/index.js';
import { Popup } from '@/components/Popup/index.js';
import { DefaultInput } from '@/ui/DefaultInput/index.js';
import { SensorIcon } from '@/assets/icons/SensorIcon.jsx';
import { DefaultToggle } from '@/ui/DefaultToggle/DefaultToggle.jsx';

export const MachinesNew = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tabs[0].value);
    const [isActivityDetailsOpen, setIsActivityDetailsOpen] = useState(false);

    const rows = useMemo(() => {
        const resArr = [
            {
                id: 1,
                shift: {
                    text: '-- --',
                    isRed: isActivityDetailsOpen,
                },
                total: '-- --',
                uptime: '-- --',
                downtime: '-- --',
                efficiency: '-- --',
                uptimePercentage: 0,
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
                    text: '-- --',
                    isRed: isActivityDetailsOpen,
                },
                total: '-- --',
                uptime: '-- --',
                downtime: '-- --',
                efficiency: '-- --',
                uptimePercentage: 0,
                callback: {
                    onClick: () => setIsActivityDetailsOpen(true),
                    isArrow: !isActivityDetailsOpen,
                },
            });
            resArr.push({
                id: 3,
                shift: {
                    text: '-- --',
                    isRed: isActivityDetailsOpen,
                },
                total: '-- --',
                uptime: '-- --',
                downtime: '-- --',
                efficiency: '-- --',
                uptimePercentage: 0,
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

    const onClose = () => {
        navigate('/machines');
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

    return (
        <Stack
            p={2.5}
            width={'100%'}
            sx={{
                '*': {
                    pointerEvents: 'none',
                },
            }}
        >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mb={1} spacing={2}>
                <Typography fontSize={20}>Name</Typography>
                <CircleButton icon={<Close />} onClick={() => navigate('/machines')} />
            </Stack>
            <Stack direction={'row'} spacing={4} alignItems={'baseline'} mb={2}>
                <Typography width={'50%'} fontSize={40} fontWeight={700}>
                    -- --
                </Typography>
                <Stack direction={'row'} alignItems={'baseline'} spacing={10}>
                    <Box width={'1px'} height={40} bgcolor={'grey.light'} flexShrink={0} />
                    <Typography fontSize={25}>-- --</Typography>
                    <Box width={'1px'} height={40} bgcolor={'grey.light'} flexShrink={0} />
                    <Typography fontSize={25}>-- --</Typography>
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
                <Popup
                    sx={{
                        pointerEvents: 'all',
                        '*': {
                            pointerEvents: 'all',
                        },
                    }}
                    isOpened={true}
                    width={700}
                    bgcolor={'common.white'}
                >
                    <Stack px={3} pt={3} pb={2} spacing={2} height={'100%'}>
                        <Typography fontSize={20}>Machine Entry</Typography>
                        <Box flexGrow={1}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Machine Type'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Manufacturer'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultInput label={'Model'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultInput label={'Machine Name'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultInput label={'Serial ID'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Work Center'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultSelect helperText={'Sensor Manufacturer'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <DefaultInput label={'Sensor Model'} />
                                </Grid>
                                <Grid item xs={4}>
                                    <Box
                                        position={'relative'}
                                        sx={{
                                            svg: {
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                            },
                                        }}
                                    >
                                        <DefaultSelect helperText={'Sensor ID'} />
                                        <SensorIcon />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Stack direction={'row'} spacing={1} alignItems={'flex-end'}>
                            <Box flexGrow={1}>
                                <Stack
                                    spacing={1}
                                    pl={2}
                                    pr={6}
                                    pt={1}
                                    borderRadius={'5px'}
                                    bgcolor={'blue.light'}
                                    display={'inline-flex'}
                                >
                                    <Typography>Machine Offline Mode</Typography>
                                    <Stack direction={'row'} alignItems={'center'}>
                                        <DefaultToggle />
                                        <Typography>Deactivated</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                            <DefaultButton onClick={onClose}>Cancel</DefaultButton>
                            <DefaultButton color={'success'} onClick={onClose}>
                                Save
                            </DefaultButton>
                        </Stack>
                    </Stack>
                </Popup>
                {isFirstTab && !isActivityDetailsOpen && (
                    <>
                        <Box p={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Manufacturer</Typography>
                                        <Typography>-- --</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Model</Typography>
                                        <Typography>-- --</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Serial Number</Typography>
                                        <Typography>-- --</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={1.5}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Work Center</Typography>
                                        <Typography>-- --</Typography>
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
                                        <Typography>-- --</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                    <Stack spacing={1}>
                                        <Typography color={'#A8A8A7'}>Site Location</Typography>
                                        <Typography>-- --</Typography>
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
            </Stack>
        </Stack>
    );
};
