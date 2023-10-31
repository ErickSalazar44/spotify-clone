import { usePlayerStore } from "@/store/playerStore";
import usePlayerList from "./usePlayerList";
import { useEffect, type RefObject } from "react";
import type { Song } from "@/lib/data";

const useReproductorControl = (audioRef: RefObject<HTMLAudioElement>, id: number) => {

    const {
        isPlaying,
        setIsPlaying,
        currentMusic,
        setCurrentMusic
    } = usePlayerStore((state) => state);


    const loadMusic = usePlayerList(); // Hook

    // Actualizar cancion
    const setCurrentSong = (song: Song) => {
        const newCurrentMusic = { ...currentMusic, song };
        setCurrentMusic(newCurrentMusic);
    };

    // Manejador de finalizacion de la cancion
    const handleSongEnd = () => {
        if (currentMusic.playlist) {
            const currentIndex = (currentMusic?.song?.id ?? - 1) - 1;

            if (currentIndex !== -1) {
                // Obtener el índice de la siguiente canción
                const nextIndex =
                    (currentIndex + 1) % currentMusic.songs.length;

                // Obtener la siguiente canción
                const nextSong = currentMusic.songs[nextIndex];

                // Actualizar la canción actual en el estado global
                setCurrentSong(nextSong);
            }
        }
    };

    // btn previous song
    const handlePreviousSong = () => {
        if (currentMusic.playlist === null) return;

        const previousIndex = (currentMusic?.song?.id ?? 0) - 2;

        if (previousIndex >= 0) {
            const previousSong = currentMusic.songs[previousIndex];
            setCurrentSong(previousSong);
        }
        setIsPlaying(true)
    };

    // btn play pausa
    const handlePlayPause = () => {
        // si no hay ninguna musica seleccionada
        if (currentMusic.playlist === null) {
            const identificador = id ? id : 1;
            loadMusic(identificador);
        }

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    // btn next song
    const handleNextSong = () => {
        if (currentMusic.playlist === null) return;
        const nextIndex = currentMusic?.song?.id;

        if (nextIndex && nextIndex < currentMusic.songs.length) {
            const nextSong = currentMusic.songs[nextIndex];
            setCurrentSong(nextSong);
        } else {
            // si llego al final mostrar la primera cancion
            const song = currentMusic.songs[0];
            setCurrentSong(song);
        }
        setIsPlaying(true)
    };

    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.addEventListener("ended", handleSongEnd);
        }

        return () => {
            if (audioRef?.current) {
                audioRef.current.removeEventListener("ended", handleSongEnd);
            };
        }

    }, [audioRef, currentMusic]);


    return {
        handlePreviousSong,
        handlePlayPause,
        handleNextSong
    }

}

export default useReproductorControl