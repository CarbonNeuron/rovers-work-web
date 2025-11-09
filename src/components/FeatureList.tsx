import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export interface FeatureItem {
  icon: React.ReactElement;
  text: string;
}

interface FeatureListProps {
  features: FeatureItem[];
}

/**
 * Reusable feature list component with consistent styling for feature items with icons.
 * Used across dashboard pages to display module features and capabilities.
 */
export default function FeatureList({ features }: FeatureListProps) {
  return (
    <List
      sx={{
        maxWidth: 600,
        mx: 'auto',
        textAlign: 'left',
        px: { xs: 0, sm: 2 },
      }}
    >
      {features.map((feature, index) => (
        <ListItem key={index} sx={{ px: { xs: 1, sm: 2 } }}>
          <ListItemIcon>{feature.icon}</ListItemIcon>
          <ListItemText
            primary={feature.text}
            primaryTypographyProps={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
