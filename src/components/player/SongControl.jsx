import { Slider } from "@/components/menu/Slider"; // Librerias
import { useEffect, useState } from "react";

const SongControl = ({ audio }) => {
    const [currentTime, setcurrentTime] = useState(0);

    useEffect(() => {
        audio?.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio?.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    const handleTimeUpdate = () => {
        setcurrentTime(audio.current.currentTime);
    };

    // formatear tiempo de la musica
    const formatTime = (time) => {
        if (time === null) return `0:00`;

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);
        const duracion = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        return duracion;
    };

    // duracion de la musica
    const duration = audio?.current?.duration ?? 0;

    return (
        <div className='flex gap-x-2 text-xs'>
            <span className='text-txtgray w-10 text-right'>
                {formatTime(currentTime)}
            </span>
            <Slider
                defaultValue={[0]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className='w-[120px] md:w-[150px] lg:w-[320px] xl:w-[400px] 2xl:w-[500px]'
                value={[currentTime]}
                onValueChange={(value) => {
                    audio.current.currentTime = value;
                }}
            />
            <span className='text-txtgray w-10'>
                {duration ? formatTime(duration) : "0:00"}
            </span>
        </div>
    );
};

export default SongControl;