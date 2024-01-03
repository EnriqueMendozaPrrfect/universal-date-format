import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('MMDDYYYY', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should get date with MMDDYYYY format', () => {
      expect(universalDateFormat.getDateAsMMDDYYYY()).toBe('1/1/2020')
    })

    it('should get date with MMDDYYYY format using hyphen', () => {
      universalDateFormat.setDiv('-')

      expect(universalDateFormat.getDateAsMMDDYYYY()).toBe('1-1-2020')
    })

    it('should get date with MMDDYYYY format using hyphen with spacing', () => {
      universalDateFormat.setDiv('-', true)

      expect(universalDateFormat.getDateAsMMDDYYYY()).toBe('1 - 1 - 2020')
    })

    it('should get date with MMDDYYYY format using month with name', () => {
      expect(universalDateFormat.getDateAsMMDDYYYY(true)).toBe('January/1/2020')
    })

    it('should get date with MMDDYYYY format using two digits in the year', () => {
      expect(universalDateFormat.getDateAsMMDDYYYY(false, true)).toBe('1/1/20')
    })

    it('should get date with MMDDYYYY format using month name and two digits in the year', () => {
      expect(universalDateFormat.getDateAsMMDDYYYY(true, true)).toBe('January/1/20')
    })

    it('should convert MMDDYYYY to default', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDate()).toBe('1/1/2020')
    })

    it('should get default date format using month with name', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDate(true)).toBe('January/1/2020')
    })

    it('should get default date format using two digits in the year', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDate(false, true)).toBe('1/1/20')
    })

    it('should get default date format using month name and two digits in the year', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDate(true, true)).toBe('January/1/20')
    })
  })
})
