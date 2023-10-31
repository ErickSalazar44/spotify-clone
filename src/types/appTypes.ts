import type { ReactNode } from 'react';
import { type Playlist, type Song } from '../lib/data';

// ESTADO GLOBAL
interface CurrenMusic {
    playlist: Playlist | null ;
    song: Song | null;
    songs: Song[] | [];
}

export type PlayerStoreState = {
    isPlaying: boolean;
    setIsPlaying : (isPlaying: boolean) => void;
    currentMusic: CurrenMusic;
    volumen: number
    setCurrentMusic: (currentMusic: CurrenMusic) => void
    setVolumen : (volumen: number) => void
}

// FUNCTION
export type DoubleClickCardHandler  = (song: Song, isSong: boolean, isAlbum: boolean) => void

// [ID].astro
export interface MusicTableRowProps {
    song: Song;
    index: number;
    handleDoubleClick: DoubleClickCardHandler;
}

// ICON MOVE
export type UseSoundMove  = (id: number, forId: boolean) => boolean

// Nav 
export interface NavigationButtonsProps {
    backDisable: boolean;
    indexPage: boolean;
    children: ReactNode;
}
