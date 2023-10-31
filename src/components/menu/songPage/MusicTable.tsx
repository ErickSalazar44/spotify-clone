import Time from "@/icons/react/Time"; // icons
import { MusicTableRow } from "./MusicTableRow"; // components 
import type { Song } from "@/lib/data"; // tipado
import useDoubleClickHandler from "@/hooks/useDoubleClickHandler";

interface Songs {
    songs: Song[];
}

const MusicTable = ({ songs }: Songs) => {

    const handleDoubleClick = useDoubleClickHandler()
    
    return (
        <table className='table-auto text-left min-w-full divide-y divide-txtgray/30 relative z-10'>
            <thead>
                <tr className='text-gray'>
                    <th className='w-[20px] sm:w-10 sm:pl-[22px] py-1 font-light'>#</th>
                    <th className='px-2 py-1 sm:px-4 font-semibold text-sm w-[300px] md:w-[400px] lg:w-[300px] xl:w-[600px]'>Título</th>
                    <th className='hidden sm:table-cell md:hidden lg:table-cell lg:w-[300px] px-4 py-1 font-semibold text-sm'>Álbum</th>
                    <th className='w-[30px] sm:px-4 sm:py-1 font-semibold text-sm '>
                        <Time/>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr className='h-[18px]'></tr>
                {songs?.map((song, index) => (
                    <MusicTableRow
                        key={song.id}
                        song={song} 
                        index={index}
                        handleDoubleClick={handleDoubleClick}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default MusicTable;
