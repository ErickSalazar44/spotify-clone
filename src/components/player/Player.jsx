import { usePlayerStore } from "@/store/playerStore"; // Estado global
import { useEffect, useRef } from "react"; // Hooks
// Componentes
import CurrentSong from "./CurrentSong";
import VolumenControl from "./VolumenControl";
import SongControl from "./SongControl"
// icons
import { Pause, Play } from "@/icons/react/PausePlay";
import { PreviousSongIcon, NextSongIcon } from '@/icons/react/ControlSongIcons'


const Player = ({id}) => {
    // constrols -> ESTADO GLOBAL
    const { isPlaying, setIsPlaying, currentMusic, volumen, setCurrentMusic } = usePlayerStore((state) => state);

    // referencia del audio
    const audioRef = useRef(null);
    
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

    // La cancion que se va reproducir es la que esta almacenada en el estado global
    useEffect(() => {
        const { song, playlist } = currentMusic;

        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`;
            audioRef.current.src = src;
            audioRef.current.volume = volumen;
            audioRef.current.play();
        }
    }, [currentMusic]);

    // btn play pausa
    const handleClick = () => {

        // si no hay ninguna musica seleccionada 
        if (currentMusic.playlist === null) {
            // si el user se encuentra en una page se reproducira la primera cancion de ese album 
            // caso contrario se reproduce el primer album 
            const identificador = id ? Number(id) : 1


            fetch(`/api/get-info-playlist.json?id=${identificador}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data 
                setIsPlaying(true)
                setCurrentMusic( {songs, playlist, song: songs[0]})
            })
        }

        setIsPlaying(!isPlaying);
    };

    // btn previous song 
    const handlePreviousSong = () => {
        if (currentMusic.playlist === null) return
        const previousIndex = currentMusic.song.id - 2
        
        if (previousIndex >= 0) {
            const previousSong = currentMusic.songs[previousIndex]
            setCurrentSong(previousSong)
        }
    };

    // btn next song
    const handleNextSong = () => {
        if (currentMusic.playlist === null) return
        const nextIndex = currentMusic.song.id 

        if (nextIndex < currentMusic.songs.length) {
            const nextSong = currentMusic.songs[nextIndex]
            setCurrentSong(nextSong)
        } else {
            // si llego al final mostrar la primera cancion 
            const song = currentMusic.songs[0]
            setCurrentSong(song)
        }
    };

    // Actualizar cancion
    const setCurrentSong = ( song ) => {
        const newCurrentMusic = { ...currentMusic, song }
        setCurrentMusic(newCurrentMusic)
    }


    // Manejador de finalizacion de la cancion 
    const handleSongEnd = () => {
        if (currentMusic.playlist) {
            const currentIndex = currentMusic.song.id - 1

            if (currentIndex !== -1) {
                // Obtener el índice de la siguiente canción
                const nextIndex = (currentIndex + 1) % currentMusic.songs.length;

                // Obtener la siguiente canción
                const nextSong = currentMusic.songs[nextIndex];

                // Actualizar la canción actual en el estado global
                setCurrentSong(nextSong);
            }
        }
    }
    
    useEffect(() => {
        audioRef.current.addEventListener("ended", handleSongEnd)
        return () => {
            audioRef.current.removeEventListener("ended", handleSongEnd);
        }
    }, [audioRef, currentMusic])
    


    return (
        <div className='flex justify-between w-full px-2 z-50'>
            {/* informacion  */}
            <CurrentSong {...currentMusic.song} />

            {/* reproductor  */}
            <div className='flex flex-col justify-center items-center gap-1 flex-[0_0_400px]'>
                <div className="flex items-center gap-6">
                    <button 
                        className="text-white opacity-70 hover:opacity-100" 
                        onClick={handlePreviousSong}
                    >
                        <PreviousSongIcon/>
                    </button>
                    <div className='flex justify-center'>
                        <button
                            className='bg-white text-black rounded-full p-2 hover:scale-105'
                            onClick={handleClick}
                        >
                            {!isPlaying ? <Play /> : <Pause />}
                        </button>
                        <audio ref={audioRef}></audio>
                    </div>
                    <button onClick={handleNextSong} className="text-white opacity-70 hover:opacity-100">
                        <NextSongIcon/>
                    </button>
                </div>
                <SongControl audio={audioRef} />
            </div>

            {/* volumen */}
            <div className='flex flex-1 justify-end items-center'>
                <VolumenControl />
            </div>
        </div>
    );
};

export default Player;
