'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as PortalIcon,
  SmartToy as RoverIcon,
  Public as PlanetIcon,
  TrendingUp as MarketIcon,
  Build as FabricationIcon,
  Assignment as BoardIcon,
  Person as ProfileIcon,
  Info as AboutIcon,
} from '@mui/icons-material';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import UniversalOpportunitiesText from '@/components/UniversalOpportunitiesText';

const navigationItems = [
  {
    href: '/portal',
    label: 'Operations Portal',
    description: 'Mission Dashboard',
    icon: PortalIcon,
  },
  {
    href: '/rovers',
    label: 'Rovers',
    description: 'Fleet Management',
    icon: RoverIcon,
  },
  {
    href: '/planets',
    label: 'Planets',
    description: 'Sector Overview',
    icon: PlanetIcon,
  },
  {
    href: '/market',
    label: 'Market',
    description: 'Resource Trading',
    icon: MarketIcon,
  },
  {
    href: '/fabrication',
    label: 'Fabrication',
    description: 'Production Queues',
    icon: FabricationIcon,
  },
  {
    href: '/company-board',
    label: 'Company Board',
    description: 'Contracts & Tasks',
    icon: BoardIcon,
  },
  {
    href: '/profile',
    label: 'Profile',
    description: 'Operator Status',
    icon: ProfileIcon,
  },
  {
    href: '/',
    label: 'About',
    description: 'Company Information',
    icon: AboutIcon,
  },
];

const DRAWER_WIDTH = 280;

interface NavigationProps {
  onMobileMenuToggle?: () => void;
}

export default function Navigation({ onMobileMenuToggle }: NavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(x => !x);
    onMobileMenuToggle?.();
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Mobile spacing toolbar */}
      <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />

      {/* Header */}
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <UniversalOpportunitiesText
            variant="h6"
            component="div"
            speed={0.8}
            pauseOnHover={true}
          />
          <Typography
            variant="caption"
            sx={{
              color: theme =>
                theme.palette.mode === 'dark'
                  ? theme.palette.grey[400]
                  : theme.palette.grey[300],
              mt: 0.5,
              display: 'block',
            }}
          >
            Remote Operations Portal
          </Typography>
        </Link>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flex: 1, pt: 2 }}>
        {navigationItems.map(item => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          const IconComponent = item.icon;

          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                href={item.href}
                selected={isActive}
                onClick={() => setMobileOpen(false)}
                sx={{ mx: 1, borderRadius: 1 }}
              >
                <ListItemIcon
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[100],
                  }}
                >
                  <IconComponent />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  secondary={item.description}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.75rem',
                    display: { xs: 'none', md: 'block' },
                  }}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: theme =>
                        theme.palette.mode === 'dark'
                          ? theme.palette.grey[100]
                          : theme.palette.grey[100],
                    },
                    '& .MuiListItemText-secondary': {
                      color: theme =>
                        theme.palette.mode === 'dark'
                          ? theme.palette.grey[400]
                          : theme.palette.grey[300],
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
          }}
        >
          <Chip
            label="Connection Stable"
            size="small"
            color="success"
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
          <ThemeSwitcher sx={{ color: 'text.secondary' }} />
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile App Bar */}
      <AppBar
        position="fixed"
        sx={theme => ({
          display: { xs: 'block', md: 'none' },
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          ...theme.applyStyles('dark', {
            backgroundColor: '#020617',
            color: '#e2e8f0',
          }),
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <UniversalOpportunitiesText
              variant="h6"
              noWrap
              component="div"
              speed={0.6}
              pauseOnHover={true}
            />
          </Link>
        </Toolbar>
      </AppBar>

      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={theme => ({
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            borderRight: '1px solid #334155',
            ...theme.applyStyles('dark', {
              backgroundColor: '#020617',
              color: '#e2e8f0',
              borderRight: '1px solid #475569',
            }),
          },
        })}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Temporary Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={theme => ({
          display: { xs: 'block', md: 'none' },
          height: '100dvh',
          zIndex: theme.zIndex.appBar + 1,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            borderRight: '1px solid #334155',
            ...theme.applyStyles('dark', {
              backgroundColor: '#020617',
              color: '#e2e8f0',
              borderRight: '1px solid #475569',
            }),
          },
        })}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
