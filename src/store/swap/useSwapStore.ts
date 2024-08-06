import { create } from 'zustand';

interface SwapState {
  inputValue1: string;
  inputValue2: string;
  selectedTolerance: string;
  customTolerance: string;
  setInputValue1: (value: string) => void;
  setInputValue2: (value: string) => void;
  setSelectedTolerance: (tolerance: string) => void;
  setCustomTolerance: (tolerance: string) => void;
}

export const useSwapStore = create<SwapState>((set) => ({
  inputValue1: '',
  inputValue2: '',
  selectedTolerance: '0.5%',
  customTolerance: '',
  setInputValue1: (value) => set({ inputValue1: value }),
  setInputValue2: (value) => set({ inputValue2: value }),
  setSelectedTolerance: (tolerance) => set({ selectedTolerance: tolerance }),
  setCustomTolerance: (tolerance) => set({ customTolerance: tolerance }),
}));
