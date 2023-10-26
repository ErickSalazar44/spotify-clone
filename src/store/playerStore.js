import { create } from "zustand";

export const usePlayerStore = create((set) => ({
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
