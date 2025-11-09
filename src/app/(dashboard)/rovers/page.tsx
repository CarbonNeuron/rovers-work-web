import React from 'react';
import { Metadata } from 'next';
import {
  Container,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const metadata: Metadata = {
  title: 'Rovers - Fleet Management',
  description: 'Manage your fleet of mining rovers across multiple planets. Monitor rover status, control operations, and track performance metrics in real-time.',
  keywords: ['rovers', 'fleet management', 'mining robots', 'remote control', 'planetary mining'],
  openGraph: {
    title: 'Rovers Fleet Management - Universal Opportunities',
    description: 'Advanced fleet management system for controlling mining rovers across distant planets.',
    url: '/rovers',
  },
};
import {
  SmartToy as RoverIcon,
  Dashboard as HudIcon,
  Map as MapIcon,
  TouchApp as ControlIcon,
  BatteryFull as BatteryIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

export default function RoversPage() {
  return (
    <Container maxWidth={false} sx={{ py: { xs: 2, sm: 4 } }}>
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
          Rover Fleet Management
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Monitor and control your mining rovers across all planets
        </Typography>
      </Box>

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
          🚀 Rovers Module
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
        <List
          sx={{
            maxWidth: 600,
            mx: 'auto',
            textAlign: 'left',
            px: { xs: 0, sm: 2 },
          }}
        >
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <RoverIcon />
            </ListItemIcon>
            <ListItemText
              primary="Fleet overview with rover status cards"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <HudIcon />
            </ListItemIcon>
            <ListItemText
              primary="Individual rover HUD with real-time stats"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText
              primary="PixiJS satellite maps with pan/zoom controls"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <ControlIcon />
            </ListItemIcon>
            <ListItemText
              primary="Rover movement and mining controls"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <BatteryIcon />
            </ListItemIcon>
            <ListItemText
              primary="Battery, health, cargo, and location monitoring"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}
