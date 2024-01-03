import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('DDMMYYYY', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should get date with DDMMYYYY format', () => {
      expect(universalDateFormat.getDateAsDDMMYYYY()).toBe('1/1/2020')
    })

    it('should get date with DDMMYYYY format using hyphen', () => {
      universalDateFormat.setDiv('-')

      expect(universalDateFormat.getDateAsDDMMYYYY()).toBe('1-1-2020')
    })

    it('should get date with DDMMYYYY format using hyphen with spacing', () => {
      universalDateFormat.setDiv('-', true)

      expect(universalDateFormat.getDateAsDDMMYYYY()).toBe('1 - 1 - 2020')
    })

    it('should get date with DDMMYYYY format using month with name', () => {
      expect(universalDateFormat.getDateAsDDMMYYYY(true)).toBe('1/January/2020')
    })

    it('should get date with DDMMYYYY format using two digits in the year', () => {
      expect(universalDateFormat.getDateAsDDMMYYYY(false, true)).toBe('1/1/20')
    })

    it('should get date with DDMMYYYY format using month name and two digits in the year', () => {
      expect(universalDateFormat.getDateAsDDMMYYYY(true, true)).toBe('1/January/20')
    })

    it('should convert DDMMYYYY to default', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDate()).toBe('1/1/2020')
    })

    it('should get default date format using month with name', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDate(true)).toBe('1/January/2020')
    })

    it('should get default date format using two digits in the year', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDate(false, true)).toBe('1/1/20')
    })

    it('should get default date format using month name and two digits in the year', () => {
      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.getDate(true, true)).toBe('1/January/20')
    })
  })
})
