import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  it('should create UniversalDateFormat instance', () => {
    const universalDateFormat = new UniversalDateFormat(new Date())

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
  })

  it('should create UniversalDateFormat instance using string', () => {
    const universalDateFormat = new UniversalDateFormat('2019-01-01T00:00:00.000Z')

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
  })

  it('should create UniversalDateFormat instance using invalid string', () => {
    const universalDateFormat = (): UniversalDateFormat => new UniversalDateFormat('this is not a date')

    expect(universalDateFormat).toThrow(
      'InvalidStringFormat: string given "this is not a date" not has a valid format'
    )
  })

  it('should create UniversalDateFormat instance using date using static function', () => {
    const universalDateFormat = UniversalDateFormat.getInstance(new Date())

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
  })

  it('should create UniversalDateFormat instance using string using static function', () => {
    const universalDateFormat = UniversalDateFormat.getInstance('2019-01-01T00:00:00.000Z')

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
  })

  it('should create UniversalDateFormat instance using invalid string using static function', () => {
    const universalDateFormat = (): UniversalDateFormat => UniversalDateFormat.getInstance('this is not a date')

    expect(universalDateFormat).toThrow(
      'InvalidStringFormat: string given "this is not a date" not has a valid format'
    )
  })
})
