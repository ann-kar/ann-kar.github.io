import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#05f953',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        secondary: {
            main: '#b5ecfb',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        error: {
            main: '#404040',
        },
        greys: {
            grey100: '#fafafa',
            grey200: '#c3c3c3',
            grey300: '#999999',
            grey400: '#5b5b5b',
            grey500: '#333333',
        },

    },
    spacing: [0, 8, 16, 32, 64, 128],
    typography: {
        fontFamily: 'Lato',
        h1: {
            fontSize: '7.5rem',
            fontWeight: 700,
            letterSpacing: 1.5
        },
        h2: {
            fontSize: '2.2rem',
            fontWeight: 700,
            letterSpacing: 1.5
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 300,
        }
    }
});

theme = createTheme(theme, {
    components: {
        MuiCard: {
            defaultProps: {
                elevation: 3
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    margin: theme.spacing(0),
                },
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    fontSize: theme.typography.h2,
                    margin: theme.spacing(0),
                },
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: theme.palette.greys.grey300,
                }
            }
        }
    }
});

export default theme;