import { usePlayerStore } from "@/store/playerStore"; // Estado global
import SongControl from "./SongControl"; // Componentes
// icons
import { Pause, Play } from "@/icons/react/PausePlay";
import { PreviousSongIcon, NextSongIcon } from "@/icons/react/ControlSongIcons";
// Hooks
import useReproductorControl from "@/hooks/useReproductorControl";
import useAudioPlayer from "@/hooks/useAudioPlayer";



const ReproductorControl = ({ id }: {id: number} ) => {
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const audioRef = useAudioPlayer()

    const {handlePreviousSong, handlePlayPause, handleNextSong} = useReproductorControl(audioRef, id)


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
            <SongControl audioRef={audioRef}/>
            <audio ref={audioRef} preload='auto'></audio>
        </div>
    );
};

export default ReproductorControl;
