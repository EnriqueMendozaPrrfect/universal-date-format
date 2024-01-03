import UniversalDateFormatStandardError from './UniversalDateFormatStandardError'

class InvalidStringFormat extends UniversalDateFormatStandardError {
  constructor (invalidDateString: string) {
    super(`string given "${invalidDateString}" not has a valid format`, 'InvalidStringFormat')
  }
}

export default InvalidStringFormat
