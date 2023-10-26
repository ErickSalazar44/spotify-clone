import Enlace from "../Enlace";

const CurrentSong = ({ image, title, artists, albumId }) => {
    return (
        <section className='flex sm:flex-1 items-center sm:gap-2 lg:gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14  rounded-md shadow-lg overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='object-cover aspect-square'
                />
            </picture>
            <article className='hidden sm:flex sm:flex-col sm:justify-center'>
                <h3 className='font-medium sm:text-xs lg:text-sm '>{title}</h3>
                <ul className='flex flex-wrap gap-1 text-txtgray text-xs font-light'>
                    {artists?.map((artist) => (
                        <li key={artist}>
                            <Enlace ruta={`/playlist/${albumId}`}>
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