module.exports = {
  title: 'Duc Nguyen',
  tagline: 'The drafts in my mind',
  url: 'https://hellovietduc.github.io',
  baseUrl: '/',
  favicon: '/img/favicon.png',
  organizationName: 'hellovietduc',
  projectName: 'hellovietduc.github.io',
  themeConfig: {
    navbar: {
      title: 'Duc Nguyen',
      items: [
        {
          to: 'projects',
          label: 'Projects',
          position: 'left'
        },
        {
          to: 'about',
          label: 'About me',
          position: 'left'
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
        },
        {
          label: 'Feeds',
          position: 'right',
          items: [
            {
              label: 'RSS',
              href: '/rss.xml'
            },
            {
              label: 'Atom',
              href: '/atom.xml'
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
          blogSidebarCount: 0,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Duc Nguyen`
          },
          blogTitle: 'Duc Nguyen',
          blogDescription: 'The drafts in my mind'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false
        }
      }
    ]
  ],
  plugins: ['@docusaurus/plugin-ideal-image']
};
