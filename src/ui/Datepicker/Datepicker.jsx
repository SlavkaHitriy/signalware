import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const Datepicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                sx={{
                    borderRadius: '5px',
                    backgroundColor: '#F5F7FB',
                    '.MuiOutlinedInput-input': {
                        p: '0 20px',
                        height: '45px',
                        order: 2,
                    },
                    '.MuiInputBase-root': {
                        pr: 0,
                    },
                    '.MuiInputAdornment-root': {
                        ml: 0,
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                        p: '0',
                    },
                    '.MuiIconButton-root': {
                        width: '65px',
                        mr: '0',
                        borderRadius: '5px',
                        height: '45px',
                        '&::after': {
                            content: "''",
                            position: 'absolute',
                            height: 25,
                            width: '1px',
                            backgroundColor: 'grey.light',
                            right: 0,
                        },
                    },
                }}
                defaultValue={dayjs('2022-04-17')}
            />
        </LocalizationProvider>
    );
};
