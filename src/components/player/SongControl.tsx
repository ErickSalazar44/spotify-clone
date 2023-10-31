import { Slider } from "@/components/menu/Slider"; // Librerias
import useSongControl from "@/hooks/useSongControl";
import { type RefObject } from "react";

interface SongControlProps {
    audioRef: RefObject<HTMLAudioElement | null>;
}
const SongControl = ({audioRef}: SongControlProps) => {

    const { currentTime, formatTime, duration, handleSliderChange } = useSongControl(audioRef);

    return (
        <div className='hidden sm:flex gap-x-2 text-xs'>
            <span className='text-txtgray w-10 text-right'>
                {formatTime(currentTime)}
            </span>
            <Slider
                defaultValue={[0]}
                max={duration}
                min={0}
                className='w-[120px] md:w-[150px] lg:w-[320px] xl:w-[400px] 2xl:w-[620px]'
                value={[currentTime]}
                onValueChange={(value) => handleSliderChange(value)}
            />
            <span className='text-txtgray w-10'>
                {duration ? formatTime(duration) : "0:00"}
            </span>
        </div>
    );
};

export default SongControl;