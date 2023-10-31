// Componentes
import CurrentSong from "./CurrentSong";
import VolumenControl from "./VolumenControl";
import ReproductorControl from "./ReproductorControl"

interface PlayerProps {
    id: number
}

const Player = ({ id }: PlayerProps) => {

    return (
        <div className='flex sm:justify-between w-full px-4 sm:px-2 z-50'>
            {/* I N F O R M A C I O N */}
            <CurrentSong/> 

            {/* R E P R O D U C T O R */}
            <ReproductorControl id={id} />

            {/* V O L U M E N */}
            <VolumenControl />
        </div>
    );
};

export default Player;
