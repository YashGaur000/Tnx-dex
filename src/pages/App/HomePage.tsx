import HeroSection from '../../components/Homepage/HeroSection';
import FeaturesSection from '../../components/Homepage/FeaturesSection';
import ParticipantsSection from '../../components/Homepage/ParticipantsSection';
import TopVoteIncentives from '../../components/Homepage/TopVoteIncentives';
import VolumeChart from '../../components/Homepage/VolumeChart';
import CoreSection from '../../components/Homepage/CoreSection';
import EmissionsSchedule from '../../components/Homepage/EmissionsSchedule';
import TopPairs from '../../components/Homepage/TopPairs';
import { CircleGradient } from '../../components/common';

function HomePage() {
  return (
    <>
      <CircleGradient top="-20px" left="200px" />
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
