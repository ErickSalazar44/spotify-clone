// estado global
import { usePlayerStore } from "@/store/playerStore";
import type { UseSoundMove } from "@/types/appTypes";
// react
import { useEffect, useState } from "react";

// id de la url, forId para distinguir si es song o albumId
const useSoundMove: UseSoundMove = (id, forId) => {
    // Song en reproduccion
    const { song } = usePlayerStore((state) => state.currentMusic);
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (forId) {
            return setVisible(id === song?.id && isPlaying);
        }
        setVisible(id === song?.albumId && isPlaying);
    }, [id, song, isPlaying]);

    return visible;
};

export default useSoundMove;
