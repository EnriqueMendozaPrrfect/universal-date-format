import { type MonthsType, type TypeOfDate, type DaysType } from './types'

const UniversalDateFormatInitialValues: {
  months: MonthsType
  days: DaysType
  defaultFormat: TypeOfDate
  div: string | [string, string]
  isMeridianFormat: boolean
  isMonthName: boolean
} = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  defaultFormat: 'YYYYMMDD',
  div: '/',
  isMeridianFormat: false,
  isMonthName: false
}

export default UniversalDateFormatInitialValues
