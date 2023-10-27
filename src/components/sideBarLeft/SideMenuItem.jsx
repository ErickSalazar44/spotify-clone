// Componente se usa en el SideBarLeft -> Menu
const SideMenuItem = ({ href, children }) => {
    return (
        <li className='px-3 py-1'>
            <a href={href} aria-label="Ir a Home Page" className='flex gap-x-5 hover:text-white h-10 items-center transition-colors'>
                {children}
            </a>
        </li>
    );
};

export default SideMenuItem;
