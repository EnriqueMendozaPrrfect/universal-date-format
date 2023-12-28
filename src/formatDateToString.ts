const getDateFormatString = (
  value1: string,
  value2: string,
  value3: string,
  div: string | [string, string]
): string => {
  if (typeof div === 'string') {
    return `${value1}${div}${value2}${div}${value3}`
  } else {
    return `${value1}${div[0]}${value2}${div[1]}${value3}`
  }
}

export default getDateFormatString
