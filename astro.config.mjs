// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlmylo.github.io/',
  base: 'milohaxguides',
    integrations: [starlight({
        title: 'MiloHax Guides',
          social: [
                { icon: 'seti:firefox', label: 'Website', href: 'https://milohax.org/' },
                { icon: 'discord', label: 'Discord', href: 'https://discord.gg/milohax' },
                { icon: 'github', label: 'GitHub', href: 'https://github.com/hmxmilohax' },
                { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MiloHax' },
                { icon: 'twitter', label: 'GitLab', href: 'https://twitter.com/hmxmilohax' },
],
  			customCss: ['./src/styles/custom.css'],
        defaultLocale: 'en',
  locales: {
    // English docs in `src/content/docs/en/`
    en: {
      label: 'English',
    },
    // Spanish docs in `src/content/docs/es/`
    'es': {
      label: 'Español',
      lang: 'es',
    },
  },
		}), mdx()],
});