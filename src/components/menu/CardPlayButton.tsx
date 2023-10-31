import { Pause, Play } from "@/icons/react/PausePlay";
import usePlaylistPlaybackControl from "@/hooks/usePlaylistPlaybackControl";

interface Props {
    id: number;
    size?: string;
}

const CardPlayButton = ({ id, size = "3rem" } : Props) => {

    const [isPlayingPlaylist, handleClick] = usePlaylistPlaybackControl(id)

    return (
        <button
            className={`cursor-auto sm:cursor-pointer shadow-btnPlay rounded-full bg-green grid place-content-center text-black hover:scale-[1.05] transition-transform`}
            aria-label="Reproducir música"
            onClick={handleClick as () => void}
            style={{ width: size, height: size , viewTransitionName: `btn-${id}`}}
        >
            {isPlayingPlaylist ? (<Pause w={20} h={20} />) : (<Play w={20} h={20} />)}
        </button>
    );
};

export default CardPlayButton;
