import Enlace from "../Enlace";

const CurrentSong = ({ image, title, artists, albumId }) => {
    return (
        <section className='flex flex-1 items-center gap-4 sm:gap-2 lg:gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14  rounded-md shadow-lg overflow-hidden'>
                {image &&                
                    <img
                        src={image}
                        alt={title}
                        className='object-cover aspect-square'
                    />
                }
            </picture>
            <article className='flex flex-col justify-center'>
                <h3 className='font-medium sm:text-xs lg:text-sm '>{title}</h3>
                <ul className='flex flex-wrap gap-1 text-txtgray text-xs font-light line-clamp-1'>
                    {artists?.map((artist) => (
                        <li className="truncate" key={artist}>
                            <Enlace ariaLabel={`ir a la ${albumId}`} ruta={`/playlist/${albumId}`}>
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