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
  rewards: {
    title: RAW_DATA.rewards.title,
    content: DOMPurify.sanitize(RAW_DATA.rewards.content),
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
};
