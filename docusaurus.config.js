module.exports = {
  title: 'Duc Nguyen',
  tagline: 'The drafts in my mind',
  url: 'https://hellovietduc.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'hellovietduc',
  projectName: 'hellovietduc.github.io',
  themeConfig: {
    navbar: {
      title: 'Duc Nguyen',
      logo: {
        alt: 'logo',
        src: 'img/logo32.webp'
      },
      items: [
        {
          to: 'projects',
          label: 'Projects',
          position: 'left'
        },
        {
          to: 'about',
          label: 'About me',
          position: 'right'
        },
        {
          label: 'Links',
          position: 'right',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/hellovietduc'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hellovietduc'
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/8943850'
            }
          ]
        }
      ],
      hideOnScroll: true
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Duc Nguyen`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Duc Nguyen`
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: ['@docusaurus/plugin-ideal-image']
};
