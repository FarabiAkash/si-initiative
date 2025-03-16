/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#19BCE6",
                secondary: "#0F4857",
                steelBlue: "#338499",
                skyBlueTeal: "#70B1C2",
                pastelBlue: "#111827",
                offWhite: "#F1F3F4",
                white: "#FFFFFF",
                titleSubtitle: "#0B3641",
                paragraph: "#677A7E"
            },
        },
    },
    plugins: [],
};
