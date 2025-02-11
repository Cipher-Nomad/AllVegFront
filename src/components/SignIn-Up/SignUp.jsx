import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import logo from '../../assets/logo-rectv2.svg';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '1000px',
    background: '#f3feef',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    padding: 20,
    marginTop: '10vh',
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function SignUp(props) {
    const [fullnameError, setFullnameError] = React.useState(false);
    const [fullnameErrorMessage, setFullnameErrorMessage] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            fullname: data.get('fullname'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validateInputs = () => {
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        if (!fullname.value || !/^[a-zA-Z]+(?:['-]?[a-zA-Z]+)*(?: [a-zA-Z]+(?:['-]?[a-zA-Z]+)*)*$/.test(fullname.value)) {
            setFullnameError(true);
            setFullnameErrorMessage('Please enter a valid Full Name.');
            isValid = false;
        }
        else {
            setFullnameError(false);
            setFullnameErrorMessage('');
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
                <Card variant="outlined">
                    <div>
                        <img width="400px" src={logo}></img>
                    </div>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', color: '#527a32' }}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel color='#527a32' sx={{ display: 'flex', justifyContent: 'space-between' }} htmlFor="fullname">Full Name</FormLabel>
                            <TextField
                                error={fullnameError}
                                helperText={fullnameErrorMessage}
                                id="fullname"
                                type="text"
                                name="fullname"
                                placeholder="John Doe"
                                autoComplete="fullname"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={fullnameError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'fullname' }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel color='#527a32' sx={{ display: 'flex', justifyContent: 'space-between' }} htmlFor="email">Email</FormLabel>
                            <TextField
                                error={emailError}
                                helperText={emailErrorMessage}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={emailError ? 'error' : 'primary'}
                                sx={{ ariaLabel: 'email' }}
                            />
                        </FormControl>
                        <FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormLabel sx={{ color: '#527a32' }} htmlFor="password">Password</FormLabel>
                                <Link
                                    component="button"
                                    onClick={handleClickOpen}
                                    variant="body2"
                                    color='#527a32'
                                    sx={{ alignSelf: 'baseline' }}
                                >
                                    Forgot your password?
                                </Link>
                            </Box>
                            <TextField
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                color={passwordError ? 'error' : 'primary'}
                            />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" sx={{ color: '#527a32' }} />}
                            label="Remember me"
                        />
                        <ForgotPassword open={open} handleClose={handleClose} />
                        <Button
                            type="submit"
                            fullWidth
                            sx={{ background: '#527a32', border: 'none' }}
                            variant="contained"
                            onClick={validateInputs}
                        >
                            Sign up
                        </Button>
                        <Typography sx={{ textAlign: 'center', color: '#527a32' }}>
                            Already have an account?{' '}
                            <span>
                                <Link
                                    href="/material-ui/getting-started/templates/sign-in/"
                                    variant="body2"
                                    sx={{ alignSelf: 'center', color: '#527a32' }}
                                >
                                    Sign in
                                </Link>
                            </span>
                        </Typography>
                    </Box>
                    <Divider>or</Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Sign up with Google
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign in with Facebook')}
                            startIcon={<FacebookIcon />}
                        >
                            Sign up with Facebook
                        </Button>
                    </Box>
                </Card>
            </SignInContainer>
        </AppTheme>
    );
}