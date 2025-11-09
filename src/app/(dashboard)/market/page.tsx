import React from 'react';
import {
  TrendingUp as TrendingIcon,
  Assessment as AnalyticsIcon,
  Sell as SellIcon,
  ShowChart as ChartIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

export default function MarketPage() {
  const features = [
    {
      icon: <TrendingIcon />,
      text: 'Live resource pricing with market trends',
    },
    {
      icon: <ChartIcon />,
      text: 'Supply and demand indicators',
    },
    {
      icon: <SellIcon />,
      text: 'Resource selling interface',
    },
    {
      icon: <AnalyticsIcon />,
      text: 'Price history and analytics',
    },
    {
      icon: <UpdateIcon />,
      text: 'WebSocket updates for real-time prices',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Universal Market"
        subtitle="Real-time resource trading with dynamic pricing"
      />
      <ModulePlaceholder
        emoji="💰"
        moduleName="Market Module"
        features={features}
      />
    </PageContainer>
  );
}
