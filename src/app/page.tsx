import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Button,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Rocket as RocketIcon,
  Diamond as DiamondIcon,
  Public as PublicIcon,
  Engineering as EngineeringIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Groups as GroupsIcon,
  Login as PortalIcon,
} from '@mui/icons-material';
import DashboardLayout from '@/components/DashboardLayout';

export default function HomePage() {
  return (
    <DashboardLayout>
      <Container maxWidth={false} sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}>
        {/* Header Section */}
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: { xs: 'center', sm: 'left' },
              background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            Universal Opportunities
          </Typography>
          <Typography 
            variant="h4" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              textAlign: { xs: 'center', sm: 'left' },
              mb: 3,
            }}
          >
            Leading the Future of Deep Space Mining Operations
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.125rem' },
              textAlign: { xs: 'center', sm: 'left' },
              maxWidth: '800px',
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Pioneering remote-controlled mining operations across the galaxy through 
            innovative technology and strategic partnerships with Earth-based contractors.
          </Typography>
          
          {/* Call to Action Button */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Button
              href="/portal"
              variant="contained"
              size="large"
              startIcon={<PortalIcon />}
              sx={{ 
                py: { xs: 1.5, sm: 2 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1d4ed8 30%, #059669 90%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Access Portal
            </Button>
          </Box>
        </Box>

        <Stack spacing={6}>
          {/* Mission Statement */}
          <Paper 
            elevation={2}
            sx={{ 
              p: { xs: 3, sm: 4, md: 6 },
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <BusinessIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
              <Typography 
                variant="h2" 
                component="h2"
                sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
              >
                Our Mission
              </Typography>
            </Box>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.125rem' },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              At Universal Opportunities, we believe in connecting talented individuals on Earth 
              with lucrative mining operations across distant planets. Our cutting-edge remote 
              operations portal enables contractors to control advanced mining rovers from the 
              comfort of their homes while earning competitive compensation.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.125rem' },
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'text.secondary',
              }}
            >
              "Bridging worlds, creating opportunities, building the future—one mining 
              operation at a time."
            </Typography>
          </Paper>

          {/* Core Services */}
          <Box>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' },
                mb: 4,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Core Services & Operations
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(2, 1fr)',
                },
                gap: 3,
              }}
            >
              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <RocketIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Remote Rover Operations
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    State-of-the-art fleet management system allowing Earth-based operators 
                    to control mining rovers across multiple planets and sectors in real-time.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Real-time Control" size="small" variant="outlined" />
                    <Chip label="Multi-Planet Operations" size="small" variant="outlined" />
                    <Chip label="Advanced HUD Systems" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DiamondIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Resource Trading Markets
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Dynamic pricing systems and galactic market integration for optimal 
                    resource trading and maximum contractor profitability.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Dynamic Pricing" size="small" variant="outlined" />
                    <Chip label="Market Analytics" size="small" variant="outlined" />
                    <Chip label="Automated Trading" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EngineeringIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Fabrication & Production
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Automated fabrication facilities and production queues for crafting 
                    advanced equipment and infrastructure at remote outposts.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Automated Production" size="small" variant="outlined" />
                    <Chip label="Custom Recipes" size="small" variant="outlined" />
                    <Chip label="Queue Management" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PublicIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Inter-Planetary Logistics
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Comprehensive logistics network managing travel, resource transport, 
                    and supply chains across multiple star systems.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip label="Travel Systems" size="small" variant="outlined" />
                    <Chip label="Supply Chains" size="small" variant="outlined" />
                    <Chip label="Sector Management" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Company Values */}
          <Paper elevation={1} sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' },
                mb: 4,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Our Core Values
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 4,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary.main">
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pioneering cutting-edge technology to revolutionize remote operations 
                  and deep space exploration.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <GroupsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary.main">
                  Partnership
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Building lasting relationships with contractors and stakeholders 
                  for mutual success and growth.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <SecurityIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary.main">
                  Reliability
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ensuring consistent, secure, and dependable operations across 
                  all our interplanetary mining ventures.
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <DiamondIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom color="primary.main">
                  Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maintaining the highest standards in safety, efficiency, 
                  and contractor satisfaction across all operations.
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Corporate Structure */}
          <Box>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' },
                mb: 4,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Corporate Overview
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(2, 1fr)',
                },
                gap: 4,
              }}
            >
              <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  🏢 Company Structure
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Universal Opportunities operates as a megacorporation with extensive 
                  reach across multiple star systems and planetary operations.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  <strong>Industry:</strong> Deep Space Mining & Resource Extraction<br/>
                  <strong>Founded:</strong> 2387 GST (Galactic Standard Time)<br/>
                  <strong>Headquarters:</strong> Luna City, Earth's Moon<br/>
                  <strong>Operations:</strong> 47 Star Systems, 180+ Planets
                </Typography>
              </Paper>

              <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  🎯 Business Model
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  We connect Earth-based contractors with remote mining opportunities 
                  through our advanced rover control systems and profit-sharing agreements.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  <strong>Revenue Streams:</strong> Contract Mining, Resource Trading, 
                  Technology Licensing<br/>
                  <strong>Contractor Network:</strong> 15,000+ Active Operators<br/>
                  <strong>Success Rate:</strong> 94.7% Project Completion
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Call to Action */}
          <Paper 
            elevation={2}
            sx={{ 
              p: { xs: 3, sm: 4, md: 6 },
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 3,
            }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.25rem', sm: '1.75rem' },
                color: 'primary.main'
              }}
            >
              Ready to Join Our Operations?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.125rem' },
                mb: 3,
                maxWidth: '600px',
                mx: 'auto',
                color: 'text.secondary',
              }}
            >
              Universal Opportunities offers competitive compensation packages, 
              comprehensive training programs, and the chance to be part of humanity's 
              expansion into the cosmos. Your expertise in remote operations could 
              unlock opportunities beyond imagination.
            </Typography>
            <Button
              href="/portal"
              variant="contained"
              size="large"
              startIcon={<PortalIcon />}
              sx={{ 
                py: { xs: 1.5, sm: 2 },
                px: { xs: 3, sm: 4 },
                fontSize: { xs: '1rem', sm: '1.125rem' },
                fontWeight: 600,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1d4ed8 30%, #059669 90%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
                mb: 2,
              }}
            >
              Access Operations Portal
            </Button>
            <Typography 
              variant="body2" 
              sx={{ 
                fontStyle: 'italic',
                color: 'text.secondary',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              "The universe is vast, but opportunity is universal."
            </Typography>
          </Paper>
        </Stack>

        {/* Legal Disclaimer */}
        <Box
          sx={{
            mt: 6,
            p: 3,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            border: 1,
            borderColor: 'divider',
            maxWidth: 800,
            mx: 'auto',
            opacity: 0.9,
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              display: 'block',
              color: 'text.secondary',
              fontWeight: 600,
              mb: 1,
              letterSpacing: 1.2,
            }}
          >
            Legal Disclaimer
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            * Compensation packages may include Universal Opportunities Credit Units (UOCU), 
            planetary mineral rights certificates, and exclusive access to company recreational 
            facilities on Europa Station. <strong>Compensation not exchangeable for monetary value.</strong> 
            UOCU may be redeemed for company store merchandise, cafeteria meals, and basic life 
            support services. Void where prohibited by Galactic Commerce Regulations. 
            Universal Opportunities is not responsible for temporal displacement, 
            rover-induced psychological attachment, or accidental discovery of sentient mineral formations.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.7rem',
              fontStyle: 'italic',
              opacity: 0.8,
            }}
          >
            By accessing this portal, you acknowledge that remote work may involve actual remoteness 
            measured in astronomical units. Company-provided rover insurance does not cover existential 
            crises caused by viewing the Earth as a pale blue dot. Professional counseling available 
            through HR Department, Subsection Q, Form 847-B.
          </Typography>
        </Box>
      </Container>
    </DashboardLayout>
  );
}
