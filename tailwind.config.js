module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                services: 'repeat(auto-fill, minmax(125px, 1fr))',
                experts: 'max-content 1fr',
            },
        },
        fontFamily: {
            sans: ['Roboto Condensed', 'sans-serif'],
            serif: ['Cabin', 'sans-serif'],
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
            scale: ['active'],
            translate: ['group-hover'],
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
