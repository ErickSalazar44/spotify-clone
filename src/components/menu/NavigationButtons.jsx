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
        <nav className='sticky top-0 px-6 py-4 h-16 flex gap-2'>
            <button
                onClick={goBack}
                className={`w-8 h-8 rounded-full bg-black/70 grid place-content-center ${backDisable && "cursor-not-allowed"}`}
            >
                <svg
                    role='img'
                    height='16'
                    width='16'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                >
                    <path d='M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z'></path>
                </svg>
            </button>

            <button
                onClick={goForward}
                className={`w-8 h-8 rounded-full bg-black/70 grid place-content-center 
                    ${forWardDisable && "cursor-not-allowed"}`}
            >
                <svg
                    role='img'
                    height='16'
                    width='16'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                >
                    <path d='M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z'></path>
                </svg>
            </button>
        </nav>
    );
};

export default NavigationButtons;
