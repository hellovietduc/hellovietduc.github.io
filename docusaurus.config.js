const BLOG_NAME = 'Duc Nguyen';
const BLOG_DESCRIPTION = 'The drafts in my mind';
const COPYRIGHT = `Copyright © ${new Date().getFullYear()} ${BLOG_NAME}`;

const GITHUB_URL = 'https://github.com/hellovietduc';
const STACK_OVERFLOW_URL = 'https://stackoverflow.com/users/8943850';
const LINKEDIN_URL = 'https://www.linkedin.com/in/hellovietduc';

const navBarItems = [
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
    href: GITHUB_URL,
    position: 'right',
    className: 'header-github-link',
    'aria-label': 'GitHub'
  }
];

const footerLinks = [
  {
    title: 'Professional',
    items: [
      {
        label: 'GitHub',
        href: GITHUB_URL
      },
      {
        label: 'Stack Overflow',
        href: STACK_OVERFLOW_URL
      },
      {
        label: 'LinkedIn',
        href: LINKEDIN_URL
      }
    ]
  },
  {
    title: 'Feeds',
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
];

module.exports = {
  title: BLOG_NAME,
  tagline: BLOG_DESCRIPTION,
  url: 'https://hellovietduc.github.io',
  baseUrl: '/',
  favicon: '/img/favicon.png',
  organizationName: 'hellovietduc',
  projectName: 'hellovietduc.github.io',
  themeConfig: {
    navbar: {
      title: BLOG_NAME,
      items: navBarItems,
      hideOnScroll: true
    },
    footer: {
      style: 'dark',
      links: [{}, ...footerLinks, {}],
      copyright: COPYRIGHT
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
            copyright: COPYRIGHT
          },
          blogTitle: BLOG_NAME,
          blogDescription: BLOG_DESCRIPTION
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
