const Enlace = ({ children, ruta = "#" }) => {
    return (
        <a
            href={ruta}
            className="relative transition-colors after:content-[''] after:w-full hover:after:h-[1px] after:bg-white after:left-0 after:absolute after:bottom-0 hover:text-white after:transition-colors"
        >
            {children}
        </a>
    );
};

export default Enlace;
