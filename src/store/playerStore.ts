import type { PlayerStoreState } from "@/types/appTypes";
import { create } from "zustand";

export const usePlayerStore = create<PlayerStoreState>((set) => ({
    // PAUSAR MUSICA
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),

    // REPRODUCIR MUSICA
    currentMusic: { playlist: null, song: null, songs: [] },
    setCurrentMusic: (currentMusic) => set({ currentMusic }),

    // CONTROLAR EL VOLUMEN
    volumen: 1,
    setVolumen: (volumen) => set({ volumen }),
}));
