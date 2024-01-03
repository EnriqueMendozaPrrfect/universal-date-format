interface MonthsType {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
}

interface DaysType {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}

interface ErrorOptions {
  cause?: Error
}

enum typeOfDate {
  YYYYMMDD,
  DDMMYYYY,
  MMDDYYYY
}

export {
  typeOfDate
}

export type {
  DaysType,
  ErrorOptions,
  MonthsType
}
