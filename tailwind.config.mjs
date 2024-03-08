/** @type {import('tailwindcss').Config} */

const componentes = ({ addComponents, theme }) => {
    addComponents({
        '.animation-running': {
            animationPlayState: 'running',
        },
        '.animation-paused': {
            animationPlayState: 'paused',
        },
    })
}
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    a: 'var(--color-primary-a)',
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    950: 'var(--color-primary-950)',
                },

                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    a: 'var(--color-secondary-a)',
                    a2: 'var(--color-secondary-a2)',
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)',
                    950: 'var(--color-secondary-950)',
                },
            },
            aspectRatio: {
                home: '5 / 6',
                home1: '5 / 6',
                home2: '5 / 7',
                home3: '6 / 6',
                home4: '5 / 8',
                header: '953 / 1155',
                team: '682 / 1155',
            },
            backgroundImage: {
                grd: `linear-gradient(90deg, var(--color-secondary) 0%, transparent 20%, transparent 80%, var(--color-secondary) 100%);`,
                grd2: `linear-gradient(0deg, var(--color-secondary) 0%, transparent 20%, transparent 80%, var(--color-secondary) 100%);`,
                grrd: 'radial-gradient(transparent, var(--color-secondary)),linear-gradient(0deg, var(--color-secondary) 0%, transparent 20%, transparent 80%, var(--color-secondary) 100%);',
                grrf: 'radial-gradient(transparent, var(--color-secondary)),linear-gradient(0deg, var(--color-secondary) 0%, transparent 20%, transparent 80%, var(--color-secondary) 100%), linear-gradient(90deg, var(--color-secondary) 0%, transparent 20%, transparent 80%, var(--color-secondary) 100%);',
            },
            fontFamily: {
                head: ['"Anton"', '-apple-system', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                monospace: ['"Martian Mono"', 'monospace'],
            },
            maxWidth: {
                '9xl': '1536px',
                '10xl': '1920px',
            },
            keyframes: {
                pert: {
                    '0%': { transform: 'rotate(0deg) scale(1.8)' },
                    '50%': { transform: 'rotate(180deg) scale(2.5)' },
                    '100%': { transform: 'rotate(360deg) scale(1.8)' },
                },
            },
            animation: {
                pert: 'pert 30s linear infinite',
            },
        },
    },
    darkMode: 'class',
    plugins: [componentes, require('tailwindcss-debug-screens'), require('@tailwindcss/typography')],
}
