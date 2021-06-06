module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Roboto Condensed', 'sans-serif'],
            serif: ['Cabin', 'sans-serif'],
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
            scale: ['active'],
        },
    },
    plugins: [],
};
