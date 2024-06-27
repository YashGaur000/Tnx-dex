import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';

const App: React.FC = () => (
  <ThemeProvider>
    <Header />
    <HeroSection />
    <FeaturesSection />
  </ThemeProvider>
);

export default App;
