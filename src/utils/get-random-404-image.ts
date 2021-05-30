// Can be found in `static/media/404`
const NUMBER_OF_404_IMG = 10

const getRandom404Image = (): string => {
  const rand = Math.floor(Math.random() * NUMBER_OF_404_IMG) + 1
  return `/media/404/${rand}.png`
}

export default getRandom404Image
