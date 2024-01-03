import { type ErrorOptions } from '../types'

import UniversalDateFormatStandardError from './UniversalDateFormatStandardError'

class DateValueNotIsDate extends UniversalDateFormatStandardError {
  constructor (options: ErrorOptions) {
    super(
      'the current value of date probably is not a date or is not assigned',
      'DateValueNotIsDate',
      options
    )
  }
}

export default DateValueNotIsDate
