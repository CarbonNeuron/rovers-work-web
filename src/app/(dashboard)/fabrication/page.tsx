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
  Build as FabricationIcon,
  MenuBook as RecipeIcon,
  Factory as OutpostIcon,
  Category as AllocationIcon,
  TrackChanges as TrackingIcon,
} from '@mui/icons-material';

export default function FabricationPage() {
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
          Fabrication Control
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Manage production queues and crafting recipes at outposts
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
          🏭 Fabrication Module
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
              <FabricationIcon />
            </ListItemIcon>
            <ListItemText
              primary="Real-time production queue monitoring"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <RecipeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Crafting recipe browser and management"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <OutpostIcon />
            </ListItemIcon>
            <ListItemText
              primary="Outpost fabrication facility status"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <AllocationIcon />
            </ListItemIcon>
            <ListItemText
              primary="Resource allocation for production"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <TrackingIcon />
            </ListItemIcon>
            <ListItemText
              primary="Progress tracking with WebSocket updates"
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
