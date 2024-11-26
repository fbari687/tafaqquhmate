import defaultTheme from "tailwindcss/defaultTheme";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./node_modules/flowbite/**/*.js",
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cream: "#FFF8E1",
                yellowAcc: "#ffc107",
                greenAcc: "#4CAF50",
                greenMint: "#81C784",
                yellowAccHover: "#e0b532",
                aquaGreen: "#2C7866",
                aquaGreenHover: "#246354",
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
