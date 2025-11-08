'use client';

import { createTheme } from '@mui/material/styles';
import { LinkProps } from '@mui/material';
import { LinkBehavior } from '@/components/LinkBehavior';

declare module '@mui/material/styles' {
  interface Palette {
    uo: {
      primary: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      warning: string;
      danger: string;
    };
  }

  interface PaletteOptions {
    uo?: {
      primary?: string;
      primaryDark?: string;
      secondary?: string;
      accent?: string;
      warning?: string;
      danger?: string;
    };
  }
}

// Universal Opportunities Corporate Colors
const uoColors = {
  primary: '#2563eb', // Professional blue
  primaryDark: '#1d4ed8', // Darker blue for interactions
  secondary: '#64748b', // Corporate gray
  accent: '#10b981', // Success/profit green
  warning: '#f59e0b', // Alert/caution amber
  danger: '#ef4444', // Error/critical red
};

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: uoColors.primary,
          dark: uoColors.primaryDark,
          contrastText: '#ffffff',
        },
        secondary: {
          main: uoColors.secondary,
        },
        success: {
          main: uoColors.accent,
        },
        warning: {
          main: uoColors.warning,
        },
        error: {
          main: uoColors.danger,
        },
        background: {
          default: '#fafbfc',
          paper: '#ffffff',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
        },
        divider: '#e2e8f0',
        uo: uoColors,
      },
    },
    dark: {
      palette: {
        primary: {
          main: uoColors.primary,
          dark: uoColors.primaryDark,
          contrastText: '#ffffff',
        },
        secondary: {
          main: uoColors.secondary,
        },
        success: {
          main: uoColors.accent,
        },
        warning: {
          main: uoColors.warning,
        },
        error: {
          main: uoColors.danger,
        },
        background: {
          default: '#0f172a',
          paper: '#1e293b',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
        },
        divider: '#334155',
        uo: uoColors,
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif, var(--font-noto-emoji), "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        color: 'inherit',
        underline: 'none',
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          ...theme.applyStyles('dark', {
            backgroundColor: '#020617',
            color: '#e2e8f0',
          }),
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          borderRight: '1px solid #334155',
          ...theme.applyStyles('dark', {
            backgroundColor: '#020617',
            color: '#e2e8f0',
            borderRight: '1px solid #475569',
          }),
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          // Smooth transitions for all interactive states
          transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          
          // Default state
          backgroundColor: 'transparent',
          borderLeft: '3px solid transparent',
          
          // Hover state with gentle fade-in
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            transform: 'translateX(2px)',
            ...theme.applyStyles('dark', {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }),
          },
          
          // Selected state with rich color fade-in
          '&.Mui-selected': {
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            borderLeft: '3px solid #2563eb',
            transform: 'translateX(4px)',
            
            // Add a subtle glow effect
            boxShadow: 'inset 0 0 20px rgba(37, 99, 235, 0.1)',
            
            // Selected + hover combination
            '&:hover': {
              backgroundColor: 'rgba(37, 99, 235, 0.25)',
              transform: 'translateX(6px)',
              boxShadow: 'inset 0 0 25px rgba(37, 99, 235, 0.15)',
            },
            
            // Animate the border color as well
            borderLeftColor: '#2563eb',
            
            // Enhanced text color for selected items
            '& .MuiListItemText-primary': {
              color: '#ffffff !important',
              fontWeight: '600 !important',
            },
            
            '& .MuiListItemText-secondary': {
              color: 'rgba(255, 255, 255, 0.8) !important',
            },
            
            '& .MuiListItemIcon-root': {
              color: '#ffffff !important',
            },
          },
          
          // Focus state for accessibility
          '&.Mui-focusVisible': {
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            outline: '2px solid rgba(37, 99, 235, 0.5)',
            outlineOffset: '-2px',
          },
        }),
      },
    },
  },
});
