import { usePlayerStore } from "@/store/playerStore"; // estado global
import usePlayerList from "@/hooks/usePlayerList"; // hook
import type { Song } from "@/lib/data"; // tipado

interface Props {
    songs: Song[] | null;
}

const useDoubleClickHandler = (songs: Props) => {
    // Estado global
    const { 
        currentMusic, 
        setCurrentMusic, 
        isPlaying, 
        setIsPlaying } = usePlayerStore((state) => state);

    const loadMusic = usePlayerList() // Hook
    
    // DoubleClick -> select song
    const handleDoubleClick = (
        song: Song, 
        isSongSelected: boolean, 
        isAlbumSelected: boolean ) => {

        // si no hay datos precargados -> hacer la llamada de las songs
        if (currentMusic.playlist === null) {
            loadMusic(song.albumId, song.id);
        } 

        // si la cancion se esta reproduciendo no volvera actualizar
        if (isPlaying && isSongSelected && isAlbumSelected ) return

        // Actualizar la playlist
        const newCurrentMusic = { ...currentMusic, song, songs };
        setCurrentMusic(newCurrentMusic);

        if (!isPlaying) return setIsPlaying(!isPlaying)
    };

    return handleDoubleClick

}

export default useDoubleClickHandler