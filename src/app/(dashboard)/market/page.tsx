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
  TrendingUp as TrendingIcon,
  Assessment as AnalyticsIcon,
  Sell as SellIcon,
  ShowChart as ChartIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

export default function MarketPage() {
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
          Universal Market
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Real-time resource trading with dynamic pricing
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
          💰 Market Module
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
              <TrendingIcon />
            </ListItemIcon>
            <ListItemText
              primary="Live resource pricing with market trends"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <ChartIcon />
            </ListItemIcon>
            <ListItemText
              primary="Supply and demand indicators"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <SellIcon />
            </ListItemIcon>
            <ListItemText
              primary="Resource selling interface"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Price history and analytics"
              primaryTypographyProps={{
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            />
          </ListItem>
          <ListItem sx={{ px: { xs: 1, sm: 2 } }}>
            <ListItemIcon>
              <UpdateIcon />
            </ListItemIcon>
            <ListItemText
              primary="WebSocket updates for real-time prices"
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
