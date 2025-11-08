import { Box, CircularProgress, Typography, Fade } from '@mui/material';
import { SmartToy } from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';
import UniversalOpportunitiesText from '@/components/UniversalOpportunitiesText';

export default function Loading() {
  return (
    <DashboardLayout>
      <Fade in={true} timeout={300}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 64px)', // Subtract AppBar height for mobile
            bgcolor: 'background.default',
            color: 'text.primary',
            position: 'relative',
            overflow: 'hidden',
            '@media (min-width: 900px)': {
              height: '100vh', // On desktop, drawer is beside content so full height is fine
            },
          }}
        >
        {/* Background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Main loading content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            zIndex: 1,
          }}
        >
          {/* Animated rover icon */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              size={80}
              thickness={2}
              sx={{
                color: 'primary.main',
                position: 'absolute',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%': {
                    opacity: 1,
                    transform: 'scale(1)',
                  },
                  '50%': {
                    opacity: 0.7,
                    transform: 'scale(1.1)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'scale(1)',
                  },
                },
              }}
            />
            <SmartToy
              sx={{
                fontSize: 40,
                color: 'primary.main',
                animation: 'bounce 2s ease-in-out infinite',
                '@keyframes bounce': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-8px)',
                  },
                },
              }}
            />
          </Box>

          {/* Company branding */}
          <Box sx={{ textAlign: 'center' }}>
            <UniversalOpportunitiesText
              variant="h5"
              speed={1.2}
              sx={{
                mb: 1,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                opacity: 0.8,
                animation: 'fadeInOut 2s ease-in-out infinite',
                '@keyframes fadeInOut': {
                  '0%, 100%': {
                    opacity: 0.8,
                  },
                  '50%': {
                    opacity: 0.4,
                  },
                },
              }}
            >
              Initializing Remote Operations Portal...
            </Typography>
          </Box>

          {/* Progress indicator dots */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              mt: 2,
            }}
          >
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  animation: `dotPulse 1.5s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                  '@keyframes dotPulse': {
                    '0%, 100%': {
                      opacity: 0.3,
                      transform: 'scale(1)',
                    },
                    '50%': {
                      opacity: 1,
                      transform: 'scale(1.2)',
                    },
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Bottom status */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              opacity: 0.6,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Connecting to deep space operations...
          </Typography>
        </Box>
      </Box>
    </Fade>
    </DashboardLayout>
  );
}