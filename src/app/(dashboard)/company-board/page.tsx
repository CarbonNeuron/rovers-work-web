import React from 'react';
import {
  Assignment as ContractIcon,
  EmojiEvents as RewardIcon,
  TrackChanges as ProgressIcon,
  CheckCircle as CompleteIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/PageHeader';
import ModulePlaceholder from '@/components/ModulePlaceholder';

export default function CompanyBoardPage() {
  const features = [
    {
      icon: <ContractIcon />,
      text: 'Daily and weekly contract listings',
    },
    {
      icon: <RewardIcon />,
      text: 'Contract requirements and rewards',
    },
    {
      icon: <ProgressIcon />,
      text: 'Progress tracking for active contracts',
    },
    {
      icon: <CompleteIcon />,
      text: 'Contract completion and reward claiming',
    },
    {
      icon: <AnnouncementIcon />,
      text: 'Corporate announcements and updates',
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="Company Board"
        subtitle="Daily and weekly contracts from Universal Opportunities"
      />
      <ModulePlaceholder
        emoji="📋"
        moduleName="Company Board Module"
        features={features}
      />
    </PageContainer>
  );
}
