import UniversalDateFormatStandardError from '../UniversalDateFormatStandardError'

describe('Universal Date Format Standard Error', () => {
  it('should create instance of UniversalDateFormatStandardError with mesage', () => {
    const universalDateFormatStandardError = new UniversalDateFormatStandardError(
      'example error message'
    )

    expect(universalDateFormatStandardError.cause).toBeUndefined()
    expect(
      universalDateFormatStandardError.message
    ).toBe(
      'UniversalDateFormatStandardError: example error message'
    )
  })

  it('should create instance of UniversalDateFormatStandardError with type of error', () => {
    const universalDateFormatStandardError = new UniversalDateFormatStandardError(
      'example error message',
      'TestError'
    )

    expect(universalDateFormatStandardError.cause).toBeUndefined()
    expect(
      universalDateFormatStandardError.message
    ).toBe(
      'TestError: example error message'
    )
  })

  it('should create instance of UniversalDateFormatStandardError with cause', () => {
    const universalDateFormatStandardError = new UniversalDateFormatStandardError(
      'example error message',
      { cause: new Error('Error in cause') }
    )

    expect(universalDateFormatStandardError.cause?.message).toBe('Error in cause')
    expect(
      universalDateFormatStandardError.message
    ).toBe(
      'UniversalDateFormatStandardError: example error message'
    )
  })

  it('should create instance of UniversalDateFormatStandardError with type of error cause', () => {
    const universalDateFormatStandardError = new UniversalDateFormatStandardError(
      'example error message',
      'TestError',
      { cause: new Error('Error in cause') }
    )

    expect(universalDateFormatStandardError.cause?.message).toBe('Error in cause')
    expect(
      universalDateFormatStandardError.message
    ).toBe(
      'TestError: example error message'
    )
  })
})
