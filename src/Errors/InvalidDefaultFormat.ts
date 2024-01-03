import UniversalDateFormatStandardError from './UniversalDateFormatStandardError'

class InvalidDefaultFormat extends UniversalDateFormatStandardError {
  constructor () {
    super('format given to use as default is not valid or is not assigned', 'InvalidDefaultFormat')
  }
}

export default InvalidDefaultFormat
