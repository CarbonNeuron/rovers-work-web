import React from 'react';
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
import {
  Person as ProfileIcon,
  EmojiEvents as BadgeIcon,
  Assessment as StatIcon,
  TrendingUp as EfficiencyIcon,
  Timeline as CareerIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <Container maxWidth={false} sx={{ py: { xs: 2, sm: 4 } }}>
        <Box sx={{ mb: { xs: 3, sm: 4 } }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            Operator Profile
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            Certifications, statistics, and performance metrics
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
              fontSize: { xs: '1.5rem', sm: '2rem' }
            }}
          >
            👤 Profile Module
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            This will contain:
          </Typography>
          <List sx={{ 
            maxWidth: 600, 
            mx: 'auto', 
            textAlign: 'left',
            px: { xs: 0, sm: 2 }
          }}>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <BadgeIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Operator certifications and badges"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <StatIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Performance statistics and achievements"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <EfficiencyIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Mining efficiency metrics"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <CareerIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Career progression tracking"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Account settings and preferences"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
          </List>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}
