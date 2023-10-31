import { Play } from "@/icons/react/PausePlay"; // icons
import Enlace from "@/components/Enlace"; // componentes
import { usePlayerStore } from "@/store/playerStore"; // estado global
import SoundMove from "../SoundMove"; // icon move sound
import { useState, useEffect } from 'react';
import type { MusicTableRowProps } from "@/types/appTypes";


export const MusicTableRow = ({ song, index, handleDoubleClick }: MusicTableRowProps) => {
    // Estado global 
    const { currentMusic, isPlaying } = usePlayerStore((state) => state);

    const isSong = song?.id === currentMusic?.song?.id;
    const isAlbum = song?.albumId === currentMusic?.song?.albumId;

    // TODO OPTIMIZABLE AUN TENGO QUE AVERIGUAR POR QUE NO RENDERIZA CORRECTAMENTE CUANDO HAGO COMPARACIONES EN LINEA

    const [rowClasses, setRowClasses] = useState("font-light text-white");
    const [showSoundMoveCell, setShowSoundMoveCell] = useState('inline-block');
    const [showIndexCell, setShowIndexCell] = useState('inline-block');


    useEffect(() => {
        if (isSong && isAlbum && isPlaying) {
            setRowClasses("text-green font-semibold");
            setShowSoundMoveCell("inline-block")
            setShowIndexCell('hidden')
        } else {
            setShowSoundMoveCell("hidden")
            setRowClasses("font-light text-white");
            setShowIndexCell('block')
        }

    }, [isSong, isAlbum, isPlaying]);

    return (
        <tr
            onDoubleClick={() => handleDoubleClick(song, isSong, isAlbum)}
            onTouchStart={() => handleDoubleClick(song, isSong, isAlbum)}
            className='cursor-auto sm:cursor-pointer text-gray font-semibold sm:hover:bg-white/10 sm:active:bg-white/10 rounded group py-1'
        >
            <td className='sm:pl-[22px] sm:w-10 rounded-l'>
                    <div className={`${showSoundMoveCell}`}>
                        <SoundMove id={song.id} forId={true}/>
                    </div>
                    <div className={`${showIndexCell} `}>
                        <span className='group-hover:hidden'>{index + 1}</span>
                        <span className={`hidden text-white group-hover:inline-block`}>
                            <Play w={12} h={12} />
                        </span>
                    </div>
            </td>
            <td className='px-2 py-1 sm:px-4 sm:py-[6px] flex items-center gap-3'>
                <picture className='w-12 h-12 sm:w-10 sm:h-10'>
                    <img
                        className='w-12 h-12 sm:w-10 sm:h-10 object-cover'
                        src={song.image}
                        alt={song.title}
                    />
                </picture>
                <div className='flex flex-col'>
                    <h2 className={`text-sm sm:text-[16px] ${rowClasses}`}>
                        <Enlace ariaLabel={`ir a la playlist ${song.title}`}>{song.title}</Enlace>
                    </h2>
                    <span className='text-xs sm:text-sm font-light'>
                        {song.artists.join(", ")}
                    </span>
                </div>
            </td>
            <td className='hidden sm:table-cell md:hidden lg:table-cell sm:px-4 text-sm font-light'>
                <Enlace ariaLabel={`ir a la playlist ${song.album}`}>{song.title}</Enlace>
            </td>
            <td className='sm:px-4 text-sm rounded-r'>{song.duration}</td>
        </tr>
    );
};
