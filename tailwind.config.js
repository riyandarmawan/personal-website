/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                "roboto-slab": ["Roboto Slab", "serif"],
                "noto-japan": ["Noto Sans JP", "sans-serif"],
            },
            colors: {
                primary: "#38bdf8",
                background: "#0f172a",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },
    plugins: [],
};
