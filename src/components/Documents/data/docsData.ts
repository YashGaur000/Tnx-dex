import DOMPurify from 'dompurify';
import { INTRO_RAW_DATA } from './raw data/Introduction';
import { LP_RAW_DATA } from './raw data/LiquidityProvisioning';
import { SECURITY_RAW_DATA } from './raw data/SecurityAndLegal';
import { TOKENOMICS_RAW_DATA } from './raw data/TenexTokenomics';
import { V2_RAW_DATA } from './raw data/TenexV2';

export const DOCS_DATA = {
  whatIsTenex: {
    title: INTRO_RAW_DATA.whatIsTenex.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.whatIsTenex.content),
  },
  core: {
    title: INTRO_RAW_DATA.core.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.core.content),
  },
  ve3: {
    title: INTRO_RAW_DATA.ve3.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.ve3.content),
  },
  rewards: {
    title: INTRO_RAW_DATA.rewards.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.rewards.content),
  },
  glossary: {
    title: INTRO_RAW_DATA.glossary.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.glossary.content),
  },
  veTenex: {
    title: INTRO_RAW_DATA.veTenex.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.veTenex.content),
  },
  tenexSwap: {
    title: INTRO_RAW_DATA.tenexSwap.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.tenexSwap.content),
  },
  revenue: {
    title: INTRO_RAW_DATA.revenue.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.revenue.content),
  },
  analytics: {
    title: INTRO_RAW_DATA.analytics.title,
    content: DOMPurify.sanitize(INTRO_RAW_DATA.analytics.content),
  },
  legacyPools: {
    title: LP_RAW_DATA.legacyPools.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.legacyPools.content),
  },
  volatile: {
    title: LP_RAW_DATA.volatile.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.volatile.content),
  },
  correlated: {
    title: LP_RAW_DATA.correlated.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.correlated.content),
  },
  feeDistribution: {
    title: LP_RAW_DATA.feeDistribution.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.feeDistribution.content),
  },
  curves: {
    title: LP_RAW_DATA.curves.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.curves.content),
  },
  busl: {
    title: LP_RAW_DATA.busl.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.busl.content),
  },
  protected: {
    title: LP_RAW_DATA.protected.title,
    content: DOMPurify.sanitize(LP_RAW_DATA.protected.content),
  },
  distribution: {
    title: TOKENOMICS_RAW_DATA.distribution.title,
    content: DOMPurify.sanitize(TOKENOMICS_RAW_DATA.distribution.content),
  },
  emissions: {
    title: TOKENOMICS_RAW_DATA.emissions.title,
    content: DOMPurify.sanitize(TOKENOMICS_RAW_DATA.emissions.content),
  },
  elasticEmissions: {
    title: TOKENOMICS_RAW_DATA.elasticEmissions.title,
    content: DOMPurify.sanitize(TOKENOMICS_RAW_DATA.elasticEmissions.content),
  },
  tge: {
    title: TOKENOMICS_RAW_DATA.tge.title,
    content: DOMPurify.sanitize(TOKENOMICS_RAW_DATA.tge.content),
  },
  priceDetermination: {
    title: TOKENOMICS_RAW_DATA.priceDetermination.title,
    content: DOMPurify.sanitize(TOKENOMICS_RAW_DATA.priceDetermination.content),
  },
  security: {
    title: SECURITY_RAW_DATA.security.title,
    content: DOMPurify.sanitize(SECURITY_RAW_DATA.security.content),
  },
  v2: {
    title: V2_RAW_DATA.v2.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.v2.content),
  },
  functionalitiesUpgrade: {
    title: V2_RAW_DATA.functionalitiesUpgrade.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.functionalitiesUpgrade.content),
  },
  liquidityProvisioning: {
    title: V2_RAW_DATA.v2liquidityProvisioning.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.v2liquidityProvisioning.content),
  },
  roadAhead: {
    title: V2_RAW_DATA.roadAhead.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.roadAhead.content),
  },
  fullMigration: {
    title: V2_RAW_DATA.fullMigration.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.fullMigration.content),
  },
  swap: {
    title: V2_RAW_DATA.functionalitiesUpgrade.swap.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.swap.content
    ),
  },
  liquidityPool: {
    title: V2_RAW_DATA.functionalitiesUpgrade.liquidityPool.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.liquidityPool.content
    ),
  },
  voting: {
    title: V2_RAW_DATA.functionalitiesUpgrade.voting.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.voting.content
    ),
  },
  lock: {
    title: V2_RAW_DATA.functionalitiesUpgrade.lock.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.lock.content
    ),
  },
  incentives: {
    title: V2_RAW_DATA.functionalitiesUpgrade.incentives.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.incentives.content
    ),
  },
  mintTokens: {
    title: V2_RAW_DATA.functionalitiesUpgrade.mintTokens.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.mintTokens.content
    ),
  },
  launchpad: {
    title: V2_RAW_DATA.functionalitiesUpgrade.launchpad.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.launchpad.content
    ),
  },
  chat: {
    title: V2_RAW_DATA.functionalitiesUpgrade.chat.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.chat.content
    ),
  },
  whitelisting: {
    title: V2_RAW_DATA.functionalitiesUpgrade.whitelisting.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.whitelisting.content
    ),
  },
  ads: {
    title: V2_RAW_DATA.functionalitiesUpgrade.ads.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.functionalitiesUpgrade.ads.content),
  },
  lendBorrow: {
    title: V2_RAW_DATA.functionalitiesUpgrade.lendBorrow.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.functionalitiesUpgrade.lendBorrow.content
    ),
  },
  v2liquidityProvisioning: {
    title: V2_RAW_DATA.v2liquidityProvisioning.title,
    content: DOMPurify.sanitize(V2_RAW_DATA.v2liquidityProvisioning.content),
  },
  multiAssetsPool: {
    title: V2_RAW_DATA.v2liquidityProvisioning.multiAssetsPool.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.v2liquidityProvisioning.multiAssetsPool.content
    ),
  },
  liquidityConcentrated: {
    title: V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.content
    ),
  },
  clGauges: {
    title:
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.clGauges.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.clGauges.content
    ),
  },
  tickspacing: {
    title:
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.tickspacing
        .title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.tickspacing
        .content
    ),
  },
  v2feeDistribution: {
    title:
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated
        .v2feeDistribution.title,
    content: DOMPurify.sanitize(
      V2_RAW_DATA.v2liquidityProvisioning.liquidityConcentrated
        .v2feeDistribution.content
    ),
  },
};
