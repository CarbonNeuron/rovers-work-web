'use client';

import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

// Animated gradient wave keyframes
const gradientWave = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Styled component with animated gradient
const AnimatedGradientText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  // Default text color first, then gradient overlay
  color: theme.palette.mode === 'dark' ? '#f1f5f9' : '#1e293b',
  background: 'linear-gradient(45deg, #2563eb, #10b981, #2563eb)',
  backgroundSize: '200% 100%',
  animation: `${gradientWave} 4s ease-in-out infinite`,

  // Apply gradient text only if supported
  '@supports (background-clip: text)': {
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  },
}));

interface UniversalOpportunitiesTextProps
  extends Omit<TypographyProps, 'children'> {
  /**
   * Animation speed multiplier
   * @default 1
   */
  speed?: number;
  /**
   * Whether to pause animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Custom gradient colors
   * @default ['#2563eb', '#10b981']
   */
  colors?: [string, string];
}

/**
 * Reusable Universal Opportunities text component with animated gradient wave effect
 *
 * Features:
 * - Smooth animated gradient wave that cycles through corporate colors
 * - Customizable speed and colors
 * - Fallback styling for unsupported browsers
 * - Maintains accessibility and typography props
 * - Optimized performance with CSS animations
 */
export default function UniversalOpportunitiesText({
  speed = 1,
  pauseOnHover = false,
  colors = ['#2563eb', '#10b981'],
  sx = {},
  ...props
}: UniversalOpportunitiesTextProps) {
  const [primaryColor, secondaryColor] = colors;

  const customSx = {
    animationDuration: `${4 / speed}s`,
    // Only override gradient if custom colors are provided
    ...((primaryColor !== '#2563eb' || secondaryColor !== '#10b981') && {
      background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
      backgroundSize: '200% 100%',
    }),
    ...(pauseOnHover && {
      '&:hover': {
        animationPlayState: 'paused',
      },
    }),
    // Apply user sx last to allow overrides
    ...sx,
  };

  return (
    <AnimatedGradientText sx={customSx} {...props}>
      Universal Opportunities
    </AnimatedGradientText>
  );
}
