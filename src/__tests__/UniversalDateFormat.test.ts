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

  it('should create UniversalDateFormat instance using a configuration', () => {
    const universalDateFormat = new UniversalDateFormat(
      new Date(2020, 0, 1),
      {
        defaultFormat: 'MMDDYYYY',
        div: '/',
        useMeridianFormat: true,
        useMonthName: true,
        days: [
          'Sun', 'Mon', 'Tue',
          'Wed', 'Thu', 'Fri',
          'Sat'
        ],
        months: [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      }
    )

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
    expect(universalDateFormat.getDateFormat()).toBe('Jan/1/2020')
    expect(universalDateFormat.getDayName()).toBe('Wed')
  })

  it('should create UniversalDateFormat instance without all configuration', () => {
    const universalDateFormat = new UniversalDateFormat(
      new Date(2020, 0, 1),
      {
        defaultFormat: 'MMDDYYYY',
        useMeridianFormat: true,
        useMonthName: true
      }
    )

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
    expect(universalDateFormat.getDateFormat()).toBe('January/1/2020')
    expect(universalDateFormat.getDayName()).toBe('Wednesday')
  })

  it('should create UniversalDateFormat instance modifying days and month names', () => {
    const universalDateFormat = new UniversalDateFormat(
      new Date(2020, 0, 1),
      {
        useMonthName: true,
        days: [
          'Sun', 'Mon', 'Tue',
          'Wed', 'Thu', 'Fri',
          'Sat'
        ],
        months: [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      }
    )

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
    expect(universalDateFormat.getDateFormat()).toBe('2020/Jan/1')
    expect(universalDateFormat.getDayName()).toBe('Wed')
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
