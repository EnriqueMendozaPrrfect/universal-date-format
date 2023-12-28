import getDateFormatString from './formatDateToString'
import UniversalDateFormatInitialValues from './initialValues'
import { type daysType, type monthsType, typeOfDate } from './types'

class UniversalDateFormat {
  readonly date: Date

  private div: string | [string, string] = '/'
  private defaultFormat: typeOfDate = typeOfDate.YYYYMMDD
  private months: monthsType = UniversalDateFormatInitialValues.months
  private days: daysType = UniversalDateFormatInitialValues.days

  constructor (date: Date)
  constructor (date: string)
  constructor (...arg: unknown[]) {
    if (typeof arg[0] === 'string') {
      this.date = new Date(arg[0])

      if (this.date.toString() === 'Invalid Date') throw new Error()
    } else if (arg[0] instanceof Date) {
      this.date = arg[0]
    } else {
      throw new Error()
    }
  }

  static getInstance (date: Date | string): UniversalDateFormat {
    if (typeof date === 'string') {
      return new this(date)
    } else {
      return new this(date)
    }
  }

  getDate (
    useMonthName: boolean = false,
    useYearWithTwoDigits: boolean = false
  ): string {
    switch (this.defaultFormat) {
      case typeOfDate.YYYYMMDD:
        return this.getDateAsYYYYMMDD(useMonthName, useYearWithTwoDigits)
      case typeOfDate.MMDDYYYY:
        return this.getDateAsMMDDYYYY(useMonthName, useYearWithTwoDigits)
      case typeOfDate.DDMMYYYY:
        return this.getDateAsDDMMYYYY(useMonthName, useYearWithTwoDigits)
      default:
        throw new Error('type of format is not assigned')
    }
  }

  getDateAsYYYYMMDD (
    useMonthName: boolean = false,
    useYearWithTwoDigits: boolean = false
  ): string {
    const year = this.getYear(useYearWithTwoDigits)
    const mounth = this.getMonth(useMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(year, mounth, day, this.div)
  }

  setYYYYMMDDAsDefault (): void {
    this.defaultFormat = typeOfDate.YYYYMMDD
  }

  getDateAsMMDDYYYY (
    useMonthName: boolean = false,
    useYearWithTwoDigits: boolean = false
  ): string {
    const year = this.getYear(useYearWithTwoDigits)
    const mounth = this.getMonth(useMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(mounth, day, year, this.div)
  }

  setMMDDYYYYAsDefault (): void {
    this.defaultFormat = typeOfDate.MMDDYYYY
  }

  getDateAsDDMMYYYY (
    useMonthName: boolean = false,
    useYearWithTwoDigits: boolean = false
  ): string {
    const year = this.getYear(useYearWithTwoDigits)
    const mounth = this.getMonth(useMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(day, mounth, year, this.div)
  }

  setDDMMYYYYAsDefault (): void {
    this.defaultFormat = typeOfDate.DDMMYYYY
  }

  getDayName (): string {
    return this.days[this.date.getDay() as keyof daysType]
  }

  getHour (useTwelveHourFormat: boolean = false, useSeconds: boolean = false): string {
    const hour = useTwelveHourFormat ? this.convertHourToMeridianFormat() : this.date.getHours()
    const minutes = useSeconds
      ? `${this.date.getMinutes()}:${this.date.getSeconds()}`
      : `${this.date.getMinutes()}`

    if (useTwelveHourFormat) {
      const meridian = this.getMeridian()

      return `${hour}:${minutes} ${meridian}`
    } else {
      return `${hour}:${minutes}`
    }
  }

  setDiv (div: string | [string, string], hasSpacing = false): void {
    if (hasSpacing) {
      if (typeof div === 'string') {
        this.div = ` ${div} `
      } else {
        this.div = [` ${div[0]} `, ` ${div[1]} `]
      }
    } else {
      this.div = div
    }
  }

  setMonths (months: monthsType): void {
    this.months = months
  }

  setDays (days: daysType): void {
    this.days = days
  }

  private getYear (useTwoDigitsInYear: boolean): string {
    try {
      return useTwoDigitsInYear
        ? this.date.getFullYear().toString().substring(2, 4)
        : this.date.getFullYear().toString()
    } catch (error) {
      throw new Error('date probably does not have a value assigned')
    }
  }

  private getMonth (useMonthName: boolean): string {
    try {
      return useMonthName
        ? this.months[this.date.getMonth() as keyof monthsType]
        : (this.date.getMonth() + 1).toString()
    } catch (error) {
      throw new Error('date probably does not have a value assigned')
    }
  }

  private getMeridian (): 'AM' | 'PM' {
    try {
      return this.date.getHours() >= 12 ? 'PM' : 'AM'
    } catch (error) {
      throw new Error('date probably does not have a value assigned')
    }
  }

  private convertHourToMeridianFormat (): number {
    try {
      return this.date.getHours() >= 12 ? this.date.getHours() - 12 : this.date.getHours()
    } catch (error) {
      throw new Error('date probably does not have a value assigned')
    }
  }
}

export default UniversalDateFormat

export type {
  daysType,
  monthsType
}
