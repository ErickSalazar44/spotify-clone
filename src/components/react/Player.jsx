import { usePlayerStore } from "@/store/playerStore";
import { Slider } from "@/components/react/Slider";
import { useEffect, useRef, useState } from "react";

export const Pause = ({ w = 16, h = 16 }) => (
    <svg
        role='img'
        height={h}
        width={w}
        aria-hidden='true'
        viewBox='0 0 16 16'
        fill='currentColor'
    >
        <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
    </svg>
);

export const Play = ({ w = 16, h = 16 }) => (
    <svg
        role='img'
        height={h}
        width={w}
        aria-hidden='true'
        viewBox='0 0 16 16'
        fill='currentColor'
    >
        <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
    </svg>
);

const CurrentSong = ({ image, title, artists }) => {
    return (
        <div className='flex items-center gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14 bg-base rounded-md shadow-lg overflow-hidden'>
                <img src={image} alt={title} />
            </picture>
            <div className='flex flex-col justify-center'>
                <h3 className='font-medium text-sm '>{title}</h3>
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
    );
};

const IconVolumenMute = () => (
    <svg
        role='presentation'
        height='16'
        width='16'
        aria-hidden='true'
        aria-label='Volumen apagado'
        id='volume-icon'
        viewBox='0 0 16 16'
        fill='currentColor'
    >
        <path d='M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z'></path>
        <path d='M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
    </svg>
);

const IconVolumenFull = () => (
    <svg
        role='presentation'
        height='16'
        width='16'
        aria-hidden='true'
        aria-label='Volumen alto'
        id='volume-icon'
        viewBox='0 0 16 16'
        fill='currentColor'
    >
        <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
        <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
    </svg>
);

const IconVolumenMedio = () => (
    <svg
        role='presentation'
        height='16'
        width='16'
        aria-hidden='true'
        aria-label='Volumen medio'
        id='volume-icon'
        viewBox='0 0 16 16'
        fill='currentColor'
    >
        <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z'></path>
    </svg>
);

const IconVolumenBajo = () => (
    <svg
        role='presentation'
        height='16'
        width='16'
        aria-hidden='true'
        aria-label='Volumen bajo'
        id='volume-icon'
        viewBox='0 0 16 16'
        fill="currentColor"
    >
        <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
    </svg>
);

const VolumenControl = () => {
    // ESTADO GLOBAL PARA MANEJAR VOLUMEN
    const volumen = usePlayerStore((state) => state.volumen);
    const setVolumen = usePlayerStore((state) => state.setVolumen);

    // VolumenGuardado 
    const previusVolumenRef = useRef(volumen)

    const handleButtonMute = () => {
        if (volumen < 0.1) {
            setVolumen(previusVolumenRef.current)
        } else {
            previusVolumenRef.current = volumen
            setVolumen(0)
        }
    }

    return (
        <div className='flex justify-center gap-x-2'>
            <button
                onClick={handleButtonMute}
                className='text-gray w-8 h-8 grid place-content-center'>
                {volumen > 0.7 && volumen <= 1 && <IconVolumenFull />}
                {volumen > 0.3 && volumen <= 0.7 && <IconVolumenMedio />}
                {volumen >= 0.01 && volumen <= 0.3 && <IconVolumenBajo />}
                {volumen === 0 && <IconVolumenMute />}
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
    const [currentTime, setcurrentTime] = useState(0)

    useEffect(() => {
        audio?.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio?.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])
    

    const handleTimeUpdate = () => {
        setcurrentTime(audio.current.currentTime)
    }

    // formatear tiempo de la musica 
    const formatTime = time => {
        
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        const duracion = `${minutes}:${seconds.toString().padStart(2, '0')}`

        return duracion
    }

    // duracion de la musica 
    const duration = audio?.current?.duration ?? 0

    return (
        <div className="flex gap-x-2 text-xs">
            <span className="text-txtgray w-10 text-right">{formatTime(currentTime)}</span>
            <Slider
                defaultValue={[0]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className='w-[400px]'
                value={[currentTime]}
                onValueChange={(value) => {
                    audio.current.currentTime = value
                }}
            />
            <span className="text-txtgray w-10">
                {
                    duration ? formatTime(duration) : '0:00'
                }
            </span>
        </div>
    )
}


const Player = () => {
    // constrols -> ESTADO GLOBAL

    const { isPlaying, setIsPlaying, currentMusic, volumen } = usePlayerStore(
        (state) => state
    );

    // referencia del audio
    const audioRef = useRef(null);
    // referencia volumen
    const volumeRef = useRef(1);

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
                        {isPlaying ? <Play /> : <Pause />}
                    </button>
                    <audio ref={audioRef}></audio>
                </div>
                <SongControl audio={audioRef}/>               
            </div>

            {/* volumen */}
            <div className='flex items-center'>
                <VolumenControl />
            </div>
        </div>
    );
};

export default Player;
