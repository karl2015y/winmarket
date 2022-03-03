

const theme_colors = {
    '--color-base-50': '#ecfeff',
    '--color-base-100': '#cffafe',
    '--color-base-200': '#a5f3fc',
    '--color-base-300': '#67e8f9',
    '--color-base-400': '#22d3ee',
    '--color-base-500': '#EC781E',
    '--color-base-600': '#0891b2',
    '--color-base-700': '#0e7490',
    '--color-base-800': '#155e75',
    '--color-base-900': '#164e63',
}



for (const [key, value] of Object.entries(theme_colors)) {

    document.documentElement.style.setProperty(key, value);

}