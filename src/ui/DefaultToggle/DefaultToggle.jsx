import { Switch } from '@mui/material';

export const DefaultToggle = ({ defaultChecked }) => {
    return (
        <Switch
            sx={{
                alignItems: 'center',
                ml: 2,
                '.MuiSwitch-thumb': {
                    backgroundColor: '#707070',
                    width: 12,
                    height: 12,
                },
                '.Mui-checked .MuiSwitch-thumb': {
                    backgroundColor: 'green.main',
                },
                '& .Mui-checked+.MuiSwitch-track, .MuiSwitch-track': {
                    backgroundColor: '#EAEBEA !important',
                    boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 16%)',
                    height: 12,
                    width: 24,
                },
                '.MuiSwitch-switchBase': {
                    top: '4px',
                },
            }}
            defaultChecked={defaultChecked}
        />
    );
};
