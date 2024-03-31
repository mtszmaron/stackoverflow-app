import { create } from "zustand";

export interface AppState {
  page: number;
  orderBy: string;
  sortBy: string;
  numberOfItems: string | number;
  setPage: (page: number) => void;
  setOrderBy: (orderBy: string) => void;
  setSortBy: (sortBy: string) => void;
  setNumberOfItems: (numberOfItems: string | number) => void;
}

export const useAppStateStore = create<AppState>((set) => ({
  page: 1,
  orderBy: "desc",
  sortBy: "popular",
  numberOfItems: 10,
  setPage: (page: number) => set({ page }),
  setOrderBy: (orderBy: string) => set({ orderBy }),
  setSortBy: (sortBy: string) => set({ sortBy }),
  setNumberOfItems: (numberOfItems: string | number) => set({ numberOfItems }),
}));
