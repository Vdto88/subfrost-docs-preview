import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SUBFROST',
  tagline: 'SUBFROST is the issuer of frBTC & dxBTC. The SUBFROST protocol operates as a decentralized custodian that enables a trustless DeFi ecosystem on Bitcoin L1.',
  
 
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
 
  // Set the production url of your site here
  url: 'https://vdto88.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/subfrost-docs-preview/',
  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vdto88', // Usually your GitHub org/user name.
  projectName: 'subfrost-docs-preview', // Usually your repo name.

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-Hans',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Set docs as the root
          
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: '/Logo.png',
    metadata: [
      {name: 'keywords', content: 'bitcoin, staking, yield, defi, alkanes, metaprotocol, amm, frost, subfrost'},
      {name: 'description', content: 'SUBFROST is the issuer of frBTC & dxBTC. The SUBFROST protocol operates as a decentralized custodian that enables a trustless DeFi ecosystem on Bitcoin L1.'},
    ],
    og: {
      title: 'SUBFROST | Bitcoin Staking & Yield',
      description: 'SUBFROST is the issuer of frBTC & dxBTC. The SUBFROST protocol operates as a decentralized custodian that enables a trustless DeFi ecosystem on Bitcoin L1.',
      image: '/Logo.png',
    },
    navbar: {
      title: 'SUBFROST',
      logo: {
        alt: 'SUBFROST Logo',
        src: 'img/logotype_dark.svg',
        href: 'https://subfrost.io',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Subzero Research Inc.`,
    },
    favicon: 'Logo.png',
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      // Gabe asked for dark-mode colours (#000000 background, #f5f5f5 text) on
      // 2026-07-28. Those are only meaningful if a reader can reach dark mode,
      // so the toggle is enabled. Light stays the default.
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: '828A36RRFA',
      apiKey: '1d544d5ae2a793a8c24381689a059590',
      indexName: 'Crawler: docs.subfrost.io',
      contextualSearch: true,
      insights: true,
      translations: {
        button: {
          buttonText: 'Search',
        },
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    // The docs root used to be introduction/subfrost-overview, which carried
    // `slug: /`. Gabe asked for that page to be killed on 2026-07-28, which
    // left `/` with nothing to serve. Redirecting instead of moving the slug
    // onto What is SUBFROST keeps every existing relative link working: a slug
    // change moves the page's route, and the links around the site are
    // URL-relative, not file-relative.
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/', to: '/start-here/what-is-subfrost'},
          // The SUBFROST Networking section was removed on 2026-07-29 at
          // flex's request. All six pages were live and served 200, so they
          // are redirected rather than left to 404. There is no equivalent
          // page to land on, so they point at the docs root.
          {from: '/subfrost-networking/introduction-to-subp2p', to: '/start-here/what-is-subfrost'},
          {from: '/subfrost-networking/subrelay', to: '/start-here/what-is-subfrost'},
          {from: '/subfrost-networking/subproxy', to: '/start-here/what-is-subfrost'},
          {from: '/subfrost-networking/subtun', to: '/start-here/what-is-subfrost'},
          {from: '/subfrost-networking/gossipsub-and-encrypted-communication', to: '/start-here/what-is-subfrost'},
          {from: '/subfrost-networking/building-microservices-on-subp2p', to: '/start-here/what-is-subfrost'},
        ],
      },
    ],
  ],
  
};

export default config;
