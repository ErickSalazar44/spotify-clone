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
        if (currentMusic.playlist === null || !isAlbumSelected) {
            // Actualiza el álbum y las canciones en el estado global
            setCurrentMusic({ playlist:song.album, song, songs });
            loadMusic(song.albumId, song.id);
        } 

        // si la cancion se esta reproduciendo no volvera actualizar
        if (isPlaying && isSongSelected && isAlbumSelected ) return

        if (isAlbumSelected) {
            const newCurrentMusic = { ...currentMusic, song, songs };
            setCurrentMusic(newCurrentMusic);
            setIsPlaying(true)
        }
    };

    return handleDoubleClick

}

export default useDoubleClickHandler