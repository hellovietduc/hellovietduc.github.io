/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const NUMBER_OF_404_IMG = 23;

const getRandom404Image = () => {
  const rand = Math.floor(Math.random() * (NUMBER_OF_404_IMG)) + 1;
  return require(`./preview/404/${rand}.png`);
};

const projects = [
  {
    name: 'The Playground',
    description: 'A code playground website using Docker power 🔥 to run multiple programming languages',
    preview: require('./preview/theplayground.png'),
    source: 'https://github.com/hellovietduc/theplayground',
    website: 'https://theplayground.hellovietduc.tech'
  },
  {
    name: 'Envidict',
    description: 'A lightning-fast ⚡ English-Vietnamese dictionary website',
    preview: require('./preview/envidict.png'),
    source: 'https://github.com/hellovietduc/envidict',
    website: 'https://envidict.hellovietduc.tech'
  },
  {
    name: 'web-crawler',
    description: 'A program that crawls text data from a website at any depth level',
    preview: getRandom404Image(),
    source: 'https://github.com/hellovietduc/web-crawler',
    website: 'https://github.com/hellovietduc/web-crawler/releases'
  },
  {
    name: 'gomoku-cli',
    description: 'Play Gomoku in command line',
    preview: getRandom404Image(),
    source: 'https://github.com/hellovietduc/gomoku-cli',
    website: 'https://github.com/hellovietduc/gomoku-cli/releases'
  },
  {
    name: 'video-converter-web',
    description: 'A video converter website',
    preview: getRandom404Image(),
    source: 'https://github.com/hellovietduc/video-converter-web',
    website: 'https://github.com/hellovietduc/video-converter-web/releases'
  }
];

export default projects;
