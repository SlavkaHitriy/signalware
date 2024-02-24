import { Popup } from '@/components/Popup/index.js';
import { Stack, TextField, Typography } from '@mui/material';
import { DefaultButton } from '@/ui/DefaultButton/index.js';

export const Notes = ({ onClose }) => {
    return (
        <Popup isOpened={true} bgcolor={'common.white'} width={700} left={160} p={3}>
            <Stack height={'100%'} spacing={2}>
                <Typography fontSize={20}>Notes</Typography>
                <TextField
                    multiline={true}
                    sx={{
                        flexGrow: 1,
                        border: '1px solid',
                        borderColor: 'grey.light',
                        '.MuiInputBase-root': {
                            height: '100%',
                        },
                        '.MuiInputBase-input': {
                            height: '100% !important',
                            overflowY: 'auto !important',
                            '&::-webkit-scrollbar': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                width: '4px',
                                bgcolor: 'grey.400',
                            },
                        },
                    }}
                />
                <Stack direction={'row'} justifyContent={'flex-end'} spacing={1}>
                    <DefaultButton onClick={onClose}>Cancel</DefaultButton>
                    <DefaultButton color={'success'} onClick={onClose}>
                        Save
                    </DefaultButton>
                </Stack>
            </Stack>
        </Popup>
    );
};
