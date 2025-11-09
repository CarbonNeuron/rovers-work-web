import React from 'react';
import { Metadata } from 'next';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Button,
  Stack,
} from '@mui/material';

export const metadata: Metadata = {
  title: 'Operations Portal - Mission Dashboard',
  description: 'Universal Opportunities operations portal for managing mining rovers, monitoring missions, and accessing real-time data from remote planetary operations.',
  keywords: ['operations portal', 'mission dashboard', 'rover management', 'mining operations', 'remote control'],
  openGraph: {
    title: 'Operations Portal - Universal Opportunities',
    description: 'Control and monitor your mining rover operations across distant planets.',
    url: '/portal',
  },
};
import {
  SmartToy as RoverIcon,
  AccountBalance as CreditsIcon,
  Assignment as ContractIcon,
  CheckCircle as StatusIcon,
  Add as DeployIcon,
  TrendingUp as MarketIcon,
  Assignment as BoardIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

const MetricCard = ({
  title,
  value,
  label,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  label: string;
  icon: React.ElementType;
}) => (
  <Paper
    elevation={2}
    sx={{
      p: { xs: 2, sm: 3 },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.2s ease',
      '&:hover': {
        elevation: 4,
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Icon sx={{ color: 'primary.main', mr: 1 }} />
      <Typography
        variant="subtitle2"
        color="text.secondary"
        textTransform="uppercase"
      >
        {title}
      </Typography>
    </Box>
    <Typography
      variant="h3"
      component="div"
      sx={{
        mb: 1,
        fontFamily: 'var(--font-geist-mono)',
        fontSize: { xs: '1.5rem', sm: '2rem' },
      }}
    >
      {value}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {label}
    </Typography>
  </Paper>
);

export default function PortalPage() {
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
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Remote Operations Portal
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Mission Control Dashboard
        </Typography>
      </Box>

      {/* Metrics Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: { xs: 2, sm: 3 },
          mb: { xs: 4, sm: 6 },
        }}
      >
        <MetricCard
          title="Active Rovers"
          value={3}
          label="Currently Deployed"
          icon={RoverIcon}
        />
        <MetricCard
          title="Credits Balance"
          value="12,450"
          label="UO Credits"
          icon={CreditsIcon}
        />
        <MetricCard
          title="Active Contracts"
          value={2}
          label="Pending Completion"
          icon={ContractIcon}
        />
        <MetricCard
          title="System Status"
          value="Operational"
          label="All Systems Green"
          icon={StatusIcon}
        />
      </Box>

      {/* Quick Actions */}
      <Paper elevation={1} sx={{ p: { xs: 3, sm: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Quick Actions
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            href="/rovers"
            variant="contained"
            size="large"
            startIcon={<DeployIcon />}
            sx={{
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
            fullWidth={true}
          >
            Deploy New Rover
          </Button>
          <Button
            href="/market"
            variant="outlined"
            size="large"
            startIcon={<MarketIcon />}
            sx={{
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
            fullWidth={true}
          >
            Check Market Prices
          </Button>
          <Button
            href="/company-board"
            variant="outlined"
            size="large"
            startIcon={<BoardIcon />}
            sx={{
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '0.875rem', sm: '1rem' },
            }}
            fullWidth={true}
          >
            View Contracts
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
