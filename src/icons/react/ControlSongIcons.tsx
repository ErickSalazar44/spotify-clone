interface SongIconProps {
    w?: number;
    h?: number;
}

export const PreviousSongIcon = ({ w = 12, h = 12 }:SongIconProps) => (
    <svg 
        width={w} 
        height={h} 
        role='img' 
        aria-hidden='true' 
        viewBox='0 0 16 16'
        fill='currentColor'
        className="w-3 h-3 sm:w-4 sm:h-4"
    >
        <path d='M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z'></path>
    </svg>
);

export const NextSongIcon = ({ w = 12, h = 12 }:SongIconProps) => (
    <svg
        role='img'
        width={w}
        height={h}
        aria-hidden='true'
        viewBox='0 0 16 16'
        fill='currentColor'
        className="w-3 h-3 sm:w-4 sm:h-4"
    >
        <path d='M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z'></path>
    </svg>
);
