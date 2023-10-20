import { usePlayerStore } from "@/store/playerStore"; // estado global
import { IconVolumenFull } from "@/icons/react/VolumeControl" // icons

const SideMenuCard = ({ playlist, isCollapsed }) => {
    // Song en reproduccion
    const { song } = usePlayerStore(state => state.currentMusic)
    const isPlaying = usePlayerStore(state => state.isPlaying)

    const { id, title, cover, artists } = playlist;

    const artistsString = artists.join(", ");

    return (
        <li>
            <a
                href={`/playlist/${id}`}
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
                            <h4 className={`font-semibold text-[15px] ${playlist.id == song?.albumId ? 'text-green' : 'text-txt'}`}>
                                {title}
                            </h4>
                            <span className='text-xs font-normal text-txtgray'>
                                {artistsString}
                            </span>
                        </div>
                        <div className={`ml-auto text-green ${playlist.id == song?.albumId && isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                            <IconVolumenFull/>
                        </div>
                    </>
                )}
            </a>
        </li>
    );
};

export default SideMenuCard;
