module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Lora', 'serif'],
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
        },
    },
    plugins: [],
};
