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
  Public as PlanetIcon,
  Map as SectorIcon,
  FlightTakeoff as TravelIcon,
  Category as ResourceIcon,
  Schedule as TimeIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

export default function PlanetsPage() {
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
            Planetary Overview
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            Explore sectors and manage inter-planetary operations
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
            🪐 Planets Module
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
                <PlanetIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Planet selection and overview"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <SectorIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Sector maps and exploration progress"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <TravelIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Inter-planetary travel system"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <ResourceIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Planet-specific resource information"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <TimeIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Travel time calculations and notifications"
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
