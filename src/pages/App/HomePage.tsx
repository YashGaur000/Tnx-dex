import { Suspense, useEffect } from 'react';
import PageLoader from '../../components/common/PageLoader';
import React from 'react';
const TopPairs = React.lazy(
  () => import('../../components/Homepage/modules/TopPairs')
);
const EmissionsSchedule = React.lazy(
  () => import('../../components/Homepage/modules/EmissionsSchedule')
);
const CoreSection = React.lazy(
  () => import('../../components/Homepage/modules/CoreSection')
);
const VolumeChart = React.lazy(
  () => import('../../components/Homepage/modules/VolumeChart')
);
const TopVoteIncentives = React.lazy(
  () => import('../../components/Homepage/modules/TopVoteIncentives')
);

const ParticipantsSection = React.lazy(
  () => import('../../components/Homepage/modules/ParticipantsSection')
);
const FeaturesSection = React.lazy(
  () => import('../../components/Homepage/modules/FeaturesSection')
);
const HeroSection = React.lazy(
  () => import('../../components/Homepage/modules/HeroSection')
);
function HomePage() {
  useEffect(() => {
    document.title = 'Tenex';
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <HeroSection />
      <FeaturesSection />
      <ParticipantsSection />
      <TopVoteIncentives />
      <VolumeChart />
      <CoreSection />
      <EmissionsSchedule />
      <TopPairs />
    </Suspense>
  );
}
export default HomePage;
