import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('MMDDYYYY', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should convert MMDDYYYY to default', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDateFormat()).toBe('1/1/2020')
    })

    it('should get date with MMDDYYYY format', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDateFormat()).toBe('1/1/2020')
    })

    it('should get date with MMDDYYYY format using hyphen', () => {
      universalDateFormat.setMMDDYYYYAsDefault()
      universalDateFormat.modifyDiv('-')

      expect(universalDateFormat.getDateFormat()).toBe('1-1-2020')
    })

    it('should get date with MMDDYYYY format using hyphen with spacing', () => {
      universalDateFormat.setMMDDYYYYAsDefault()
      universalDateFormat.modifyDiv('-', true)

      expect(universalDateFormat.getDateFormat()).toBe('1 - 1 - 2020')
    })

    it('should get date with MMDDYYYY format using month with name', () => {
      universalDateFormat.setMMDDYYYYAsDefault()
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat()).toBe('January/1/2020')
    })

    it('should get date with MMDDYYYY format using two digits in the year', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDateFormat(true)).toBe('1/1/20')
    })

    it('should get date with MMDDYYYY format using month name and two digits in the year', () => {
      universalDateFormat.setMMDDYYYYAsDefault()
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat(true)).toBe('January/1/20')
    })
  })
})
