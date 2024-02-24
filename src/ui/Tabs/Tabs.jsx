import { Box, Stack, Typography } from '@mui/material';

export const Tabs = ({ data, activeTab, setActiveTab }) => {
    return (
        <Stack direction={'row'} spacing={'1px'} mb={'-10px'}>
            {data?.map((item, idx) => {
                const isActive = item.value === activeTab;

                return (
                    <Stack
                        bgcolor={isActive ? 'primary.main' : '#EFEFEF'}
                        pt={1}
                        pb={2}
                        px={5}
                        borderRadius={'5px'}
                        sx={{
                            cursor: 'pointer',
                        }}
                        key={idx}
                        position={'relative'}
                        onClick={() => setActiveTab(item.value)}
                    >
                        <Typography fontWeight={isActive ? 700 : 400} color={isActive ? 'common.white' : 'primary.main'}>
                            {item.title}
                        </Typography>
                        {isActive && (
                            <Box
                                width={16}
                                height={16}
                                borderRadius={'50%'}
                                border={'2px solid'}
                                borderColor={'common.white'}
                                position={'absolute'}
                                top={11}
                                right={12}
                            />
                        )}
                    </Stack>
                );
            })}
        </Stack>
    );
};
