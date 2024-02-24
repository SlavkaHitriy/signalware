import { Stack } from '@mui/material';
import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { Tune } from '@mui/icons-material';
import { DefaultSelect } from '@/ui/DefaultSelect';

export const Filters = ({ icon, fixValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Stack
            direction={'row'}
            sx={{
                bgcolor: 'blue.light',
                borderRadius: '5px',
                maxWidth: '300px',
                width: '100%',
                overflow: 'hidden',
                alignItems: 'center',
                height: fixValue ? '40px' : 'auto',
            }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <DefaultIconButton
                icon={icon || <Tune />}
                type='submit'
                size={'100%'}
                sx={{
                    width: '45px',
                    borderRadius: 0,
                    position: 'relative',
                    color: 'primary.main',
                }}
            />
            <DefaultSelect
                label={fixValue}
                sx={{
                    pointerEvents: fixValue ? 'none' : 'auto',
                    minWidth: 'unset',
                    width: '100%',
                    '.MuiInputBase-root::before': {
                        display: 'none',
                    },
                    '.MuiInputBase-root': {
                        height: '45px',
                    },
                    '.MuiInputBase-input': {
                        px: 2,
                        '&::placeholder': {
                            fontWeight: 700,
                        },
                    },
                    '.MuiSvgIcon-root': {
                        display: 'none',
                    },
                    '.MuiSelect-icon': {
                        display: 'none',
                    },
                }}
            />
        </Stack>
    );
};
