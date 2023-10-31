import { usePlayerStore } from "@/store/playerStore"; // estado global
import usePlayerList from "@/hooks/usePlayerList"; // hook
import type { DoubleClickCardHandler } from "@/types/appTypes"; // type

const useDoubleClickHandler = () => {
    // Estado global
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = usePlayerStore((state) => state);

    const loadMusic = usePlayerList() // Hook
    
    // DoubleClick -> select song
    const handleDoubleClick: DoubleClickCardHandler  = (song, isSongSelected, isAlbumSelected ) => {

        // si no hay datos precargados || o el album es distinto -> hacer peticion de las songs
        if (currentMusic.playlist === null || !isAlbumSelected) {
            return loadMusic(song.albumId, song.id);
        } 

        // si la cancion se esta reproduciendo no volvera actualizar
        if (isPlaying && isSongSelected && isAlbumSelected ) return

        // si el album es el mismo y esta reproduciendo solo tenemos que cambiar la musica
        const newCurrentMusic = { ...currentMusic, song };
        setCurrentMusic(newCurrentMusic);

        // si el album es el mismo y no esta reproduciendo tenemos que dar play y actualziar la musica 
        if (isAlbumSelected && !isPlaying) {
            setIsPlaying(true) 
        }
    };

    return handleDoubleClick

}

export default useDoubleClickHandler