import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ParticipantsSection from './components/ParticipantsSection';
import TopVoteIncentives from './components/TopVoteIncentives';
import VolumeChart from './components/VolumeChart';
import CoreSection from './components/CoreSection';
import EmissionsSchedule from './components/EmissionsSchedule';
import TopPairs from './components/TopPairs';
import Footer from './components/Footer';

const App: React.FC = () => (
  <ThemeProvider>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ParticipantsSection />
    <TopVoteIncentives />
    <VolumeChart />
    <CoreSection />
    <EmissionsSchedule />
    <TopPairs />
    <Footer />
  </ThemeProvider>
);

export default App;
