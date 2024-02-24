import ClusterIcon from '/public/icons/cluster.svg?react';

export const metrics1 = [
    {
        title: 'Total Footage',
        value: '-- --',
    },
    {
        title: 'Total Joints',
        value: '-- --',
    },
    {
        title: 'Tonnage',
        value: '-- --',
    },
];

export const metrics2 = [
    {
        title: 'Health Score',
        value: '-- --',
        hasIndicator: true,
    },
    {
        title: 'Utilization',
        value: '-- --',
        icon: <ClusterIcon />,
    },
    {
        title: 'Last 30 Days',
        value: '-- --',
        isGreen: true,
    },
];
