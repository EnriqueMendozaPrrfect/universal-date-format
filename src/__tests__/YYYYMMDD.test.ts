import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('YYYYMMDD', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should get date with YYYYMMDD as default', () => {
      expect(universalDateFormat.getDateFormat()).toBe('2020/1/1')
    })

    it('should convert YYYYMMDD to default', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDateFormat()).toBe('1/1/2020')

      universalDateFormat.setYYYYMMDDAsDefault()

      expect(universalDateFormat.getDateFormat()).toBe('2020/1/1')
    })

    it('should get date with YYYYMMDD format using hyphen', () => {
      universalDateFormat.modifyDiv('-')

      expect(universalDateFormat.getDateFormat()).toBe('2020-1-1')
    })

    it('should get date with YYYYMMDD format using hyphen with spacing', () => {
      universalDateFormat.modifyDiv('-', true)

      expect(universalDateFormat.getDateFormat()).toBe('2020 - 1 - 1')
    })

    it('should get date with YYYYMMDD format using month with name', () => {
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat()).toBe('2020/January/1')
    })

    it('should get date with YYYYMMDD format using two digits in the year', () => {
      expect(universalDateFormat.getDateFormat(true)).toBe('20/1/1')
    })

    it('should get date with YYYYMMDD format using month name and two digits in the year', () => {
      universalDateFormat.useMonthName()

      expect(universalDateFormat.getDateFormat(true)).toBe('20/January/1')
    })
  })
})
