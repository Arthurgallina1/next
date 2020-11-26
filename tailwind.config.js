const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "regal-blue": "#243c5a",
                "blue-light": "#85d7ff",
                "gray-sec": "#6c757d",
                "blue-main": "#0000FF",
            },
        },
        // gray: colors.trueGray,
        // indigo: colors.indigo,
        // red: colors.rose,
        // yellow: colors.amber,
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
