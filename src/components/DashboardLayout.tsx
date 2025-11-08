'use client';

import React from 'react';
import { Box, useTheme, useMediaQuery, Toolbar } from '@mui/material';
import Navigation from './Navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

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
