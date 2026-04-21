/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#005B71", // Deep Teal من DESIGN.md
                "primary-container": "#004253",
                "secondary": "#98FFD9", // Mint Green
                "secondary-container": "#006c52",
                "tertiary": "#F4A261", // Sand/Coral
                "background": "#f8f9fb",
                "surface": "#ffffff",
                "on-surface": "#191c1e",
                "outline": "#70787d",
                "error": "#ba1a1a"
            },
            fontFamily: {
                headline: ["Plus Jakarta Sans", "Noto Kufi Arabic", "sans-serif"],
                body: ["Inter", "Noto Kufi Arabic", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "4px", // Subtle roundedness (1)
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};