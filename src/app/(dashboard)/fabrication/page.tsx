import React from 'react';
import {
  Build as FabricationIcon,
  MenuBook as RecipeIcon,
  Factory as OutpostIcon,
  Category as AllocationIcon,
  TrackChanges as TrackingIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

export default function FabricationPage() {
  const features = [
    {
      icon: <FabricationIcon />,
      text: 'Real-time production queue monitoring',
    },
    {
      icon: <RecipeIcon />,
      text: 'Crafting recipe browser and management',
    },
    {
      icon: <OutpostIcon />,
      text: 'Outpost fabrication facility status',
    },
    {
      icon: <AllocationIcon />,
      text: 'Resource allocation for production',
    },
    {
      icon: <TrackingIcon />,
      text: 'Progress tracking with WebSocket updates',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Fabrication Control"
        subtitle="Manage production queues and crafting recipes at outposts"
      />
      <ModulePlaceholder
        emoji="🏭"
        moduleName="Fabrication Module"
        features={features}
      />
    </PageContainer>
  );
}
