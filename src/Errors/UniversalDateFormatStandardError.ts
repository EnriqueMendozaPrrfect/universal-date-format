import { type ErrorOptions } from '../types'

class UniversalDateFormatStandardError extends Error {
  cause?: Error

  constructor (message: string, typeOfError?: string)
  constructor (message: string, options?: ErrorOptions)
  constructor (message: string, typeOfError?: string, options?: ErrorOptions)
  constructor (...arg: unknown[]) {
    if (!(typeof arg[0] === 'string')) {
      throw new Error('UniversalDateFormatStandardError: message of error not given')
    }

    if (typeof arg[1] === 'string') {
      if (typeof arg[2] === 'object') {
        super(`${arg[1]}: ${arg[0]}`)

        this.cause = (arg[2] as ErrorOptions)?.cause
      } else {
        super(`${arg[1]}: ${arg[0]}`)
      }
    } else if (typeof arg[1] === 'object') {
      super(`UniversalDateFormatStandardError: ${arg[0]}`)

      this.cause = (arg[1] as ErrorOptions)?.cause
    } else {
      super(`UniversalDateFormatStandardError: ${arg[0]}`)
    }
  }
}

export default UniversalDateFormatStandardError
