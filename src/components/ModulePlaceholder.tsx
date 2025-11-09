import React from 'react';
import { Paper, Typography } from '@mui/material';
import FeatureList, { FeatureItem } from './FeatureList';

interface ModulePlaceholderProps {
  emoji: string;
  moduleName: string;
  features: FeatureItem[];
}

/**
 * Reusable module placeholder component for "coming soon" dashboard sections.
 * Displays a centered paper with module information and feature list.
 */
export default function ModulePlaceholder({
  emoji,
  moduleName,
  features,
}: ModulePlaceholderProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: { xs: 3, sm: 4, md: 6 },
        textAlign: 'center',
        border: '2px dashed',
        borderColor: 'divider',
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem' },
        }}
      >
        {emoji} {moduleName}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontSize: { xs: '0.875rem', sm: '1rem' },
        }}
      >
        This will contain:
      </Typography>
      <FeatureList features={features} />
    </Paper>
  );
}
