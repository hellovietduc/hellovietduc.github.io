import getReadableDate from './get-readable-date'

test('getReadableDate', () => {
  expect(getReadableDate('December 17, 1995 03:24:00')).toBe('12/17/1995')
  expect(getReadableDate(new Date('1995-12-17T03:24:00'))).toBe('12/17/1995')
  expect(getReadableDate('December 17, 1995 03:24:00', { year: 'numeric', month: 'long', day: 'numeric' })).toBe(
    'December 17, 1995',
  )
  expect(getReadableDate(new Date('1995-12-17T03:24:00'), { year: 'numeric', month: 'short', day: 'numeric' })).toBe(
    'Dec 17, 1995',
  )
})
