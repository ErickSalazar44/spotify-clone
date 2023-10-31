import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/playerStore';


const useAudioPlayer = () => {

    const { isPlaying, currentMusic, volumen } = usePlayerStore((state) => state);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Cargar y reproducir la música
    useEffect(() => {
        const { song, playlist } = currentMusic;

        if (song && playlist && audioRef.current) {

            const src = `/music/${song?.albumId}/0${song.id}.mp3`;
            // Establecer la fuente de audio en el nuevo elemento
            audioRef.current.src = src;
            audioRef.current.addEventListener("canplaythrough", async () => {
                await audioRef.current!.play();
            });

        }
    }, [currentMusic]);

    // Manejador de volumen y cambio de pause a play
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            audioRef.current.volume = volumen;
        }
    }, [isPlaying,volumen]);

    return audioRef
}

export default useAudioPlayer