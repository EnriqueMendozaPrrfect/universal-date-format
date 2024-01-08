type MonthsType = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

type DaysType = [
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

interface ErrorOptions {
  cause?: Error
}

type TypeOfDate = 'YYYYMMDD' | 'DDMMYYYY' | 'MMDDYYYY'

export type {
  DaysType,
  ErrorOptions,
  MonthsType,
  TypeOfDate
}
