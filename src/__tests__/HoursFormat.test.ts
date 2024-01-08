import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('use cases', () => {
    it('should get hour as 24 hours format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(1704672120801))

      expect(universalDateFormat.getHourFormat()).toBe('18:02')
    })

    it('should get hour as 24 hours format with seconds', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(1704672120801))

      expect(universalDateFormat.getHourFormat(true)).toBe('18:02:00')
    })
    it('should get hour as meridian format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(1704672120801))

      universalDateFormat.useMeridianFormat()

      expect(universalDateFormat.getHourFormat()).toBe('06:02 PM')
    })

    it('should get hour as meridian format with seconds', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(1704672120801))

      universalDateFormat.useMeridianFormat()

      expect(universalDateFormat.getHourFormat(true)).toBe('06:02:00 PM')
    })
  })
})
