'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import {
  Preview as PreviewIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';
import Loading from '@/app/loading';

export default function LoadingTestPage() {
  const [showLoading, setShowLoading] = React.useState(false);

  const handlePreview = () => {
    setShowLoading(true);
    // Auto-hide after 3 seconds for demo purposes
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  };

  if (showLoading) {
    return <Loading />;
  }

  return (
    <Container
      maxWidth={false}
      sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}
    >
      {/* Header */}
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
          🧪 Loading Component Test
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Preview and test the loading screen component
        </Typography>
      </Box>

      <Stack spacing={4}>
        {/* Preview Section */}
        <Paper
          elevation={1}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            textAlign: 'center',
            border: '2px dashed',
            borderColor: 'primary.main',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              color: 'primary.main',
            }}
          >
            Loading Screen Preview
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              color: 'text.secondary',
            }}
          >
            Click the button below to see the Universal Opportunities loading
            screen in action. The preview will automatically close after 3
            seconds.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PreviewIcon />}
              onClick={handlePreview}
              sx={{
                py: { xs: 1.25, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                minWidth: { xs: '200px', sm: 'auto' },
              }}
            >
              Preview Loading Screen
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<RefreshIcon />}
              onClick={() => window.location.reload()}
              sx={{
                py: { xs: 1.25, sm: 1.5 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                minWidth: { xs: '200px', sm: 'auto' },
              }}
            >
              Reload Page
            </Button>
          </Stack>
        </Paper>

        {/* Features Section */}
        <Paper elevation={1} sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Loading Screen Features
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
              mt: 3,
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom color="primary.main">
                🎨 Visual Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Animated rover icon with pulsing circle
                <br />
                • Gradient company branding with shimmer effect
                <br />
                • Subtle background pattern
                <br />• Responsive design for all screen sizes
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom color="primary.main">
                ⚡ Animations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Bouncing rover icon animation
                <br />
                • Pulsing progress indicator
                <br />
                • Animated progress dots sequence
                <br />• Smooth fade-in transition
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom color="primary.main">
                🌙 Theme Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Automatic light/dark mode adaptation
                <br />
                • Uses MUI theme colors and variables
                <br />
                • Consistent with Universal Opportunities branding
                <br />• Matches corporate color scheme
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom color="primary.main">
                📱 User Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Instant navigation feel
                <br />
                • Professional corporate messaging
                <br />
                • Space operations themed text
                <br />• Mobile-optimized layout
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Technical Details */}
        <Paper elevation={1} sx={{ p: { xs: 3, sm: 4 } }}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Technical Implementation
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The loading screen is automatically shown by Next.js during page
            navigation and route changes. It uses Material-UI components and
            animations for a professional, branded experience.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontFamily="var(--font-geist-mono)"
          >
            📁 Location: <code>src/app/loading.tsx</code>
            <br />
            🎯 Triggers: Automatic during Next.js navigation
            <br />
            📦 Dependencies: @mui/material, @mui/icons-material
            <br />
            🎨 Animations: CSS keyframes with MUI sx prop
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
}
