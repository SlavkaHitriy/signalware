import { Stack, Typography } from '@mui/material';

export const PageTitle = ({ icon, children }) => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={2}
            px={1.5}
            py={1}
            maxWidth={250}
            width={'100%'}
            bgcolor={'grey.200'}
            borderRadius={'5px'}
        >
            <Stack
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                    svg: {
                        width: 24,
                        height: 24,
                    },
                }}
            >
                {icon}
            </Stack>
            <Typography fontWeight={700} fontSize={20}>
                {children}
            </Typography>
        </Stack>
    );
};
