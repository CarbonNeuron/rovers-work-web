import React from 'react';
import {
  EmojiEvents as BadgeIcon,
  Assessment as StatIcon,
  TrendingUp as EfficiencyIcon,
  Timeline as CareerIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

export default function ProfilePage() {
  const features = [
    {
      icon: <BadgeIcon />,
      text: 'Operator certifications and badges',
    },
    {
      icon: <StatIcon />,
      text: 'Performance statistics and achievements',
    },
    {
      icon: <EfficiencyIcon />,
      text: 'Mining efficiency metrics',
    },
    {
      icon: <CareerIcon />,
      text: 'Career progression tracking',
    },
    {
      icon: <SettingsIcon />,
      text: 'Account settings and preferences',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Operator Profile"
        subtitle="Certifications, statistics, and performance metrics"
      />
      <ModulePlaceholder
        emoji="👤"
        moduleName="Profile Module"
        features={features}
      />
    </PageContainer>
  );
}
