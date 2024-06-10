import UniversalDateFormat, { type DateFormater } from '..'

describe('Universal Date Format', () => {
  describe('execute', () => {
    let universalDateFormat: UniversalDateFormat

    beforeEach(() => {
      universalDateFormat = new UniversalDateFormat(new Date(2020, 0, 1))
    })

    it('should execute a function', () => {
      const fn = (dateFormater: DateFormater): string => {
        return dateFormater.getDateFormat()
      }

      expect(universalDateFormat.execute(fn)).toBe('2020/1/1')
    })

    it('should execute a function using a default configuration', () => {
      const fn = (dateFormater: DateFormater): string => {
        return dateFormater.getDateFormat()
      }

      universalDateFormat.setDDMMYYYYAsDefault()

      expect(universalDateFormat.execute(fn)).toBe('1/1/2020')
    })

    it('should return json when executing the function', () => {
      const fn = (dateFormater: DateFormater): { default: string, english: string, spanish: string } => {
        const def = dateFormater.getDateFormat()

        dateFormater.setMMDDYYYYAsDefault()
        const english = dateFormater.getDateFormat()

        dateFormater.setDDMMYYYYAsDefault()
        const spanish = dateFormater.getDateFormat()

        return {
          default: def,
          english,
          spanish
        }
      }

      const response = universalDateFormat.execute(fn)

      expect(response.default).toBe('2020/1/1')
      expect(response.english).toBe('1/1/2020')
      expect(response.spanish).toBe('1/1/2020')
    })
  })
})
