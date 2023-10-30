/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                base: "#111111",
                gray: "#b3b3b3",
                gray1: "#1A1A1A",
                txt: "#f3f3f3",
                txtgray: "#9a9a9a",
                card: "#181818",
                cardHover: "#282828",
                green: "#1ed760",
                fondoMain: "var(--fondoMain-color)",
            },
            keyframes: {
                soundMove: {
                    "0%, 100%": { height: "4px" },
                    "25%": { height: "7px" },
                    "50%": { height: "14px" },
                    "75%": { height: "9px" },
                },
                soundMove2: {
                    "0%, 100%": { height: "5px" },
                    "25%": { height: "6px" },
                    "50%": { height: "2px" },
                    "75%": { height: "15px" },
                },
            },
            animation: {
                soundMove: "soundMove 1s infinite linear",
                soundMove2: "soundMove2 1s infinite linear",
            },
            boxShadow: {
                cardLarge: "5px 0 30px 0px rgba(0,0,0,0.3)",
                playlist: "0 4px 60px rgba(0,0,0,.5)",
                btnPlay: "0 4px 90px rgba(0,0,0,.5)",
            },
        },
    },
    plugins: [],
};
