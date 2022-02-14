import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

let theme = createTheme({
    breakpoints: {
        'sm': 600,
        'md': 768,
        'lg': 1050,
    },
    palette: {
        type: 'light',
        primary: {
            main: 'rgb(255, 155, 155, 0.3)',
            light: '#61dafb',
            dark: '#fff',
        },
        secondary: {
            main: amber[100],
            light: amber[50],
            dark: amber[600],
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
            fontSize: '5.5rem',
            fontWeight: 600,
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
            fontWeight: 500,
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
                    marginLeft: theme.spacing(1),
                    marginRight: theme.spacing(1),
                    marginBottom: theme.spacing(3)
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    padding: theme.spacing(1),
                    margin: theme.spacing(0),
                },
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: amber[600],
                    margin: theme.spacing(0),
                },
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    filter: 'grayscale(100%) brightness(1.15)',
                    "&:hover": {
                        filter: 'brightness(1.15)'
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
        MuiContainer: {
            defaultProps: {
                root: {
                    [theme.breakpoints.down('md')]: {
                        maxwidth: '100%',
                    },
                    [theme.breakpoints.up('md')]: {
                        maxwidth: '80%',
                    }
                }
            }

        },
        MuiDivider: {
            defaultProps: {
                orientation: 'vertical',
                variant: 'middle'
            },
            styleOverrides: {
                root: {
                    borderColor: '#fff',
                    opacity: 0.9
                }
            }
        },
        MuiLink: {
            defaultProps: {
                color: 'inherit'
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    color: theme.palette.greys.grey500,
                    color: "#fff"
                }
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    "&.MuiBox-root": {
                        marginBottom: 0,
                    }
                }
            }
        }
    }
});

export default theme;