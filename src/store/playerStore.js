import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    // ESTADO PARA PAUSAR MUSICA
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),

    // ESTADO PARA REPRODUCIR MUSICA
    currentMusic: { playlist: null, song: null, songs: [] },
    setCurrentMusic: (currentMusic) => set({ currentMusic }),

    // ESTADO PARA CONTROLAR EL VOLUMEN
    volumen: 1,
    setVolumen: (volumen) => set({ volumen }),
}));
