const CurrentSong = ({ image, title, artists }) => {
    return (
        <div className='flex flex-1 items-center gap-4 relative overflow-hidden'>
            <picture className='w-14 h-14  rounded-md shadow-lg overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='object-cover aspect-square'
                />
            </picture>
            <div className='flex flex-col justify-center'>
                <h3 className='font-medium text-sm '>{title}</h3>
                <div className='flex flex-wrap gap-1'>
                    {artists?.map((artist) => (
                        <a
                            key={artist}
                            href='#'
                            className="text-txtgray text-xs font-light relative transition-colors after:content-[''] after:w-full hover:after:h-[1px] after:bg-white after:left-0 after:absolute after:bottom-0 hover:text-white after:transition-colors"
                        >
                            {artist}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentSong;