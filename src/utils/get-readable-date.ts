const toReadableDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {
  let dateObj: Date
  if (typeof date === 'string') {
    dateObj = new Date(date)
  } else {
    dateObj = date
  }
  return dateObj.toLocaleDateString('en-US', options)
}

export default toReadableDate
