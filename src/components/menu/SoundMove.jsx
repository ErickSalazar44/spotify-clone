// estado global
import { usePlayerStore } from "@/store/playerStore";
// react 
import { useEffect, useState } from 'react'

const SoundMove = ({ id, children }) => {
    // Song en reproduccion
    const { song } = usePlayerStore((state) => state.currentMusic);
    const isPlaying = usePlayerStore((state) => state.isPlaying);

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(id == song?.albumId && isPlaying)
    }, [id, song, isPlaying ])
    

    return (
        <div className={`absolute top-3 right-3 gap-[2px] items-end justify-center w-4 h-4 overflow-hidden ${ visible ? 'flex' : 'hidden'}`}>
            {children}
        </div>
    );
};

export default SoundMove;
