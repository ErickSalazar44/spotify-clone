import { Pause, Play } from "@/icons/react/PausePlay";
import usePlaylistPlaybackControl from "@/hooks/usePlaylistPlaybackControl";

const CardPlayButton = ({ id, size = "3rem" }) => {

    const [isPlayingPlaylist, handleClick] = usePlaylistPlaybackControl(id)

    return (
        <button
            className={`shadow-[0_4px_90px_rgba(0,0,0,.5)] rounded-full bg-green grid place-content-center text-black hover:scale-[1.05] transition-transform`}
            aria-label="Reproducir música"
            onClick={handleClick}
            style={{ width: size, height: size }}
        >
            {isPlayingPlaylist ? (
                <Pause w={20} h={20} />
            ) : (
                <Play w={20} h={20} />
            )}
        </button>
    );
};

export default CardPlayButton;
