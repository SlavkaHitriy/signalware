import { Stack } from '@mui/material';
import { DefaultInput } from '@/ui/DefaultInput';
import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { Search } from '@mui/icons-material';

export const SearchInput = ({ sx }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Stack
            direction={'row'}
            sx={{
                bgcolor: 'blue.light',
                borderRadius: '5px',
                minWidth: '295px',
                overflow: 'hidden',
                ...sx,
            }}
            component={'form'}
            onSubmit={handleSubmit}
        >
            <DefaultIconButton
                icon={<Search />}
                type='submit'
                size={'100%'}
                sx={{
                    width: 45,
                    borderRadius: 0,
                    backgroundColor: '#f8f8fa',
                    color: 'primary.main',

                    '&:hover': {
                        backgroundColor: '#f8f8fa',
                    },
                }}
            />
            <DefaultInput
                placeholder={'Search'}
                sx={{
                    width: '100%',
                    '.MuiInputBase-root::before': {
                        display: 'none',
                    },
                    '.MuiInputBase-root': {
                        height: '45px',
                        px: 2,
                    },
                    '.MuiInputBase-input': {
                        '&::placeholder': {
                            opacity: 1,
                        },
                    },
                }}
            />
        </Stack>
    );
};
