import { create } from 'zustand';

export type Timeframe = 'year' | 'month' | 'week' | 'day';

type DashboardState = {
  timeframe: Timeframe;
};

type Actions = {
  setTimeframe: (timeframe: Timeframe) => void;
};

export const useDashboardStore = create<DashboardState & Actions>((set) => ({
  timeframe: 'week',
  setTimeframe: (timeframe) => set({ timeframe }),
}));
