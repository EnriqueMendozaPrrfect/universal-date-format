import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  it('should create UniversalDateFormat instance', () => {
    const universalDateFormat = new UniversalDateFormat(new Date())

    expect(universalDateFormat).toBeInstanceOf(UniversalDateFormat)
  })
})
