// useSongControl.js
import { useEffect, useState} from 'react';

type AudioRefType = {
    current: HTMLAudioElement | null;
};

const useSongControl = (audioRef: AudioRefType) => {

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
            }
        };

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [audioRef]);

    const formatTime = (time: number) => {
        if (time === null) return '0:00';

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);
        const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        return duration;
    };

    const duration = audioRef?.current?.duration ?? 0;

    const handleSliderChange = (value: number[]) => {
        if (audioRef?.current) {
            audioRef.current.currentTime = value[0];
        }
    };

    return {
        currentTime,
        formatTime,
        duration,
        handleSliderChange,
    };
};

export default useSongControl;