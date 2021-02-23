import { ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import React from 'react';
import './theme.scss';

const theme = createMuiTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E74C3C'
    },
    secondary: {
      main: '#FFB74D'
    },
    background: {
      default: '#18191b',
      paper: '#242527'
    },
    error: {
      main: '#f48536'
    }
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'Open Sans',
      'sans-serif',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial'
    ].join(',')
  },
  shape: {
    borderRadius: 6
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.95rem',
          textTransform: 'initial',
          padding: '6px 16px'
          // borderRadius: '30px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: '3rem'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        variant: 'outlined'
      }
    },
    MuiDrawer: {
      styleOverrides: {
        // Name of the slot
        paper: {
          padding: '0',
          borderRadius: '0',
          width: 'inherit'
        },
        paperAnchorDockedLeft: {
          borderRight: 'none',
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
        }
      }
    }
  }
});

export function Theme({ children }: React.PropsWithChildren<React.ReactNode>) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}