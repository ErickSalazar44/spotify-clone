import { create } from "zustand";

export const useSideBarLeftStore = create((set) => ({
    // POR DEFECTO EL SIDEBARLEFT COMIENZA EXTENDIDO
    isCollapsed: false,
    toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
