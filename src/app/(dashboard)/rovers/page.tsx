import React from 'react';
import { Metadata } from 'next';
import {
  SmartToy as RoverIcon,
  Dashboard as HudIcon,
  Map as MapIcon,
  TouchApp as ControlIcon,
  BatteryFull as BatteryIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

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

export default function RoversPage() {
  const features = [
    {
      icon: <RoverIcon />,
      text: 'Fleet overview with rover status cards',
    },
    {
      icon: <HudIcon />,
      text: 'Individual rover HUD with real-time stats',
    },
    {
      icon: <MapIcon />,
      text: 'PixiJS satellite maps with pan/zoom controls',
    },
    {
      icon: <ControlIcon />,
      text: 'Rover movement and mining controls',
    },
    {
      icon: <BatteryIcon />,
      text: 'Battery, health, cargo, and location monitoring',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Rover Fleet Management"
        subtitle="Monitor and control your mining rovers across all planets"
      />
      <ModulePlaceholder
        emoji="🚀"
        moduleName="Rovers Module"
        features={features}
      />
    </PageContainer>
  );
}
