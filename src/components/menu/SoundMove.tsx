import useSoundMove from '@/hooks/useSoundMove'

const SoundMove = ({ id, forId = false }: {id: number, forId?: boolean}) => {

    const visible = useSoundMove(id, forId)

    return (
        <span
            className={`items-end justify-center w-4 h-4 overflow-hidden ${
                visible ? "flex" : "hidden"
            }`}
        >
            <div className='flex gap-[2px] items-end justify-center w-4 h-4 overflow-hidden'>
                <span className='inline-block w-[2px] h-4 animate-soundMove2 bg-green'></span>
                <span className='inline-block w-[2px] h-4 animate-soundMove bg-green'></span>
                <span
                    className='inline-block w-[2px] h-4 animate-soundMove2 bg-green'
                    style={{ animationDelay: "100ms" }}
                ></span>
                <span
                    className='inline-block w-[2px] h-4 animate-soundMove bg-green'
                    style={{ animationDelay: "20ms" }}
                ></span>
            </div>
        </span>
    );
};

export default SoundMove;
