import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useState } from "react";
import usePlayerList from "@/hooks/usePlayerList";

const usePlaylistPlaybackControl = (id : number) => {
    // constrols -> ESTADO GLOBAL
    const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
        (state) => state
    );

    const loadMusic = usePlayerList();
    // Estado local para determinar si la playlist actual está reproduciéndose
    const [isPlayingPlaylist, setIsPlayingPlaylist] = useState(false);

    useEffect(() => {
        // Evitar que se renderice cuando aun no llega la informacion
        if (currentMusic.playlist === null) return;

        if (isPlaying && id === currentMusic?.playlist?.id) {
            // Actualizar el botón de reproducción/pausa
            return setIsPlayingPlaylist(true);
        }
        setIsPlayingPlaylist(isPlaying && currentMusic?.playlist?.id === id);
    }, [isPlaying, currentMusic]);

    // Función para manejar la reproducción de la playlist
    const togglePlayback = () => {
        // Actualizar el ícono de reproducción/pausa
        if (id === currentMusic?.playlist?.id) {
            setIsPlaying(!isPlaying);
            setIsPlayingPlaylist(false);
        } else {
            loadMusic(id);
            setIsPlayingPlaylist(isPlaying);
        }
    };

    return [isPlayingPlaylist, togglePlayback];
};

export default usePlaylistPlaybackControl;
