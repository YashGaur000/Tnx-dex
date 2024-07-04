// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/App/HomePage';
import TradePage from './pages/swap/TradePage';
import LiquidityPage from './pages/liquidity/LiquidityPage';
import GovernancePage from './pages/governance/GovernancePage';
import RewardsPage from './pages/rewards/RewardsPage';
import ToolsPage from './pages/tools/ToolsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<TradePage />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
