/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const GITHUB_URL = 'https://github.com/hellovietduc';
const NUMBER_OF_404_IMG = 10;

const getRandom404Image = () => {
  const rand = Math.floor(Math.random() * (NUMBER_OF_404_IMG)) + 1;
  return require(`./preview/404/${rand}.png`);
};

const projects = [
  {
    name: 'github-alfred',
    description: 'Nagivate GitHub within Alfred',
    preview: require('./preview/github-alfred.png'),
    source: `${GITHUB_URL}/github-alfred`,
    website: `${GITHUB_URL}/github-alfred`
  },
  {
    name: 'The Playground',
    description: 'A code playground website using Docker power 🔥 to run multiple programming languages',
    preview: require('./preview/theplayground.png'),
    source: `${GITHUB_URL}/theplayground`,
    website: `${GITHUB_URL}/theplayground`
  },
  {
    name: 'Envidict',
    description: 'A lightning-fast ⚡ English-Vietnamese dictionary website',
    preview: require('./preview/envidict.png'),
    source: `${GITHUB_URL}/envidict`,
    website: `${GITHUB_URL}/envidict`
  },
  {
    name: 'web-crawler',
    description: 'A program that crawls text data from a website at any depth level',
    preview: getRandom404Image(),
    source: `${GITHUB_URL}/web-crawler`,
    website: `${GITHUB_URL}/web-crawler`
  },
  {
    name: 'gomoku-cli',
    description: 'Play Gomoku in command line',
    preview: getRandom404Image(),
    source: `${GITHUB_URL}/gomoku-cli`,
    website: `${GITHUB_URL}/gomoku-cli`
  },
  {
    name: 'video-converter-web',
    description: 'A video converter website',
    preview: getRandom404Image(),
    source: `${GITHUB_URL}/video-converter-web`,
    website: `${GITHUB_URL}/video-converter-web`
  }
];

export default projects;
