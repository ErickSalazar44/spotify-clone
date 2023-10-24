import { Play } from '@/icons/react/PausePlay'// icons
import Enlace from '@/components/Enlace';// componentes
import { usePlayerStore } from '@/store/playerStore';


export const MusicTableRow = ({song, index}) => {

    const {currentMusic, setCurrentMusic} = usePlayerStore((state) => state)

    const handleDoubleClick = () => {
        console.log('Doble click')
        const newCurrentMusic = { ...currentMusic, song }
        setCurrentMusic(newCurrentMusic)
    }
    
    return (
        <tr onClick={() => console.log('click')} onDoubleClick={handleDoubleClick} className='cursor-pointer text-gray font-semibold hover:bg-white/10 rounded group py-1'>
            <td className='pl-[22px] w-8 rounded-l'>
                <span className='group-hover:hidden'>{index + 1}</span>
                <span className='text-white hidden group-hover:inline-block'>
                    <Play w={12} h={12} />
                </span>
            </td>
            <td className='px-4 py-[6px] flex items-center gap-3'>
                <picture className='w-10 h-10 object-cover'>
                    <img className='w-10 h-10 ' src={song.image} alt={song.title} />
                </picture>
                <div className='flex flex-col'>
                    <h3 className='font-light text-white'>
                        <Enlace>{song.title}</Enlace>
                    </h3>
                    <span className='text-sm font-light'>
                        {song.artists.join(", ")}
                    </span>
                </div>
            </td>
            <td className='px-4 text-sm font-light'>
                <Enlace>{song.title}</Enlace>
            </td>
            <td className='px-4 text-sm w-28 rounded-r'>{song.duration}</td>
        </tr>
    );
};
