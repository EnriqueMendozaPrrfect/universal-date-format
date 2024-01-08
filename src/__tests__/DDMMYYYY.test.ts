import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('DDMMYYYY', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should get date with DDMMYYYY format', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDateFormat()).toBe('1/1/2020')
    })

    it('should get date with DDMMYYYY format using hyphen', () => {
      universalDateFormat.setDDMMYYYYAsDefault()
      universalDateFormat.modifyDiv('-')

      expect(universalDateFormat.getDateFormat()).toBe('1-1-2020')
    })

    it('should get date with DDMMYYYY format using hyphen with spacing', () => {
      universalDateFormat.setDDMMYYYYAsDefault()
      universalDateFormat.modifyDiv('-', true)

      expect(universalDateFormat.getDateFormat()).toBe('1 - 1 - 2020')
    })

    it('should get date with DDMMYYYY format using month with name', () => {
      universalDateFormat.setDDMMYYYYAsDefault()
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat()).toBe('1/January/2020')
    })

    it('should get date with DDMMYYYY format using two digits in the year', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDateFormat(true)).toBe('1/1/20')
    })

    it('should get date with DDMMYYYY format using month name and two digits in the year', () => {
      universalDateFormat.setDDMMYYYYAsDefault()
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat(true)).toBe('1/January/20')
    })
  })
})
