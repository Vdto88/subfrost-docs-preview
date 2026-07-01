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
      defaultMode: 'light',
      disableSwitch: true,
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

  plugins: [],
  
};

export default config;
