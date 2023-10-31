import { usePlayerStore } from "@/store/playerStore"; // Estado global
import { IconVolumenFull } from "@/icons/react/VolumeControl" // Icons
import { type Playlist } from '../../lib/data';

interface SideMenuCardProps {
    playlist: Playlist;
    isCollapsed: boolean
}

const SideMenuCard = ({ playlist, isCollapsed }: SideMenuCardProps) => {

    const { song } = usePlayerStore(state => state.currentMusic) // Song en reproduccion
    const isPlaying = usePlayerStore(state => state.isPlaying) // Verificar si se esta reproduciendo 

    const { id, title, cover, artists } = playlist;
    const artistsString = artists.join(", ");

    return (
        <li>
            <a
                href={`/playlist/${id}`}
                title={title}
                className='playlist-item flex relative overflow-hidden items-center gap-4 hover:bg-gray1 transition-colors hover:transition-colors p-2 rounded-md'
            >
                <picture className='h-[50px] w-[50px] flex-none'>
                    <img
                        className='rounded-[4px] h-[50px] w-[50px] object-cover'
                        src={cover}
                        alt={`Cover of ${title}`}
                    />
                </picture>
                {!isCollapsed && (
                    <>                    
                        <div className='flex flex-col truncate justify-center'>
                            <h3 className={`font-semibold text-[15px] 
                                ${id === song?.albumId ? 'text-green' : 'text-txt'}`}
                            >
                                {title}
                            </h3>
                            <span className='text-xs font-normal text-txtgray'>{artistsString}</span>
                        </div>
                        <div className={`ml-auto text-green 
                            ${id === song?.albumId && isPlaying ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <IconVolumenFull/>
                        </div>
                    </>
                )}
            </a>
        </li>
    );
};

export default SideMenuCard;
