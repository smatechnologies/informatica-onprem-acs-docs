/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'SMA Technologies Help',
  tagline: 'Informatica On-Prem ACS',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/opcon/connectors/informatica-onprem-acs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'informatica-onprem-acs-docs',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: true,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/informatica-onprem-acs-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
//    [
//      require.resolve('@cmfcmf/docusaurus-search-local'), 
//      {
//      }
//    ],
  ],
};
