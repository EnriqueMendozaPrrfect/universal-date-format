import getDateFormatString from './formatDateToString'
import UniversalDateFormatInitialValues from './initialValues'
import {
  type ConfigurationType,
  type DaysType,
  type MonthsType,
  type TypeOfDate
} from './types'
import {
  DateValueNotIsDate,
  InvalidDefaultFormat,
  InvalidStringFormat,
  UniversalDateFormatStandardError
} from './Errors'

class UniversalDateFormat {
  protected date: Date
  private div: string | [string, string]
  private defaultFormat: TypeOfDate
  private months: MonthsType
  private days: DaysType
  private isMeridianFormat
  private isMonthName

  constructor (date: Date, configuration?: ConfigurationType)
  constructor (date: string, configuration?: ConfigurationType)
  constructor (...arg: unknown[]) {
    if (typeof arg[0] === 'string') {
      this.date = new Date(arg[0])

      if (this.date.toString() === 'Invalid Date') throw new InvalidStringFormat(arg[0])
    } else if (arg[0] instanceof Date) {
      this.date = arg[0]
    } else {
      throw new UniversalDateFormatStandardError(
        'value given to create an instance of UniversalDateFormat is not valid'
      )
    }

    const configuration = typeof arg[1] !== 'undefined' ? arg[1] as ConfigurationType : undefined

    this.div = configuration?.div ?? UniversalDateFormatInitialValues.div
    this.defaultFormat = configuration?.defaultFormat ?? UniversalDateFormatInitialValues.defaultFormat
    this.months = configuration?.months ?? UniversalDateFormatInitialValues.months
    this.days = configuration?.days ?? UniversalDateFormatInitialValues.days
    this.isMeridianFormat = configuration?.useMeridianFormat ?? false
    this.isMonthName = configuration?.useMonthName ?? false
  }

  static getInstance (date: Date | string): UniversalDateFormat {
    if (typeof date === 'string') {
      return new this(date)
    } else {
      return new this(date)
    }
  }

  getDateFormat (
    isYearAsTwoDigits: boolean = false
  ): string {
    switch (this.defaultFormat) {
      case 'YYYYMMDD':
        return this.getDateAsYYYYMMDD(isYearAsTwoDigits)
      case 'MMDDYYYY':
        return this.getDateAsMMDDYYYY(isYearAsTwoDigits)
      case 'DDMMYYYY':
        return this.getDateAsDDMMYYYY(isYearAsTwoDigits)
      default:
        throw new InvalidDefaultFormat()
    }
  }

  setYYYYMMDDAsDefault (): void {
    this.defaultFormat = 'YYYYMMDD'
  }

  setMMDDYYYYAsDefault (): void {
    this.defaultFormat = 'MMDDYYYY'
  }

  setDDMMYYYYAsDefault (): void {
    this.defaultFormat = 'DDMMYYYY'
  }

  getDayName (): string {
    return this.days[this.date.getDay()]
  }

  getHourFormat (isSecondsEnabled: boolean = false): string {
    const hour = this.isMeridianFormat
      ? this.convertHourToMeridianFormat()
      : ('0' + this.date.getHours()).slice(-2)
    const minutes = isSecondsEnabled
      ? `${('0' + this.date.getMinutes()).slice(-2)}:${('0' + this.date.getSeconds()).slice(-2)}`
      : `${('0' + this.date.getMinutes()).slice(-2)}`

    if (this.isMeridianFormat) {
      const meridian = this.getMeridian()

      return `${hour}:${minutes} ${meridian}`
    } else {
      return `${hour}:${minutes}`
    }
  }

  modifyDiv (div: string | [string, string], hasSpacing = false): void {
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

  modifyMonthsName (months: MonthsType): void {
    this.months = months
  }

  modifyDaysName (days: DaysType): void {
    this.days = days
  }

  use24HoursFormat (): void {
    this.isMeridianFormat = false
  }

  useMeridianFormat (): void {
    this.isMeridianFormat = true
  }

  useMonthName (): void {
    this.isMonthName = true
  }

  useMonthNumber (): void {
    this.isMonthName = false
  }

  private getDateAsYYYYMMDD (
    isYearAsTwoDigits: boolean = false
  ): string {
    const year = this.getYear(isYearAsTwoDigits)
    const mounth = this.getMonth(this.isMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(year, mounth, day, this.div)
  }

  private getDateAsMMDDYYYY (
    isYearAsTwoDigits: boolean = false
  ): string {
    const year = this.getYear(isYearAsTwoDigits)
    const mounth = this.getMonth(this.isMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(mounth, day, year, this.div)
  }

  private getDateAsDDMMYYYY (
    isYearAsTwoDigits: boolean = false
  ): string {
    const year = this.getYear(isYearAsTwoDigits)
    const mounth = this.getMonth(this.isMonthName)
    const day = this.date.getDate().toString()

    return getDateFormatString(day, mounth, year, this.div)
  }

  private getYear (isYearAsTwoDigits: boolean): string {
    try {
      return isYearAsTwoDigits
        ? this.date.getFullYear().toString().substring(2, 4)
        : this.date.getFullYear().toString()
    } catch (error) {
      if (error instanceof Error) {
        throw new DateValueNotIsDate({ cause: error })
      } else {
        throw new UniversalDateFormatStandardError('An unexpected error ocurred')
      }
    }
  }

  private getMonth (useMonthName: boolean): string {
    try {
      return useMonthName
        ? this.months[this.date.getMonth()]
        : (this.date.getMonth() + 1).toString()
    } catch (error) {
      if (error instanceof Error) {
        throw new DateValueNotIsDate({ cause: error })
      } else {
        throw new UniversalDateFormatStandardError('An unexpected error ocurred')
      }
    }
  }

  private getMeridian (): 'AM' | 'PM' {
    try {
      return this.date.getHours() >= 12 ? 'PM' : 'AM'
    } catch (error) {
      if (error instanceof Error) {
        throw new DateValueNotIsDate({ cause: error })
      } else {
        throw new UniversalDateFormatStandardError('An unexpected error ocurred')
      }
    }
  }

  private convertHourToMeridianFormat (): string {
    try {
      const hour = this.date.getHours() >= 12 ? this.date.getHours() - 12 : this.date.getHours()
      return ('0' + hour).slice(-2)
    } catch (error) {
      if (error instanceof Error) {
        throw new DateValueNotIsDate({ cause: error })
      } else {
        throw new UniversalDateFormatStandardError('An unexpected error ocurred')
      }
    }
  }
}

export default UniversalDateFormat

export {
  DateValueNotIsDate,
  InvalidDefaultFormat,
  InvalidStringFormat,
  UniversalDateFormatStandardError
}

export type {
  ConfigurationType,
  DaysType,
  MonthsType
}
