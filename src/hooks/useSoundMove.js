// estado global
import { usePlayerStore } from "@/store/playerStore";
// react
import { useEffect, useState } from "react";

// id de la url, forId para distinguir si es song o albumId
const useSoundMove = (id, forId) => {
    // Song en reproduccion
    const { song } = usePlayerStore((state) => state.currentMusic);
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (forId) {
            return setVisible(Number(id) === song?.id && isPlaying);
        }
        setVisible(Number(id) === song?.albumId && isPlaying);
    }, [id, song, isPlaying]);

    return visible;
};

export default useSoundMove;
