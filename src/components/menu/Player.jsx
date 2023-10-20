import { usePlayerStore } from "@/store/playerStore"; // Estado global

import { Slider } from "@/components/menu/Slider"; // Librerias

import { useEffect, useRef, useState } from "react"; // Hooks

// Componentes
import { Pause, Play } from "@/icons/react/PausePlay";
import {
    IconVolumenMute,
    IconVolumenFull,
    IconVolumenMedio,
    IconVolumenBajo,
} from "@/icons/react/VolumeControl";

const CurrentSong = ({ image, title, artists }) => {
    return (
        <div className='flex items-center gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14  rounded-md shadow-lg overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='object-cover aspect-square'
                />
            </picture>
            <div className='flex flex-col justify-center'>
                <h3 className='font-medium text-sm '>{title}</h3>
                <div className='flex flex-wrap gap-1'>
                    {artists?.map((artist) => (
                        <a
                            key={artist}
                            href='#'
                            className="text-txtgray text-xs font-light relative transition-colors after:content-[''] after:w-full hover:after:h-[1px] after:bg-white after:left-0 after:absolute after:bottom-0 hover:text-white after:transition-colors"
                        >
                            {artist}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const VolumenControl = () => {
    // ESTADO GLOBAL PARA MANEJAR VOLUMEN
    const volumen = usePlayerStore((state) => state.volumen);
    const setVolumen = usePlayerStore((state) => state.setVolumen);

    // VolumenGuardado
    const previusVolumenRef = useRef(volumen);

    const handleButtonMute = () => {
        if (volumen < 0.1) {
            setVolumen(previusVolumenRef.current);
        } else {
            previusVolumenRef.current = volumen;
            setVolumen(0);
        }
    };

    return (
        <div className='flex justify-center gap-x-2'>
            <button
                onClick={handleButtonMute}
                className='text-gray w-8 h-8 grid place-content-center'
            >
                {volumen <= 0 ? (
                    <IconVolumenMute />
                ) : volumen < 0.3 ? (
                    <IconVolumenBajo />
                ) : volumen < 0.7 ? (
                    <IconVolumenMedio />
                ) : (
                    <IconVolumenFull />
                )}
            </button>
            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                className='w-[93px]'
                value={[volumen * 100]}
                onValueChange={(value) => {
                    const [newValue] = value;
                    const volumenValue = newValue / 100;
                    setVolumen(volumenValue);
                }}
            />
        </div>
    );
};

const SongControl = ({ audio }) => {
    const [currentTime, setcurrentTime] = useState(0);

    useEffect(() => {
        audio?.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio?.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const handleTimeUpdate = () => {
        setcurrentTime(audio.current.currentTime);
    };

    // formatear tiempo de la musica
    const formatTime = (time) => {
        if (time == null) return `0:00`;

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);

        const duracion = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        return duracion;
    };

    // duracion de la musica
    const duration = audio?.current?.duration ?? 0;

    return (
        <div className='flex gap-x-2 text-xs'>
            <span className='text-txtgray w-10 text-right'>
                {formatTime(currentTime)}
            </span>
            <Slider
                defaultValue={[0]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className='w-[500px]'
                value={[currentTime]}
                onValueChange={(value) => {
                    audio.current.currentTime = value;
                }}
            />
            <span className='text-txtgray w-10'>
                {duration ? formatTime(duration) : "0:00"}
            </span>
        </div>
    );
};

const Player = () => {
    // constrols -> ESTADO GLOBAL
    const { isPlaying, setIsPlaying, currentMusic, volumen } = usePlayerStore(
        (state) => state
    );

    // referencia del audio
    const audioRef = useRef(null);
    
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volumen;
    }, [volumen]);

    useEffect(() => {
        const { song, playlist, songs } = currentMusic;

        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`;
            audioRef.current.src = src;
            audioRef.current.volume = volumen;
            audioRef.current.play();
        }
    }, [currentMusic]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='flex justify-between w-full px-4 z-50'>
            {/* informacion  */}
            <div>
                <CurrentSong {...currentMusic.song} />
            </div>

            {/* reproductor  */}
            <div className='grid place-content-center gap-1 flex-1'>
                <div className='flex justify-center'>
                    <button
                        className='bg-white text-black rounded-full p-2'
                        onClick={handleClick}
                    >
                        {!isPlaying ? <Play /> : <Pause />}
                    </button>
                    <audio ref={audioRef}></audio>
                </div>
                <SongControl audio={audioRef} />
            </div>

            {/* volumen */}
            <div className='flex items-center'>
                <VolumenControl />
            </div>
        </div>
    );
};

export default Player;
