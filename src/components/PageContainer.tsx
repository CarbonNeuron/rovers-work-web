import React from 'react';
import { Container } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Reusable page container component with consistent padding across all dashboard pages.
 */
export default function PageContainer({
  children,
  maxWidth = false,
}: PageContainerProps) {
  return (
    <Container maxWidth={maxWidth} sx={{ py: { xs: 2, sm: 4 } }}>
      {children}
    </Container>
  );
}
