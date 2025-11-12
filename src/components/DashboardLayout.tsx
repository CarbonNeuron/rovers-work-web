'use client';

import React from 'react';
import { Box, useTheme, useMediaQuery, Toolbar } from '@mui/material';
import Navigation from './Navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  // Fix scroll issue: MUI Drawer can leave overflow:hidden on body when navigating
  // Use a MutationObserver to watch for and immediately fix any overflow changes
  React.useEffect(() => {
    // Initial cleanup
    if (document.body.style.overflow === 'hidden') {
      document.body.style.removeProperty('overflow');
    }

    // Set up observer to watch for style changes on body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          // If body overflow is set to hidden, remove it
          if (document.body.style.overflow === 'hidden') {
            document.body.style.removeProperty('overflow');
          }
        }
      });
    });

    // Start observing the body element for style attribute changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => {
      observer.disconnect();
      // Final cleanup on unmount
      if (document.body.style.overflow === 'hidden') {
        document.body.style.removeProperty('overflow');
      }
    };
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          bgcolor: 'background.default',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '1200px' }}>
          {/* Add toolbar spacing for mobile */}
          <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
