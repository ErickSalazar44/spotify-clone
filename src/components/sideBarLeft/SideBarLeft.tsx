import { useState } from "react";
// componentes
import SideMenuCard from "./SideMenuCard";
import SideMenuItem from "./SideMenuItem";
import { playlists } from "@/lib/data"; // data
import { Home, Library, Search } from '@/icons/react/SideBarIcons' // icons
import '@/styles/visualAid.css' // Style


const SideBarLeft = () => {

    const [isCollapsed, setIsCollapsed] = useState(false)

    // se encarga de contraer y extender la biblioteca
    const handleClickCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className='flex flex-col gap-2 h-full'>
            {/* M E N U */}
            <div className='bg-base rounded-lg'>
                <ul className='px-3 py-2 text-gray font-bold'>
                    <SideMenuItem href='/' label={'Inicio'}>
                        <Home />
                        {!isCollapsed && <span>Inicio</span>}
                    </SideMenuItem>
                    <SideMenuItem href='/' label={'Buscar'}>
                        <Search />
                        {!isCollapsed && <span>Buscar</span>}
                    </SideMenuItem>
                </ul>
            </div>

            {/* B I B L I O T E C A */}
            <div className='rounded-lg bg-base flex-1'>
                <header className={`py-2 px-4 text-gray w-full ${!isCollapsed && 'min-w-[250px]'}`}>
                    <button 
                        onClick={handleClickCollapse} 
                        className={`cursor-auto sm:cursor-pointer context before:top-[-36px] before:-left-2 h-10 py-1 px-2 flex gap-5 hover:text-white transition-colors font-bold items-center ${!isCollapsed ? 'w-[160px] context-top' : 'context-top2 pointer-events-none md:pointer-events-auto'}`} 
                        data-content="Contraer Tu biblioteca" 
                        data-content2="Ampliar"
                    >
                        <Library expand={!isCollapsed} />
                        {!isCollapsed && (<span className='text-start'>Tu biblioteca</span>)}
                    </button>
                </header>
                
                {/* A L B U M - S O N G */}
                <ul className='px-2'>
                    {playlists.slice(6,12).map((playlist) => (
                        <SideMenuCard 
                            key={playlist.id} 
                            playlist={playlist} 
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default SideBarLeft;
