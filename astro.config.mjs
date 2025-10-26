// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlmylo.github.io/',
  base: '/milohaxguides/',
  integrations: [
    starlight({
      title: 'MiloHax Guides',
      logo: {
        dark: './public/milohax.png',
        light: './public/milohax-dark.png',
        alt: 'MiloHax Guides',
        replacesTitle: true,
      },
      social: [
        { icon: 'seti:firefox', label: 'Website', href: 'https://milohax.org/' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/milohax' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hmxmilohax' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MiloHax' },
        { icon: 'twitter', label: 'GitLab', href: 'https://twitter.com/hmxmilohax' },
      ],
      plugins: [
        starlightUtils({
          multiSidebar: {
            // choose switcherStyle: "horizontalList" or "dropdown" or "hidden"
            switcherStyle: "hidden"
          }
        })
      ],
      // define all sidebars here
      sidebar: [
        {
          label: 'PS3 Customs',
          autogenerate: { directory: '/rb3/ps3customs' },
        },
        {
          label: 'Rock Band 3 + RPCS3',
          autogenerate: { directory: '/rb3/rpcs3' },
        },
      ],

      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: { label: 'English' },
        // Spanish docs in `src/content/docs/es/`
        es: { label: 'Español', lang: 'es' },
      },
    }),
    mdx(),
  ],
});
