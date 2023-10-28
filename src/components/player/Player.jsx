import { usePlayerStore } from "@/store/playerStore"; // Estado global
import { useEffect, useRef } from "react"; // Hooks
// Componentes
import CurrentSong from "./CurrentSong";
import VolumenControl from "./VolumenControl";
import SongControl from "./SongControl";
// icons
import { Pause, Play } from "@/icons/react/PausePlay";
import { PreviousSongIcon, NextSongIcon } from "@/icons/react/ControlSongIcons";
import usePlayerList from "@/hooks/usePlayerList";

const Player = ({ id }) => {
    // constrols -> ESTADO GLOBAL
    const { isPlaying, setIsPlaying, currentMusic, volumen, setCurrentMusic } =
        usePlayerStore((state) => state);

    const loadMusic = usePlayerList(); // Hook

    const audioRef = useRef(null); // referencia del audio

    // Se reproducira la cancion almacenada en el estado global en el caso no haya ninguna se hara una llamada a las canciones del album seleccionado
    useEffect(() => {
        const { song, playlist } = currentMusic;

        if (song && playlist) {
            const src = `/music/${song?.albumId}/0${song.id}.mp3`;
            // Establecer la fuente de audio en el nuevo elemento
            audioRef.current.src = src;
            audioRef.current.addEventListener("canplaythrough", async () => {
                await audioRef.current.play();
            });

        }
    }, [currentMusic]);

    // Manejador de Pause y play
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Manejador de volumen
    useEffect(() => {
        audioRef.current.volume = volumen;
    }, [volumen]);

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

    // btn previous song
    const handlePreviousSong = () => {
        if (currentMusic.playlist === null) return;
        const previousIndex = currentMusic.song.id - 2;

        if (previousIndex >= 0) {
            const previousSong = currentMusic.songs[previousIndex];
            setCurrentSong(previousSong);
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
    };

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

    return (
        <div className='flex justify-between w-full px-2 z-50'>
            {/* informacion  */}
            <CurrentSong {...currentMusic.song} />

            {/* reproductor  */}
            <div className='flex flex-col justify-center items-center gap-1 flex-1 lg:flex-[0_0_400px]'>
                <div className='flex items-center gap-6'>
                    <button
                        className='cursor-none sm:cursor-pointer text-white opacity-70 hover:opacity-100'
                        aria-label="Ir a la musica anterior"
                        onClick={handlePreviousSong}
                    >
                        <PreviousSongIcon />
                    </button>
                    <div className='flex justify-center'>
                        <button
                            className='cursor-none sm:cursor-pointer bg-white text-black rounded-full p-2 hover:scale-105'
                            aria-label='Reproducir musica'
                            onClick={handlePlayPause}
                        >
                            {!isPlaying ? <Play clases={'w-3 h-3 sm:w-4 sm:h-4'}/> : <Pause clases={'w-3 h-3 sm:w-4 sm:h-4'}/>}
                        </button>
                        <audio ref={audioRef} preload='auto'></audio>
                    </div>
                    <button
                        onClick={handleNextSong}
                        aria-label="Ir a la musica siguiente"
                        className='cursor-none sm:cursor-pointer text-white opacity-70 hover:opacity-100'
                    >
                        <NextSongIcon />
                    </button>
                </div>
                <SongControl audio={audioRef} />
            </div>

            {/* volumen */}
            <div className='flex sm:flex-1 justify-end items-center'>
                <VolumenControl />
            </div>
        </div>
    );
};

export default Player;
