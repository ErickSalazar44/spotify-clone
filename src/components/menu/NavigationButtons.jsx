import { ArrowRight, ArrowLeft } from '@/icons/react/NavegadorIcon'

const NavigationButtons = ({ backDisable, forWardDisable }) => {
    
    const goBack = () => {
        if (backDisable) return;
        window.history.back();
    };

    const goForward = () => {
        if (forWardDisable) return;
        window.history.forward();
    };

    return (
        <nav className='relative top-0 p-4 md:px-6 md:py-4 h-16 flex gap-2'>
            <button
                onClick={goBack}
                className={`w-8 h-8 rounded-full before:-bottom-8 before:-left-3 bg-black/70 grid place-content-center ${backDisable ? "cursor-not-allowed opacity-80" : 'context-top context'}`}
                data-content="Volver"
            >
                <ArrowLeft/>
            </button>

            <button
                onClick={goForward}
                className={`w-8 h-8 before:-bottom-8 before:-right-6 rounded-full bg-black/70 grid place-content-center 
                    ${forWardDisable ? "cursor-not-allowed opacity-80" : "context-top context"}`}
                data-content="Avanzar"
            >
                <ArrowRight/>
            </button>
        </nav>
    );
};

export default NavigationButtons;
