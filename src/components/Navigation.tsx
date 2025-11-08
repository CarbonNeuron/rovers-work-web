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
  useTheme as useMuiTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  SmartToy as RoverIcon,
  Public as PlanetIcon,
  TrendingUp as MarketIcon,
  Build as FabricationIcon,
  Assignment as BoardIcon,
  Person as ProfileIcon,
} from '@mui/icons-material';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const navigationItems = [
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
];

const DRAWER_WIDTH = 280;

interface NavigationProps {
  onMobileMenuToggle?: () => void;
}

export default function Navigation({ onMobileMenuToggle }: NavigationProps) {
  const pathname = usePathname();
  const muiTheme = useMuiTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    onMobileMenuToggle?.();
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Mobile spacing toolbar */}
      <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />
      
      {/* Header */}
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Universal Opportunities
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}
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
                onClick={handleDrawerToggle}
                sx={{ mx: 1, borderRadius: 1 }}
              >
                <ListItemIcon sx={{ color: '#f1f5f9' }}>
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
        sx={{ 
          display: { xs: 'block', md: 'none' },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          ...muiTheme.applyStyles('dark', {
            backgroundColor: '#020617',
            color: '#e2e8f0',
          }),
        }}
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
          <Typography variant="h6" noWrap component="div">
            Universal Opportunities
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Desktop Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            borderRight: '1px solid #334155',
            ...muiTheme.applyStyles('dark', {
              backgroundColor: '#020617',
              color: '#e2e8f0',
              borderRight: '1px solid #475569',
            }),
          },
        }}
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
        sx={{
          display: { xs: 'block', md: 'none' },
          height: "100dvh",
          zIndex: (theme) => theme.zIndex.appBar + 1,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            borderRight: '1px solid #334155',
            ...muiTheme.applyStyles('dark', {
              backgroundColor: '#020617',
              color: '#e2e8f0',
              borderRight: '1px solid #475569',
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
