import React, { Suspense, lazy, startTransition, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/App/HomePage';
import LiquidityPage from '../pages/liquidity/LiquidityPage';
import GovernancePage from '../pages/governance/ManageveTenex';
import RewardsPage from '../pages/rewards/RewardsPage';
import ToolsPage from '../pages/tools/ToolsPage';
import SwapPage from '../pages/swap/SwapPage';
import CrossChainSwap from '../pages/swap/CrossChainSwap';
import ConcentratedLiquidityPage from '../pages/liquidity/ConcentratedLiquidityPage';
import ManageveTenex from '../pages/governance/ManageveTenex';
import Documentation from '../pages/tools/Documentation';
import { DOCS_DATA } from '../components/Documents/data/docsData';

const ContentData = lazy(() => import('../components/Documents/Content'));

const AppRoutes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {!isLoading && (
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
            <Route path="/documentation" element={<Documentation />}>
              <Route path="introduction">
                <Route
                  path="tenex"
                  element={
                    <ContentData
                      title={DOCS_DATA.whatIsTenex.title}
                      content={DOCS_DATA.whatIsTenex.content}
                    />
                  }
                />
                <Route
                  path="core"
                  element={
                    <ContentData
                      title={DOCS_DATA.core.title}
                      content={DOCS_DATA.core.content}
                    />
                  }
                />
                <Route
                  path="fundamentals"
                  element={
                    <ContentData
                      title={DOCS_DATA.ve3.title}
                      content={DOCS_DATA.ve3.content}
                    />
                  }
                />
                <Route
                  path="glossary"
                  element={
                    <ContentData
                      title={DOCS_DATA.glossary.title}
                      content={DOCS_DATA.glossary.content}
                    />
                  }
                />
                <Route
                  path="veTenex"
                  element={
                    <ContentData
                      title={DOCS_DATA.veTenex.title}
                      content={DOCS_DATA.veTenex.content}
                    />
                  }
                />
                <Route
                  path="swap"
                  element={
                    <ContentData
                      title={DOCS_DATA.tenexSwap.title}
                      content={DOCS_DATA.tenexSwap.content}
                    />
                  }
                />
                <Route
                  path="revenue"
                  element={
                    <ContentData
                      title={DOCS_DATA.revenue.title}
                      content={DOCS_DATA.revenue.content}
                    />
                  }
                />
                <Route
                  path="analytics"
                  element={
                    <ContentData
                      title={DOCS_DATA.analytics.title}
                      content={DOCS_DATA.analytics.content}
                    />
                  }
                />
              </Route>
              <Route path="liquidity">
                <Route
                  path="pools"
                  element={
                    <ContentData
                      title={DOCS_DATA.legacyPools.title}
                      content={DOCS_DATA.legacyPools.content}
                    />
                  }
                />
                <Route
                  path="rewards"
                  element={
                    <ContentData
                      title={DOCS_DATA.rewards.title}
                      content={DOCS_DATA.rewards.content}
                    />
                  }
                />
                <Route
                  path="curves"
                  element={
                    <ContentData
                      title={DOCS_DATA.curves.title}
                      content={DOCS_DATA.curves.content}
                    />
                  }
                />
              </Route>
              <Route path="tokenomics">
                <Route
                  path="distribution"
                  element={
                    <ContentData
                      title={DOCS_DATA.distribution.title}
                      content={DOCS_DATA.distribution.content}
                    />
                  }
                />
                <Route
                  path="emissions-schedule"
                  element={
                    <ContentData
                      title={DOCS_DATA.emissions.title}
                      content={DOCS_DATA.emissions.content}
                    />
                  }
                />
                <Route
                  path="elastic-emissions"
                  element={
                    <ContentData
                      title={DOCS_DATA.elasticEmissions.title}
                      content={DOCS_DATA.elasticEmissions.content}
                    />
                  }
                />
                <Route
                  path="tge"
                  element={
                    <ContentData
                      title={DOCS_DATA.tge.title}
                      content={DOCS_DATA.tge.content}
                    />
                  }
                />
                <Route
                  path="price"
                  element={
                    <ContentData
                      title={DOCS_DATA.priceDetermination.title}
                      content={DOCS_DATA.priceDetermination.content}
                    />
                  }
                />
              </Route>
              <Route path="security">
                <Route
                  path="legal"
                  element={
                    <ContentData
                      title={DOCS_DATA.security.title}
                      content={DOCS_DATA.security.content}
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="/bridge" element={<ToolsPage />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
};

export default AppRoutes;
