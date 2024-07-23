import DOMPurify from 'dompurify';
import { RAW_DATA } from './rawData';

export const DOCS_DATA = {
  whatIsTenex: {
    title: RAW_DATA.whatIsTenex.title,
    content: DOMPurify.sanitize(RAW_DATA.whatIsTenex.content),
  },
  core: {
    title: RAW_DATA.core.title,
    content: DOMPurify.sanitize(RAW_DATA.core.content),
  },
  ve3: {
    title: RAW_DATA.ve3.title,
    content: DOMPurify.sanitize(RAW_DATA.ve3.content),
  },
  rewards: {
    title: RAW_DATA.rewards.title,
    content: DOMPurify.sanitize(RAW_DATA.rewards.content),
  },
  glossary: {
    title: RAW_DATA.glossary.title,
    content: DOMPurify.sanitize(RAW_DATA.glossary.content),
  },
  veTenex: {
    title: RAW_DATA.veTenex.title,
    content: DOMPurify.sanitize(RAW_DATA.veTenex.content),
  },
  tenexSwap: {
    title: RAW_DATA.tenexSwap.title,
    content: DOMPurify.sanitize(RAW_DATA.tenexSwap.content),
  },
  revenue: {
    title: RAW_DATA.revenue.title,
    content: DOMPurify.sanitize(RAW_DATA.revenue.content),
  },
  analytics: {
    title: RAW_DATA.analytics.title,
    content: DOMPurify.sanitize(RAW_DATA.analytics.content),
  },
  legacyPools: {
    title: RAW_DATA.legacyPools.title,
    content: DOMPurify.sanitize(RAW_DATA.legacyPools.content),
  },
  feeDistribution: {
    title: RAW_DATA.feeDistribution.title,
    content: DOMPurify.sanitize(RAW_DATA.feeDistribution.content),
  },
  curves: {
    title: RAW_DATA.curves.title,
    content: DOMPurify.sanitize(RAW_DATA.curves.content),
  },
  distribution: {
    title: RAW_DATA.distribution.title,
    content: DOMPurify.sanitize(RAW_DATA.distribution.content),
  },
  emissions: {
    title: RAW_DATA.emissions.title,
    content: DOMPurify.sanitize(RAW_DATA.emissions.content),
  },
  elasticEmissions: {
    title: RAW_DATA.elasticEmissions.title,
    content: DOMPurify.sanitize(RAW_DATA.elasticEmissions.content),
  },
  tge: {
    title: RAW_DATA.tge.title,
    content: DOMPurify.sanitize(RAW_DATA.tge.content),
  },
  priceDetermination: {
    title: RAW_DATA.priceDetermination.title,
    content: DOMPurify.sanitize(RAW_DATA.priceDetermination.content),
  },
  security: {
    title: RAW_DATA.security.title,
    content: DOMPurify.sanitize(RAW_DATA.security.content),
  },
  v2: {
    title: RAW_DATA.v2.title,
    content: DOMPurify.sanitize(RAW_DATA.v2.content),
  },
  functionalitiesUpgrade: {
    title: RAW_DATA.functionalitiesUpgrade.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.content),
  },
  liquidityProvisioning: {
    title: RAW_DATA.v2liquidityProvisioning.title,
    content: DOMPurify.sanitize(RAW_DATA.v2liquidityProvisioning.content),
  },
  roadAhead: {
    title: RAW_DATA.roadAhead.title,
    content: DOMPurify.sanitize(RAW_DATA.roadAhead.content),
  },
  fullMigration: {
    title: RAW_DATA.fullMigration.title,
    content: DOMPurify.sanitize(RAW_DATA.fullMigration.content),
  },
  swap: {
    title: RAW_DATA.functionalitiesUpgrade.swap.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.swap.content),
  },
  liquidityPool: {
    title: RAW_DATA.functionalitiesUpgrade.liquidityPool.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.liquidityPool.content
    ),
  },
  voting: {
    title: RAW_DATA.functionalitiesUpgrade.voting.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.voting.content),
  },
  lock: {
    title: RAW_DATA.functionalitiesUpgrade.lock.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.lock.content),
  },
  incentives: {
    title: RAW_DATA.functionalitiesUpgrade.incentives.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.incentives.content
    ),
  },
  mintTokens: {
    title: RAW_DATA.functionalitiesUpgrade.mintTokens.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.mintTokens.content
    ),
  },
  launchpad: {
    title: RAW_DATA.functionalitiesUpgrade.launchpad.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.launchpad.content
    ),
  },
  chat: {
    title: RAW_DATA.functionalitiesUpgrade.chat.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.chat.content),
  },
  whitelisting: {
    title: RAW_DATA.functionalitiesUpgrade.whitelisting.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.whitelisting.content
    ),
  },
  ads: {
    title: RAW_DATA.functionalitiesUpgrade.ads.title,
    content: DOMPurify.sanitize(RAW_DATA.functionalitiesUpgrade.ads.content),
  },
  lendBorrow: {
    title: RAW_DATA.functionalitiesUpgrade.lendBorrow.title,
    content: DOMPurify.sanitize(
      RAW_DATA.functionalitiesUpgrade.lendBorrow.content
    ),
  },
  v2liquidityProvisioning: {
    title: RAW_DATA.v2liquidityProvisioning.title,
    content: DOMPurify.sanitize(RAW_DATA.v2liquidityProvisioning.content),
  },
  multiAssetsPool: {
    title: RAW_DATA.v2liquidityProvisioning.multiAssetsPool.title,
    content: DOMPurify.sanitize(
      RAW_DATA.v2liquidityProvisioning.multiAssetsPool.content
    ),
  },
  liquidityConcentrated: {
    title: RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.title,
    content: DOMPurify.sanitize(
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.content
    ),
  },
  clGauges: {
    title:
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.clGauges.title,
    content: DOMPurify.sanitize(
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.clGauges.content
    ),
  },
  tickspacing: {
    title:
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.tickspacing.title,
    content: DOMPurify.sanitize(
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.tickspacing.content
    ),
  },
  v2feeDistribution: {
    title:
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.v2feeDistribution
        .title,
    content: DOMPurify.sanitize(
      RAW_DATA.v2liquidityProvisioning.liquidityConcentrated.v2feeDistribution
        .content
    ),
  },
};
