export const Greating = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour < 12) {
        greeting = "Buenos días";
    } else if (currentHour < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas Noches";
    }

    return <h1 className='text-xl sm:text-[32px] font-bold'>¡{greeting}!</h1>;
};
