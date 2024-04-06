const { iconsPlugin, dynamicIconsPlugin } = require("@egoist/tailwindcss-icons")

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
                inter: ["Inter", "sans-serif"],
                "noto-japan": ["Noto Sans JP", "sans-serif"],
            },
            colors: {
                primary: "#12D393",
                background: "#070A13",
            },
            screens: {
                "2xl": "1320px",
            },
            animation: {
                type: "type 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                type: {
                    "40%, 60%": { left: "100%", width: "0" },
                    "100%": { left: "0%", width: "100%" },
                },
            },
        },
    },
    plugins: [iconsPlugin(), dynamicIconsPlugin()],
};
