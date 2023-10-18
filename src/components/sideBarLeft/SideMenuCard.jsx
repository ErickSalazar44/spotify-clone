const SideMenuCard = ({ playlist, isCollapsed }) => {
    const { id, title, cover, artists } = playlist;

    const artistsString = artists.join(", ");

    return (
        <li className='text-[#f3f3f3]'>
            <a
                href={`/playlist/${id}`}
                className='playlist-item flex relative overflow-hidden items-center gap-4 hover:bg-gray1 transition-colors hover:transition-colors p-2 rounded-md'
            >
                <picture className='h-[50px] w-[50px] flex-none'>
                    <img
                        className='rounded-[4px]'
                        src={cover}
                        alt={`Cover of ${title}`}
                    />
                </picture>
                {!isCollapsed && (
                    <div className='flex flex-col truncate justify-center'>
                        <h4 className='font-semibold text-[15px]'>{title}</h4>
                        <span className='text-xs font-normal text-txtgray'>
                            {artistsString}
                        </span>
                    </div>
                )}
            </a>
        </li>
    );
};

export default SideMenuCard;
