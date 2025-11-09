import React from 'react';
import {
  Public as PlanetIcon,
  Map as SectorIcon,
  FlightTakeoff as TravelIcon,
  Category as ResourceIcon,
  Schedule as TimeIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

export default function PlanetsPage() {
  const features = [
    {
      icon: <PlanetIcon />,
      text: 'Planet selection and overview',
    },
    {
      icon: <SectorIcon />,
      text: 'Sector maps and exploration progress',
    },
    {
      icon: <TravelIcon />,
      text: 'Inter-planetary travel system',
    },
    {
      icon: <ResourceIcon />,
      text: 'Planet-specific resource information',
    },
    {
      icon: <TimeIcon />,
      text: 'Travel time calculations and notifications',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Planetary Overview"
        subtitle="Explore sectors and manage inter-planetary operations"
      />
      <ModulePlaceholder
        emoji="🪐"
        moduleName="Planets Module"
        features={features}
      />
    </PageContainer>
  );
}
