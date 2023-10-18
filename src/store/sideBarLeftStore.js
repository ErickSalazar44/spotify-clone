import { create } from "zustand";

export const useSideBarLeftStore = create((set) => ({
    isCollapsed: false, // por defecto Comienza extend
    toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
