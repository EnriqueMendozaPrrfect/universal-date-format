import UniversalDateFormatStandardError from './UniversalDateFormatStandardError'

class MethodNotAvailable extends UniversalDateFormatStandardError {
  constructor () {
    super('method not available in DateFormater class', 'MethodNotAvailable')
  }
}

export default MethodNotAvailable
