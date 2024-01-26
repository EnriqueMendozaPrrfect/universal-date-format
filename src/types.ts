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

interface ConfigurationType {
  months?: MonthsType
  days?: DaysType
  defaultFormat?: TypeOfDate
  div?: string | [string, string]
  useMeridianFormat?: boolean
  useMonthName?: boolean
}

export type {
  ConfigurationType,
  DaysType,
  ErrorOptions,
  MonthsType,
  TypeOfDate
}
