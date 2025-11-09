'use client';

import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Professional styled component with subtle brand accent
const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: theme.palette.mode === 'dark' ? '#f1f5f9' : '#1e293b',
  position: 'relative',
  display: 'inline-block',

  // Subtle brand accent underline
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
    opacity: 0.4,
    borderRadius: '1px',
    transition: 'opacity 0.3s ease',
  },

  // Enhance underline on hover
  '&:hover::after': {
    opacity: 0.7,
  },
}));

interface UniversalOpportunitiesTextProps
  extends Omit<TypographyProps, 'children'> {
  /**
   * Show the brand accent underline
   * @default true
   */
  showAccent?: boolean;
  /**
   * Custom brand color (primary)
   * @default '#2563eb'
   */
  accentColor?: string;
}

/**
 * Reusable Universal Opportunities text component with professional styling
 *
 * Features:
 * - Clean, professional typography optimized for corporate branding
 * - Subtle brand accent underline with gradient (removable)
 * - Fully compositable with standard Typography props
 * - Accessible and performant
 * - Consistent with Universal Opportunities design system
 */
export default function UniversalOpportunitiesText({
  showAccent = true,
  accentColor = '#2563eb',
  sx = {},
  ...props
}: UniversalOpportunitiesTextProps) {
  const customSx = {
    // Hide accent if disabled
    ...(!showAccent && {
      '&::after': {
        display: 'none',
      },
    }),
    // Custom accent color if provided
    ...(accentColor !== '#2563eb' && {
      '&::after': {
        background: accentColor,
      },
    }),
    // Apply user sx last to allow overrides
    ...sx,
  };

  return (
    <StyledText sx={customSx} {...props}>
      Universal Opportunities
    </StyledText>
  );
}
