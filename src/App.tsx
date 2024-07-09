// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/App/HomePage';
import LiquidityPage from './pages/liquidity/LiquidityPage';
import GovernancePage from './pages/governance/ManageveTenex';
import RewardsPage from './pages/rewards/RewardsPage';
import ToolsPage from './pages/tools/ToolsPage';
import SwapPage from './pages/swap/SwapPage';
import CrossChainSwap from './pages/swap/CrossChainSwap';
import ConcentratedLiquidityPage from './pages/liquidity/ConcentratedLiquidityPage';
import ManageveTenex from './pages/governance/ManageveTenex';
import Documentation from './pages/tools/Documentation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/cross-chain-swap" element={<CrossChainSwap />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route
            path="/concentrated-liquidity-farms"
            element={<ConcentratedLiquidityPage />}
          />
          <Route path="/governance" element={<ManageveTenex />} />
          <Route path="/vote" element={<GovernancePage />} />
          <Route path="/incentives" element={<GovernancePage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/analytics" element={<ToolsPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/bridge" element={<ToolsPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
