import getRandom404Image from './get-random-404-image'

test('getRandom404Image', () => {
  expect(getRandom404Image()).toMatch(/^\/media\/404\/\d+\.png$/)
})
