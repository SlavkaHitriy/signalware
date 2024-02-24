import ClusterIcon from '/public/icons/cluster.svg?react';

export const metrics1 = [
    {
        title: 'Total Footage',
        value: '10,000',
    },
    {
        title: 'Total Joints',
        value: '3,000',
    },
    {
        title: 'Tonnage',
        value: '29.35',
    },
];

export const metrics2 = [
    {
        title: 'Health Score',
        value: '82%',
        hasIndicator: true,
    },
    {
        title: 'Utilization',
        value: '60%',
        icon: <ClusterIcon />,
    },
    {
        title: 'Last 30 Days',
        value: '+50%',
        isGreen: true,
    },
];
