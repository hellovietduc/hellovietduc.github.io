module.exports = {
  url: 'https://duckwho.codes',
  pathPrefix: '/',
  name: 'Duck Who Codes',
  title: 'Duck Who Codes - Blog by Duc Nguyen',
  subtitle: 'Blog by Duc Nguyen - Software Engineer. Making the world better with code.',
  author: {
    name: 'Duc Nguyen',
    photo: '/photo.jpg',
    bio: 'Blog by Duc Nguyen - Software Engineer @ Padlet. Making the world better with code.',
    contacts: {
      email: 'hellovietduc21@gmail.com',
      linkedin: 'hellovietduc',
      github: 'hellovietduc',
    },
  },
  copyright: `© ${new Date().getFullYear()} Duc Nguyen`,
  postsPerPage: 5,
  menu: [
    {
      label: 'Posts',
      path: '/',
    },
    {
      label: 'About me',
      path: '/pages/about',
    },
  ],
}
