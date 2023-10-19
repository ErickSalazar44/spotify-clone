// componentes
import SideMenuCard from "./SideMenuCard";

// data
import { playlists } from "@/lib/data";

// icons
import Home from "@/icons/Home";
import Library from "@/icons/Library";
import Search from "@/icons/Search";
import SideMenuItem from "./SideMenuItem";
import { useSideBarLeftStore } from "@/store/sideBarLeftStore";

const SideBarLeft = () => {
    const { isCollapsed, toggleCollapse } = useSideBarLeftStore(
        (state) => state
    );

    const handleClickCollapse = () => {
        toggleCollapse(!isCollapsed);
    };

    return (
        <nav className='flex flex-col gap-2 h-full'>
            {/* M E N U */}
            <div className='bg-base rounded-lg'>
                <ul className='px-3 py-2 text-gray font-bold'>
                    <SideMenuItem href='/'>
                        <Home />
                        {!isCollapsed && <span>Inicio</span>}
                    </SideMenuItem>
                    <SideMenuItem href={"/"}>
                        <Search />
                        {!isCollapsed && <span>Buscar</span>}
                    </SideMenuItem>
                </ul>
            </div>

            {/* B I B L I O T E C A */}
            <div className='rounded-lg bg-base flex-1'>
                <header className='py-2 px-4 text-gray'>
                    <button onClick={handleClickCollapse} className='h-10 py-1 px-2 flex gap-5 hover:text-white transition-colors font-bold items-center'>
                        <Library expand={!isCollapsed} />
                        {!isCollapsed && (
                            <span className='min-w-[250px] text-start'>
                                Tu biblioteca
                            </span>
                        )}
                    </button>
                </header>
                <ul className='px-2'>
                    {playlists.slice(6,12).map((playlist) => (
                        <SideMenuCard key={playlist.id} playlist={playlist} isCollapsed={isCollapsed}/>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default SideBarLeft;
