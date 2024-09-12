import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import sitemap from '@astrojs/sitemap'

import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

console.log(import.meta.env.DEV)
// https://astro.build/config
export default defineConfig({
    build: { cache: true },
    site: 'https://melborp.art',
    integrations: [
        storyblok({
            accessToken: import.meta.env.DEV ? env.STORYBLOK_TOKEN_PREV : env.STORYBLOK_TOKEN_PROD,
            components: {
                team: 'src/storyblok/Team',
                // Añade tus componentes aquí
                // page: 'storyblok/Page',
                // teaser: "storyblok/Teaser",
                // grid: "storyblok/Grid",
                // feature: "storyblok/Feature",
            },
            apiOptions: {
                // Elige la región de tu espacio de Storyblok.
                region: 'eu', // opcional,  o 'eu' (por defecto)
            },
        }),
        tailwind(),
        sitemap(),
    ],
})
