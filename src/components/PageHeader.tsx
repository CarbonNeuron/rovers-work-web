import React from 'react';
import { Typography, Box } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

/**
 * Reusable page header component with consistent styling across all dashboard pages.
 * Provides responsive typography and layout for page titles and subtitles.
 */
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
