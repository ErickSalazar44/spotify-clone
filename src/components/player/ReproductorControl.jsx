import { usePlayerStore } from "@/store/playerStore"; // Estado global
import SongControl from "./SongControl"; // Componentes
// icons
import { Pause, Play } from "@/icons/react/PausePlay";
import { PreviousSongIcon, NextSongIcon } from "@/icons/react/ControlSongIcons";
// Hooks
import usePlayerList from "@/hooks/usePlayerList";
import { useEffect } from "react";

const ReproductorControl = ({ audioRef, id }) => {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
        usePlayerStore((state) => state);
    const loadMusic = usePlayerList(); // Hook

    // Actualizar cancion
    const setCurrentSong = (song) => {
        const newCurrentMusic = { ...currentMusic, song };
        setCurrentMusic(newCurrentMusic);
    };

    // Manejador de finalizacion de la cancion
    const handleSongEnd = () => {
        if (currentMusic.playlist) {
            const currentIndex = currentMusic.song.id - 1;

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

    useEffect(() => {
        audioRef.current.addEventListener("ended", handleSongEnd);
        return () => {
            audioRef.current.removeEventListener("ended", handleSongEnd);
        };
    }, [audioRef, currentMusic]);

    // btn previous song
    const handlePreviousSong = () => {
        if (currentMusic.playlist === null) return;
        const previousIndex = currentMusic.song.id - 2;
        if (previousIndex >= 0) {
            const previousSong = currentMusic.songs[previousIndex];
            setCurrentSong(previousSong);
        }
        setIsPlaying(true)
    };

    // btn play pausa
    const handlePlayPause = async () => {
        // si no hay ninguna musica seleccionada
        if (currentMusic.playlist === null) {
            const identificador = id ? Number(id) : 1;
            loadMusic(identificador);
        }

        try {
            if (isPlaying) {
                await audioRef.current.pause();
            } else {
                await audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error("Error al reproducir/pausar el audio:", error);
        }
    };

    // btn next song
    const handleNextSong = () => {
        if (currentMusic.playlist === null) return;
        const nextIndex = currentMusic?.song?.id;

        if (nextIndex < currentMusic.songs.length) {
            const nextSong = currentMusic.songs[nextIndex];
            setCurrentSong(nextSong);
        } else {
            // si llego al final mostrar la primera cancion
            const song = currentMusic.songs[0];
            setCurrentSong(song);
        }
        setIsPlaying(true)
    };

    return (
        <div className='hidden sm:flex sm:flex-col justify-center items-center sm:gap-1 sm:flex-1 lg:gap-2'>
            <div className='flex items-center gap-6'>
                <button
                    className='hidden sm:block text-white opacity-70 hover:opacity-100'
                    aria-label='Ir a la musica anterior'
                    onClick={handlePreviousSong}
                >
                    <PreviousSongIcon />
                </button>
                <div className='flex justify-center'>
                    <button
                        className='cursor-auto sm:cursor-pointer bg-white text-black rounded-full p-2 hover:scale-105'
                        aria-label='Reproducir musica'
                        onClick={handlePlayPause}
                    >
                        {!isPlaying ? (
                            <Play clases={"w-4 h-4"} />
                        ) : (
                            <Pause clases={"w-4 h-4"} />
                        )}
                    </button>
                </div>
                <button
                    onClick={handleNextSong}
                    aria-label='Ir a la musica siguiente'
                    className='hidden sm:block text-white opacity-70 hover:opacity-100'
                >
                    <NextSongIcon />
                </button>
            </div>
            <SongControl audio={audioRef} />
        </div>
    );
};

export default ReproductorControl;
