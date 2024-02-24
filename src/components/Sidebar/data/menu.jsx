import ClusterIcon from '/public/icons/cluster.svg?react';
import { MapViewIcon } from '@/assets/icons/MapViewIcon';
import { SettingsIcon } from '@/assets/icons/SettingsIcon';
import { PipeProfilesIcon } from '@/assets/icons/PipeProfilesIcon.jsx';
import { DowntimeCodesIcon } from '@/assets/icons/DowntimeCodesIcon.jsx';

export const mainMenu = [
    {
        title: 'Dashboard',
        link: '/dashboard',
        icon: <ClusterIcon />,
    },
    {
        title: 'Machines',
        link: '/machines',
        icon: <PipeProfilesIcon />,
    },
    {
        title: 'Map View',
        link: '/map-view',
        icon: <MapViewIcon />,
    },
    {
        title: 'Downtime Codes',
        link: '/downtime-codes',
        icon: <DowntimeCodesIcon />,
    },
];

export const systemMenu = [
    {
        title: 'Settings',
        link: '/settings',
        icon: <SettingsIcon />,
    },
];
