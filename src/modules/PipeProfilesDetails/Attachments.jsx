import { columns, rows } from './data/attachments';
import { DefaultDataGrid } from '@/ui/DefaultDataGrid';
import { Box } from '@mui/material';

export const Attachments = ({ disabled }) => {
    return (
        <>
            <Box
                flex={1}
                sx={{
                    pointerEvents: disabled && 'none',
                }}
            >
                <DefaultDataGrid columns={columns} rows={rows} defaultSize={15} />
            </Box>
        </>
    );
};
