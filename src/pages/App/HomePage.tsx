import HeroSection from '../../components/Homepage/modules/HeroSection';
import FeaturesSection from '../../components/Homepage/modules/FeaturesSection';
import ParticipantsSection from '../../components/Homepage/modules/ParticipantsSection';
import TopVoteIncentives from '../../components/Homepage/modules/TopVoteIncentives';
import VolumeChart from '../../components/Homepage/modules/VolumeChart';
import CoreSection from '../../components/Homepage/modules/CoreSection';
import EmissionsSchedule from '../../components/Homepage/modules/EmissionsSchedule';
import TopPairs from '../../components/Homepage/modules/TopPairs';
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
