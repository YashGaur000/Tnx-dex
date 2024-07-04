import React from 'react';
import HeroSection from '../../components/Homepage/HeroSection';
import FeaturesSection from '../../components/Homepage/FeaturesSection';
import ParticipantsSection from '../../components/Homepage/ParticipantsSection';
import TopVoteIncentives from '../../components/Homepage/TopVoteIncentives';
import VolumeChart from '../../components/Homepage/VolumeChart';
import CoreSection from '../../components/Homepage/CoreSection';
import EmissionsSchedule from '../../components/Homepage/EmissionsSchedule';
import TopPairs from '../../components/Homepage/TopPairs';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ParticipantsSection />
      <TopVoteIncentives />
      <VolumeChart />
      <CoreSection />
      <EmissionsSchedule />
      <TopPairs />
    </>
  );
}
export default HomePage;
