import { usePlayerStore } from "@/store/playerStore";
import Enlace from "../Enlace";

const CurrentSong = () => {

    const { playlist } = usePlayerStore((state) => state.currentMusic);

    return (
        <section className='flex flex-1 items-center gap-4 sm:gap-2 lg:gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14  rounded-md shadow-lg overflow-hidden'>
                {playlist?.cover &&
                    <img
                        src={playlist?.cover}
                        alt={playlist?.title}
                        className='object-cover aspect-square'
                    />
                }
            </picture>
            <article className='flex flex-col justify-center'>
                <h3 className='font-medium sm:text-xs lg:text-sm '>{playlist?.title}</h3>
                <ul className='flex flex-wrap gap-1 text-txtgray text-xs font-light line-clamp-1'>
                    {playlist?.artists?.map((artist) => (
                        <li className="truncate" key={artist}>
                            <Enlace ariaLabel={`ir a la ${playlist?.albumId}`} ruta={`/playlist/${playlist?.albumId}`}>
                                {artist}
                            </Enlace>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default CurrentSong;