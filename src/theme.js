import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#05f953',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        secondary: {
            main: amber[400],
            light: amber[100],
            dark: amber[700],
        },
        error: {
            main: '#404040',
        },
        greys: {
            grey50: grey[50],
            grey100: grey[100],
            grey200: grey[200],
            grey300: grey[300],
            grey400: grey[500],
            grey500: grey[700],
            grey600: grey[900],
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
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: 1.5
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: 400,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 300,
        },
        body: {
            fontSize: '1rem',
            lineHeight: '1.5rem'
        }
    }
});

theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(2),
                    marginBottom: theme.spacing(2)
                }
            }
        },
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
                    color: theme.palette.warning.main,
                    margin: theme.spacing(0),
                },
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    filter: 'grayscale(80%)',
                    "&:hover": {
                        filter: 'none'
                    },

                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    margin: theme.spacing(1),
                    marginLeft: theme.spacing(0),
                    marginRight: theme.spacing(2),
                    height: '1.4rem',
                    background: theme.palette.greys.grey50,
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.palette.greys.grey200,
                    borderTop: 'none',
                    borderBottom: 'none',
                    "& .MuiChip-label": {
                        fontSize: '1rem',
                        lineHeight: '1.3rem',
                        color: theme.palette.greys.grey500,
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    color: theme.palette.greys.grey400,
                }
            }
        }
    }
});

export default theme;