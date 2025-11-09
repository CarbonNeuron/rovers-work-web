import React from 'react';
import {
  Typography,
  Paper,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';

export default function TestScrollPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Scroll Test Page"
        subtitle="Testing mobile drawer behavior and page scrolling"
      />

      {/* Long Content Sections */}
      {Array.from({ length: 10 }, (_, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{
            p: { xs: 3, sm: 4 },
            mb: 3,
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Section {index + 1}: Mining Operations Report
          </Typography>

          <Typography variant="body1" paragraph>
            This is a comprehensive analysis of mining operations conducted by
            Universal Opportunities across various planetary systems. Each rover
            deployment represents a significant investment in both human and
            technological resources, requiring careful monitoring and strategic
            planning.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{ mt: 2 }}
          >
            <Card variant="outlined" sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Rover Fleet Status - Sector {index + 1}
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="Active Rovers"
                      secondary={`${Math.floor(Math.random() * 20) + 5} units deployed`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Resources Collected"
                      secondary={`${Math.floor(Math.random() * 1000) + 500} tons this cycle`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="System Efficiency"
                      secondary={`${Math.floor(Math.random() * 20) + 80}% operational capacity`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Next Maintenance Window"
                      secondary={`${Math.floor(Math.random() * 30) + 1} days from now`}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Resource Analysis
                </Typography>
                <Typography variant="body2" paragraph>
                  The mining operations in this sector have yielded exceptional
                  results, with rare earth elements comprising{' '}
                  {Math.floor(Math.random() * 40) + 10}% of total extracted
                  materials. Quality assessments indicate optimal purity levels
                  across all mineral categories.
                </Typography>
                <Typography variant="body2" paragraph>
                  Environmental impact assessments show minimal disruption to
                  planetary ecosystems, maintaining Universal Opportunities'
                  commitment to sustainable extraction practices across all
                  operational theaters.
                </Typography>
                <Typography variant="body2">
                  Projected completion of current contracts:{' '}
                  {Math.floor(Math.random() * 60) + 30} days, with potential for
                  early delivery pending favorable atmospheric conditions.
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Operational Challenges and Solutions
          </Typography>
          <Typography variant="body2" paragraph>
            During the course of operations, several technical challenges have
            been identified and resolved through innovative engineering
            solutions and adaptive protocols. These improvements have been
            integrated into the standard operating procedures for all future
            deployments.
          </Typography>
          <Typography variant="body2" paragraph>
            The remote nature of these operations requires constant vigilance
            and proactive maintenance scheduling. Our operators work around the
            clock to ensure maximum uptime and efficiency across all deployed
            systems.
          </Typography>
          <Typography variant="body2">
            Communication delays with Earth-based control centers have been
            mitigated through improved autonomous decision-making algorithms and
            enhanced local processing capabilities.
          </Typography>
        </Paper>
      ))}

      {/* Final Summary */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 3, sm: 4 },
          mb: 4,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          End of Scroll Test
        </Typography>
        <Typography variant="body1">
          If you can see this section clearly and the mobile navigation worked
          properly while scrolling, then the layout and z-index fixes are
          working correctly!
        </Typography>
      </Paper>
    </PageContainer>
  );
}
