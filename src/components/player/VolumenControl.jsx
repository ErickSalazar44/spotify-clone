import { Slider } from "@/components/menu/Slider"; // Librerias Slider
import { usePlayerStore } from "@/store/playerStore"; // Estado global 
import { IconVolumenMute, IconVolumenFull, IconVolumenMedio, IconVolumenBajo} from "@/icons/react/VolumeControl"; // icons
import { useRef } from "react";

const VolumenControl = () => {
    // ESTADO GLOBAL PARA MANEJAR VOLUMEN
    const volumen = usePlayerStore((state) => state.volumen);
    const setVolumen = usePlayerStore((state) => state.setVolumen);

    // Volumen Guardado
    const previusVolumenRef = useRef(volumen);

    const handleButtonMute = () => {
        if (volumen < 0.1) {
            setVolumen(previusVolumenRef.current);
        } else {
            previusVolumenRef.current = volumen;
            setVolumen(0);
        }
    };

    return (
        <div className='flex justify-center w-14 sm:w-auto sm:gap-x-2 '>
            <button
                onClick={handleButtonMute}
                className={`text-gray before:top-[-36px] before:-left-4 w-8 h-8 grid place-content-center md:context  ${volumen !== 0 ? 'md:context-top' : 'md:context-top2' }`}
                data-content='Silenciar'
                data-content2='No Silenciar'
            >
                {volumen <= 0 ? (
                    <IconVolumenMute />
                ) : volumen < 0.3 ? (
                    <IconVolumenBajo />
                ) : volumen < 0.7 ? (
                    <IconVolumenMedio />
                ) : (
                    <IconVolumenFull />
                )}
            </button>
            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                className='sm:w-[93px]'
                value={[volumen * 100]}
                onValueChange={(value) => {
                    const [newValue] = value;
                    const volumenValue = newValue / 100;
                    setVolumen(volumenValue);
                }}
            />
        </div>
    );
};

export default VolumenControl;