import { usePlayerStore } from "@/store/playerStore"; // Estado global
import { useEffect, useRef } from "react"; // Hooks
// Componentes
import CurrentSong from "./CurrentSong";
import VolumenControl from "./VolumenControl";
import ReproductorControl from "./ReproductorControl"


const Player = ({ id }) => {
    // constrols -> ESTADO GLOBAL
    const { isPlaying, currentMusic, volumen, setCurrentMusic } =
        usePlayerStore((state) => state);

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


    return (
        <div className='flex sm:justify-between w-full px-4 sm:px-2 z-50'>
            {/* I N F O R M A C I O N */}
            <CurrentSong {...currentMusic.song} />

            {/* R E P R O D U C T O R */}
            <ReproductorControl audioRef={audioRef} id={id} />
            <audio ref={audioRef} preload='auto'></audio>

            {/* V O L U M E N */}
            <VolumenControl />
        </div>
    );
};

export default Player;
