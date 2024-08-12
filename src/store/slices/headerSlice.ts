import create from 'zustand';

interface HeaderState {
  showTradeSubTabs: boolean;
  showLiquiditySubTabs: boolean;
  showGovernanceSubTabs: boolean;
  showToolsSubTabs: boolean;
  navOpen: boolean;
  activeMainTab: string;
  setActiveMainTab: (tab: string) => void;
  setShowTradeSubTabs: (value: boolean) => void;
  setShowLiquiditySubTabs: (value: boolean) => void;
  setShowGovernanceSubTabs: (value: boolean) => void;
  setShowToolsSubTabs: (value: boolean) => void;
  setNavOpen: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  showTradeSubTabs: false,
  showLiquiditySubTabs: false,
  showGovernanceSubTabs: false,
  showToolsSubTabs: false,
  navOpen: false,
  activeMainTab: '',
  setActiveMainTab: (tab: string) => set({ activeMainTab: tab }),
  setShowTradeSubTabs: (value: boolean) => set({ showTradeSubTabs: value }),
  setShowLiquiditySubTabs: (value: boolean) =>
    set({ showLiquiditySubTabs: value }),
  setShowGovernanceSubTabs: (value: boolean) =>
    set({ showGovernanceSubTabs: value }),
  setShowToolsSubTabs: (value: boolean) => set({ showToolsSubTabs: value }),
  setNavOpen: (value: boolean) => set({ navOpen: value }),
}));
