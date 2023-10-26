import Time from "@/icons/react/Time"; // icons
import { MusicTableRow } from "./MusicTableRow"; // components 
import type { Song } from "@/lib/data"; // tipado
import useDoubleClickHandler from "@/hooks/useDoubleClickHandler";

interface Props {
    songs: Song[];
}

const MusicTable = ({ songs }: Props) => {

    const handleDoubleClick = useDoubleClickHandler({songs})
    return (
        <table className='table-auto text-left min-w-full divide-y divide-txtgray/30 relative z-10'>
            <thead>
                <tr className='text-gray'>
                    <th className='pl-[22px] py-1 font-light'>#</th>
                    <th className='px-4 py-1 font-semibold text-sm w-[600px]'>Título</th>
                    <th className='px-4 py-1 font-semibold text-sm'>Álbum</th>
                    <th className='px-4 py-1 font-semibold text-sm'>
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
