import { ArrowLeft } from '@/icons/react/NavegadorIcon'
import '@/styles/visualAid.css'

const NavigationButtons = ({ backDisable, indexPage }) => {
    // Mantenimiento

    return (
        <nav className={`${indexPage ? 'flex' : 'hidden sm:flex'} relative top-0 p-4 md:px-6 md:py-4 h-16 gap-2`}>
            <a
                href='/'
                aria-label="go back to home page"
                className={`cursor-auto sm:cursor-pointer w-8 h-8 rounded-full before:-bottom-8 before:-left-3 bg-black/70 grid place-content-center ${backDisable ? "cursor-not-allowed opacity-80" : 'context-top context'}`}
                data-content="Volver"
            >
                <ArrowLeft/>
            </a>
        </nav>
    );
};

export default NavigationButtons;
