import { SearchInput } from '@/components/SearchInput';
import { columns, rows } from './data/joints';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Filters } from '@/ui/Filters';
import { Box, Grid, Stack, Typography } from '@mui/material';

export const Details = ({ disabled }) => {
    return (
        <Stack
            sx={{
                pointerEvents: disabled && 'none',
            }}
            height={'100%'}
        >
            <Box p={2}>
                <Grid container spacing={4}>
                    <Grid item xs={1.5}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>End User</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>Type</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>Purchase Order</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>Site Location</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={1}>
                            <Typography color={'#A8A8A7'}>Pipe Name</Typography>
                            <Typography fontWeight={700}>-- --</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={2}>
                        <Stack alignItems={'flex-end'}>
                            <Box
                                sx={{
                                    '*': {
                                        pointerEvents: 'none',
                                    },
                                }}
                            >
                                <Filters />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={4.5}>
                        <Stack spacing={2} direction={'row'}>
                            <SearchInput
                                sx={{
                                    width: '100%',
                                }}
                            />
                            <Box>
                                <Filters />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Typography color={'#A8A8A7'}>Updated:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>-- --</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box flex={1}>
                <DefaultDataGrid columns={columns} rows={rows} onRowClick={() => {}} />
            </Box>
        </Stack>
    );
};
