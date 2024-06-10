import UniversalDateFormat from './UniversalDateFormat'
import { MethodNotAvailable } from './Errors'

class DateFormater extends UniversalDateFormat {
  static getInstance (_date: string | Date): UniversalDateFormat {
    throw new MethodNotAvailable()
  }

  getDate (): Date {
    return this.date
  }

  execute <T>(_func: (dateFormater: DateFormater) => T): T {
    throw new MethodNotAvailable()
  }
}

export default DateFormater
