import React, { Suspense, lazy, startTransition, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/App/HomePage';
import LiquidityPage from '../pages/liquidity/LiquidityPage';
// import GovernancePage from '../pages/governance/ManageveTenex';
import RewardsPage from '../pages/rewards/RewardsPage';
import ToolsPage from '../pages/tools/ToolsPage';

import CrossChainSwap from '../pages/swap/CrossChainSwap';
import ConcentratedLiquidityPage from '../pages/liquidity/ConcentratedLiquidityPage';
import ManageveTenex from '../pages/governance/ManageveTenex';
import Documentation from '../pages/tools/Documentation';
import Incentives from '../pages/governance/Incentives';
import { DOCS_DATA } from '../components/Documents/data/docsData';
import BackgroundWrapper from './BackgroundWrapper';

import CreatePool from '../components/Liquidity/CreatePool/Modules/CreatePool';
import Createlock from '../components/ManageVeTenex/Modules/CreateLockScreen/Createlock';
import CreateLockRelay from '../components/ManageVeTenex/Modules/Relaymodules/CreateLockRelay';
import StakeDeposit from '../components/StakeDeposit/modules/StakeDeposit';
import PageLoader from '../components/common/PageLoader';
import DashboardPage from '../pages/dashboard/DashboardPage';
import ExtendLock from '../components/Dashboard/Extendlock/modules/ExtendLock';
import Transferlock from '../components/Dashboard/Transferlock/Transferlock';
import MergeLock from '../components/Dashboard/Mergelock/modules/MergeLock';
import IncreaseLock from '../components/Dashboard/IncreaseLock/IncreaseLock';
import UnStake from '../components/UnStake/modules/UnStake';
import WithdrawLiquidity from '../components/WithdrawLiquidity/modules/WithdrawLiquidity';
import ToolsScreen from '../components/Tools/modules/ToolsScreen';
import SwapPage from '../pages/swap/SwapPage';
import Vote from '../pages/governance/Vote';
import ContentData from '../components/Documents/Content';

const ManagePool = lazy(
  () => import('../components/Liquidity/ManageLiquidity/modules/ManagePool')
);

const AppRoutes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    startTransition(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <>
            <PageLoader />
          </>
        }
      >
        {!isLoading && (
          <BackgroundWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/swap" element={<SwapPage />} />
              <Route path="/cross-chain-swap" element={<CrossChainSwap />} />
              <Route path="/liquidity" element={<LiquidityPage />} />
              <Route path="/liquidity/manage" element={<ManagePool />} />
              <Route path="/liquidity/create" element={<CreatePool />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/tools" element={<ToolsScreen />} />
              <Route
                path="/governance/managevetenex/extend/:encryptedTokenId/:encryptedVotingStatus"
                element={<ExtendLock />}
              />
              <Route
                path="/governance/managevetenex/transfer/:encryptedTokenId/:encryptedVotingStatus"
                element={<Transferlock />}
              />
              <Route
                path="/governance/managevetenex/merge/:encryptedTokenId/:encryptedVotingStatus"
                element={<MergeLock />}
              />
              <Route
                path="/governance/managevetenex/increase/:encryptedTokenId/:encryptedVotingStatus"
                element={<IncreaseLock />}
              />
              <Route path="/stake" element={<StakeDeposit />} />
              <Route path="/unstake" element={<UnStake />} />
              <Route path="/withdraw" element={<WithdrawLiquidity />} />
              <Route
                path="/concentrated-liquidity-farms"
                element={<ConcentratedLiquidityPage />}
              />
              <Route path="/governance/" element={<ManageveTenex />} />
              <Route
                path="/governance/managevetenex"
                element={<ManageveTenex />}
              />
              <Route path="/governance/create" element={<Createlock />} />
              <Route
                path="/governance/relay/create"
                element={<CreateLockRelay />}
              />
              <Route path="/vote" element={<Vote />} />
              <Route path="/incentives" element={<Incentives />} />
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
                    path="Rewards"
                    element={
                      <ContentData
                        title={DOCS_DATA.rewards.title}
                        content={DOCS_DATA.rewards.content}
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
                    path="volatile"
                    element={
                      <ContentData
                        title={DOCS_DATA.volatile.title}
                        content={DOCS_DATA.volatile.content}
                      />
                    }
                  />
                  <Route
                    path="correlated"
                    element={
                      <ContentData
                        title={DOCS_DATA.correlated.title}
                        content={DOCS_DATA.correlated.content}
                      />
                    }
                  />
                  <Route
                    path="fee"
                    element={
                      <ContentData
                        title={DOCS_DATA.feeDistribution.title}
                        content={DOCS_DATA.feeDistribution.content}
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
                  <Route
                    path="busl"
                    element={
                      <ContentData
                        title={DOCS_DATA.busl.title}
                        content={DOCS_DATA.busl.content}
                      />
                    }
                  />
                  <Route
                    path="protected-contracts"
                    element={
                      <ContentData
                        title={DOCS_DATA.protected.title}
                        content={DOCS_DATA.protected.content}
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
                    path="rebasing"
                    element={
                      <ContentData
                        title={DOCS_DATA.rebasing.title}
                        content={DOCS_DATA.rebasing.content}
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
                <Route path="v2">
                  <Route
                    path="v2"
                    element={
                      <ContentData
                        title={DOCS_DATA.v2.title}
                        content={DOCS_DATA.v2.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade"
                    element={
                      <ContentData
                        title={DOCS_DATA.functionalitiesUpgrade.title}
                        content={DOCS_DATA.functionalitiesUpgrade.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/swap"
                    element={
                      <ContentData
                        title={DOCS_DATA.swap.title}
                        content={DOCS_DATA.swap.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/liquidityPool"
                    element={
                      <ContentData
                        title={DOCS_DATA.liquidityPool.title}
                        content={DOCS_DATA.liquidityPool.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/voting"
                    element={
                      <ContentData
                        title={DOCS_DATA.voting.title}
                        content={DOCS_DATA.voting.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/lock"
                    element={
                      <ContentData
                        title={DOCS_DATA.lock.title}
                        content={DOCS_DATA.lock.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/incentives"
                    element={
                      <ContentData
                        title={DOCS_DATA.incentives.title}
                        content={DOCS_DATA.incentives.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/mintTokens"
                    element={
                      <ContentData
                        title={DOCS_DATA.mintTokens.title}
                        content={DOCS_DATA.mintTokens.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/launchpad"
                    element={
                      <ContentData
                        title={DOCS_DATA.launchpad.title}
                        content={DOCS_DATA.launchpad.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/chat"
                    element={
                      <ContentData
                        title={DOCS_DATA.chat.title}
                        content={DOCS_DATA.chat.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/whitelisting"
                    element={
                      <ContentData
                        title={DOCS_DATA.whitelisting.title}
                        content={DOCS_DATA.whitelisting.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/ads"
                    element={
                      <ContentData
                        title={DOCS_DATA.ads.title}
                        content={DOCS_DATA.ads.content}
                      />
                    }
                  />
                  <Route
                    path="functionalitiesUpgrade/lendBorrow"
                    element={
                      <ContentData
                        title={DOCS_DATA.lendBorrow.title}
                        content={DOCS_DATA.lendBorrow.content}
                      />
                    }
                  />

                  <Route
                    path="liquidityProvisioning"
                    element={
                      <ContentData
                        title={DOCS_DATA.v2liquidityProvisioning.title}
                        content={DOCS_DATA.v2liquidityProvisioning.content}
                      />
                    }
                  />
                  <Route
                    path="liquidityProvisioning/multiAssetsPool"
                    element={
                      <ContentData
                        title={DOCS_DATA.multiAssetsPool.title}
                        content={DOCS_DATA.multiAssetsPool.content}
                      />
                    }
                  />
                  <Route
                    path="liquidityProvisioning/liquidityConcentrated"
                    element={
                      <ContentData
                        title={DOCS_DATA.liquidityConcentrated.title}
                        content={DOCS_DATA.liquidityConcentrated.content}
                      />
                    }
                  />
                  <Route
                    path="liquidityProvisioning/liquidityConcentrated/clGauges"
                    element={
                      <ContentData
                        title={DOCS_DATA.clGauges.title}
                        content={DOCS_DATA.clGauges.content}
                      />
                    }
                  />
                  <Route
                    path="liquidityProvisioning/liquidityConcentrated/tickspacing"
                    element={
                      <ContentData
                        title={DOCS_DATA.tickspacing.title}
                        content={DOCS_DATA.tickspacing.content}
                      />
                    }
                  />
                  <Route
                    path="liquidityProvisioning/liquidityConcentrated/feeDistribution"
                    element={
                      <ContentData
                        title={DOCS_DATA.v2feeDistribution.title}
                        content={DOCS_DATA.v2feeDistribution.content}
                      />
                    }
                  />
                  <Route
                    path="roadAhead"
                    element={
                      <ContentData
                        title={DOCS_DATA.roadAhead.title}
                        content={DOCS_DATA.roadAhead.content}
                      />
                    }
                  />
                  <Route
                    path="fullMigration"
                    element={
                      <ContentData
                        title={DOCS_DATA.fullMigration.title}
                        content={DOCS_DATA.fullMigration.content}
                      />
                    }
                  />
                </Route>
              </Route>
              <Route path="/bridge" element={<ToolsPage />} />
            </Routes>
          </BackgroundWrapper>
        )}
      </Suspense>
    </>
  );
};

export default AppRoutes;
