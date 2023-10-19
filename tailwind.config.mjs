/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                base: "#121212",
                gray: "#b3b3b3",
                gray1: "#1A1A1A",
                txtgray: "#9a9a9a",
                card: "#181818",
                cardHover: "#282828",
                green: "#1ed760",
                fondoMain: "var(--fondoMain-color)",
            },
        },
    },
    plugins: [],
};
