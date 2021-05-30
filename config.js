module.exports = {
  url: 'https://duc-nguyen.xyz',
  pathPrefix: '/',
  title: "Duc Nguyen's blog",
  subtitle: 'Random stuff from a random guy who does software engineering.',
  author: {
    name: 'Duc Nguyen',
    photo: '/photo.jpg',
    bio: 'Software Engineer @ Padlet. Making the world better with code.',
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
