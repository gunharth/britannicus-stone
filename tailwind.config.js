//--------------------------------------------------------------------------
// Tailwind configuration
//--------------------------------------------------------------------------
//
// Use the Tailwind configuration to completely define the current sites
// design system by adding and extending to Tailwinds default utility
// classes. Various aspects of the config are split inmultiple files.
//

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./resources/views/**/*.html", "./resources/js/**/*.js"],
    // The various configurable Tailwind configuration files.
    presets: [
        require("tailwindcss/defaultConfig"),
        //require('./tailwind.config.typography.js'),
        //require("./tailwind.config.peak.js"),
        //require('./tailwind.config.site.js'),
    ],
    theme: {
        screens: {
            xs: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            brit: {
                logo: "#231F20",
                navbackground: "#282123",
                navhovercolor: "#7e7b7b"
            },
        },
    },
    // Uncomment the next line to enable class based dark mode: https://peak.1902.studio/features/dark-mode.html.
    // darkMode: 'class',
    mode: "jit",
    plugins: [
    ],
    safelist: [],
};
