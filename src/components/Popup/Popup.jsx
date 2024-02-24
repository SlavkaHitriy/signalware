import { Box } from '@mui/material';

export const Popup = ({ isOpened, sx, children, ...props }) => {
    return (
        isOpened && (
            <Box
                sx={{
                    position: 'absolute',
                    height: '100%',
                    zIndex: 100,
                    border: '2px dashed',
                    borderColor: 'green.main',
                    borderRadius: '5px',
                    overflowY: 'auto',
                    maxHeight: '800px',
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        width: '4px',
                        bgcolor: 'grey.400',
                    },
                    ...sx,
                }}
                {...props}
            >
                {children}
            </Box>
        )
    );
};
