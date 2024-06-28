import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ParticipantsSection from './components/ParticipantsSection';
import TopVoteIncentives from './components/TopVoteIncentives';
import VolumeChart from './components/VolumeChart';
import CoreSection from './components/CoreSection';

const App: React.FC = () => (
  <ThemeProvider>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ParticipantsSection />
    <TopVoteIncentives />
    <VolumeChart />
    <CoreSection />
  </ThemeProvider>
);

export default App;
