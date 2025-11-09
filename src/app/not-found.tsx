'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  RocketLaunch as RocketIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Warning as WarningIcon,
  Satellite as SatelliteIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { keyframes } from '@mui/system';

// Floating animation for the satellite icon
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  50% {
    transform: translateY(-5px) rotate(-1deg);
  }
  75% {
    transform: translateY(-15px) rotate(1deg);
  }
`;

// Pulse animation for the error code
const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;

export default function NotFound() {
  const theme = useTheme();

  const handleSystemDiagnostics = () => {
    // Simulate system diagnostics with a fun alert
    const diagnostics = [
      '🛰️ Satellite Array: OPTIMAL',
      '🔋 Power Grid: 98.2% CAPACITY',
      '🌐 Network Latency: 847ms',
      '💾 Data Storage: 67% UTILIZED',
      '🔒 Security Status: ENCRYPTED',
      '🚀 Mission Control: STANDING BY',
    ];

    alert(
      `UNIVERSAL OPPORTUNITIES SYSTEM DIAGNOSTICS\n\n${diagnostics.join('\n')}\n\n✅ All systems nominal. Ready for operations.`
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Error Code */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
              fontWeight: 800,
              color: 'primary.main',
              mb: 2,
              animation: `${pulseAnimation} 3s ease-in-out infinite`,
              textShadow: theme =>
                theme.palette.mode === 'dark'
                  ? '0 0 15px rgba(37, 99, 235, 0.2)'
                  : '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            404
          </Typography>

          {/* Status Card */}
          <Card
            elevation={4}
            sx={{
              maxWidth: 600,
              mb: 4,
              backgroundColor: 'background.paper',
              border: 1,
              borderColor: 'divider',
            }}
          >
            <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
              <Stack spacing={3}>
                <Box>
                  <Chip
                    icon={<WarningIcon />}
                    label="SIGNAL LOST"
                    color="warning"
                    variant="outlined"
                    sx={{ mb: 2, fontWeight: 600 }}
                  />
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    color="text.primary"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '2rem' },
                      fontWeight: 600,
                    }}
                  >
                    Remote Sector Unavailable
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6,
                  }}
                >
                  The requested sector coordinates could not be located in our
                  navigation systems. The sector may have been reassigned, is
                  undergoing maintenance, or lies beyond our current operational
                  range.
                </Typography>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: theme =>
                      alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 1,
                    borderLeft: 4,
                    borderLeftColor: 'primary.main',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    <strong>Universal Opportunities</strong> • Remote Operations
                    Division
                    <br />
                    If you believe this is an error, please contact your sector
                    supervisor.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Navigation Actions */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ width: '100%', maxWidth: 400 }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              size="large"
              startIcon={<HomeIcon />}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Return to Base
            </Button>

            <Button
              component={Link}
              href="/portal"
              variant="outlined"
              size="large"
              startIcon={<DashboardIcon />}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderWidth: 2,
                color: theme =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.primary.dark,
                borderColor: theme =>
                  theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.primary.dark,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  backgroundColor: theme =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary.main, 0.1)
                      : alpha(theme.palette.primary.dark, 0.1),
                  borderColor: theme =>
                    theme.palette.mode === 'dark'
                      ? theme.palette.primary.light
                      : theme.palette.primary.main,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Operations Portal
            </Button>
          </Stack>

          {/* Footer Status */}
          <Box
            onClick={handleSystemDiagnostics}
            sx={{
              mt: 4,
              p: 2,
              borderRadius: 2,
              backgroundColor: theme =>
                alpha(theme.palette.background.paper, 0.5),
              border: 1,
              borderColor: theme => alpha(theme.palette.primary.main, 0.2),
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: theme =>
                  alpha(theme.palette.primary.main, 0.05),
                borderColor: 'primary.main',
                transform: 'translateY(-2px)',
                boxShadow: theme =>
                  `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`,
              },
              '&:active': {
                transform: 'translateY(0px)',
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: 'success.main',
                    animation: `${pulseAnimation} 2s ease-in-out infinite`,
                  }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: '0.75rem', fontWeight: 500 }}
                >
                  System Status: OPERATIONAL
                </Typography>
              </Box>

              <Typography color="text.disabled" sx={{ fontSize: '0.75rem' }}>
                •
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: 'warning.main',
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                  }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: '0.75rem', fontWeight: 500 }}
                >
                  Sector Scan: IN PROGRESS
                </Typography>
              </Box>

              <Typography color="text.disabled" sx={{ fontSize: '0.75rem' }}>
                •
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: 'primary.main',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  color="primary.main"
                  sx={{ fontSize: '0.75rem', fontWeight: 600 }}
                >
                  Signal Strength: 98%
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="caption"
              color="text.disabled"
              sx={{
                fontSize: '0.65rem',
                mt: 1,
                display: 'block',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              Click for system diagnostics
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
