import type { ReactNode } from "react";

// Componente se usa en el SideBarLeft -> Menu
interface SideMenuItemProps {
    href: string
    children: ReactNode
    label: string
}

const SideMenuItem = ({ href, children, label }: SideMenuItemProps) => {
    return (
        <li className='px-3 py-1'>
            <a href={href} aria-label={label} className='flex gap-x-5 hover:text-white h-10 items-center transition-colors'>
                {children}
            </a>
        </li>
    );
};

export default SideMenuItem;
