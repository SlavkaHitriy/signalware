import { Title } from '@/ui/Title';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import showPasswordIcon from '/icons/show-password.svg';
import hidePasswordIcon from '/icons/hide-password.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} bgcolor={'grey.300'} py={10} px={4} width={'100%'}>
            <Stack alignItems={'center'} justifyContent={'center'} maxWidth={350} mx={'auto'}>
                <Box width={340} height={70} src={'/assets/logo.svg'} component={'img'} mb={1.5} />
                <Typography mb={6}>Machine Monitoring Platform</Typography>
                <Title mb={2}>Sign In</Title>
                <Typography mb={3}>Hi! Welcome back, lets get to work.</Typography>
                <Box component={'form'} onSubmit={handleSubmit} width={'100%'}>
                    <Stack spacing={1.5} width={'100%'}>
                        <Stack direction={'column'} width={'100%'}>
                            <Typography mb={1.5} color={'grey.blue'}>
                                Email
                            </Typography>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-input': {
                                        padding: '17px 25px',
                                        borderRadius: '10px',
                                        background: 'white',
                                        border: '1px solid #E1E3E8',
                                    },
                                }}
                                type={'email'}
                                placeholder='example@oilservices.com'
                            />
                        </Stack>
                        <Stack direction={'column'} width={'100%'}>
                            <Typography mb={1.5} color={'grey.blue'}>
                                Password
                            </Typography>
                            <Box position={'relative'}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '30px',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        zIndex: 1,
                                        width: '24px',
                                        height: '24px',
                                        objectFit: 'contain',
                                    }}
                                    component={'img'}
                                    src={showPassword ? hidePasswordIcon : showPasswordIcon}
                                    onClick={() => setShowPassword((prevState) => !prevState)}
                                />
                                <TextField
                                    sx={{
                                        '& .MuiInputBase-input': {
                                            lineHeight: '5',
                                            padding: '17px 60px 17px 25px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            border: '1px solid #E1E3E8',
                                            '&::placeholder': {
                                                position: 'absolute',
                                                top: '50%',
                                                transform: 'translateY(calc(-50% + 2px))',
                                            },
                                        },
                                    }}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='*************************'
                                />
                            </Box>
                        </Stack>
                        <Link to={'/forgot-password'}>
                            <Typography
                                sx={{
                                    color: 'grey.blue',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    textAlign: 'right',
                                    '&:hover': {
                                        textDecoration: 'none',
                                    },
                                }}
                            >
                                Forgot Password?
                            </Typography>
                        </Link>
                        <Button
                            sx={{
                                fontSize: 20,
                                py: 1.2,
                                borderRadius: '30px',
                                maxWidth: 300,
                                width: '100%',
                                alignSelf: 'center',
                                bgcolor: 'secondary.main',
                                textTransform: 'capitalize',
                                '&:hover': {
                                    bgcolor: 'secondary.dark',
                                }
                            }}
                            type={'submit'}
                        >
                            Sign In
                        </Button>
                    </Stack>
                </Box>
                <Stack width='100%' justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={1} my={4}>
                    <Box
                        sx={{
                            height: '1px',
                            width: '20%',
                            bgcolor: 'grey.light',
                        }}
                    />
                    <Typography
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Don’t have an account?
                    </Typography>
                    <Box
                        sx={{
                            height: '1px',
                            width: '20%',
                            bgcolor: 'grey.light',
                        }}
                    />
                </Stack>
                <Link to={'/'}>
                    <Typography
                        sx={{
                            textDecoration: 'underline',
                            fontSize: 20,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        }}
                    >
                        Request Access
                    </Typography>
                </Link>
                <Stack spacing={1.5} mt={4}>
                    <Typography>Version 2.0.00</Typography>
                    <Typography>SIGNALWARE</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};
