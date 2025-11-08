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
  Assignment as ContractIcon,
  EmojiEvents as RewardIcon,
  TrackChanges as ProgressIcon,
  CheckCircle as CompleteIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

export default function CompanyBoardPage() {
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
            Company Board
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >
            Daily and weekly contracts from Universal Opportunities
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
            📋 Company Board Module
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
                <ContractIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Daily and weekly contract listings"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <RewardIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Contract requirements and rewards"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <ProgressIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Progress tracking for active contracts"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <CompleteIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Contract completion and reward claiming"
                primaryTypographyProps={{
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Corporate announcements and updates"
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
