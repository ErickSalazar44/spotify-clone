import { Pause, Play } from "./react/Player";
import { usePlayerStore } from "@/store/playerStore"; 

const CardPlayButton = ({ id, size = '3rem' }) => {
    // constrols -> ESTADO GLOBAL
    const { 
        currentMusic, 
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic 
    } = usePlayerStore((state) => state);

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(!isPlaying)
            return 
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data 
                setIsPlaying(true)
                setCurrentMusic( {songs, playlist, song: songs[0]})
            })
    }

    


    return (
        <button 
            className={`rounded-full bg-green grid place-content-center text-black hover:scale-[1.05] transition-transform`}
            onClick={handleClick}
            style={{width: size, height: size,}}
        >
            {isPlayingPlaylist ? <Pause w={20} h={20} /> : <Play w={20} h={20} />}
        </button>
    );
};

export default CardPlayButton;
