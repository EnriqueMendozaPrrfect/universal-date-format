import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('YYYYMMDD', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should get date with YYYYMMDD format', () => {
      expect(universalDateFormat.getDateAsYYYYMMDD()).toBe('2020/1/1')
    })

    it('should get date with YYYYMMDD format using hyphen', () => {
      universalDateFormat.setDiv('-')

      expect(universalDateFormat.getDateAsYYYYMMDD()).toBe('2020-1-1')
    })

    it('should get date with YYYYMMDD format using hyphen with spacing', () => {
      universalDateFormat.setDiv('-', true)

      expect(universalDateFormat.getDateAsYYYYMMDD()).toBe('2020 - 1 - 1')
    })

    it('should get date with YYYYMMDD format using month with name', () => {
      expect(universalDateFormat.getDateAsYYYYMMDD(true)).toBe('2020/January/1')
    })

    it('should get date with YYYYMMDD format using two digits in the year', () => {
      expect(universalDateFormat.getDateAsYYYYMMDD(false, true)).toBe('20/1/1')
    })

    it('should get date with YYYYMMDD format using month name and two digits in the year', () => {
      expect(universalDateFormat.getDateAsYYYYMMDD(true, true)).toBe('20/January/1')
    })

    it('should get date with YYYYMMDD as default', () => {
      expect(universalDateFormat.getDate()).toBe('2020/1/1')
    })

    it('should convert YYYYMMDD to default', () => {
      universalDateFormat.setMMDDYYYYAsDefault()

      expect(universalDateFormat.getDate()).toBe('1/1/2020')

      universalDateFormat.setYYYYMMDDAsDefault()

      expect(universalDateFormat.getDate()).toBe('2020/1/1')
    })

    it('should get default date format using month with name', () => {
      expect(universalDateFormat.getDate(true)).toBe('2020/January/1')
    })

    it('should get default date format using two digits in the year', () => {
      expect(universalDateFormat.getDate(false, true)).toBe('20/1/1')
    })

    it('should get default date format using month name and two digits in the year', () => {
      expect(universalDateFormat.getDate(true, true)).toBe('20/January/1')
    })
  })
})
