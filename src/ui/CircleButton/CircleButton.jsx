import { DefaultIconButton } from '@/ui/DefaultIconButton';
import { Add } from '@mui/icons-material';

export const CircleButton = ({ sx, icon, ...props }) => {
    return (
        <DefaultIconButton
            sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                width: props.size || 40,
                height: props.size || 40,
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
                flexShrink: 0,
                ...sx,
            }}
            icon={icon || <Add />}
            {...props}
        />
    );
};
