import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('days naming', () => {
    it('should get sunday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 17))

      expect(universalDateFormat.getDayName()).toBe('Sunday')
    })

    it('should get monday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 18))

      expect(universalDateFormat.getDayName()).toBe('Monday')
    })

    it('should get tuesday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 19))

      expect(universalDateFormat.getDayName()).toBe('Tuesday')
    })

    it('should get wednesday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 20))

      expect(universalDateFormat.getDayName()).toBe('Wednesday')
    })

    it('should get thursday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 21))

      expect(universalDateFormat.getDayName()).toBe('Thursday')
    })

    it('should get friday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 22))

      expect(universalDateFormat.getDayName()).toBe('Friday')
    })

    it('should get saturday name', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 23))

      expect(universalDateFormat.getDayName()).toBe('Saturday')
    })

    it('should get sunday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 17))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Domingo')
    })

    it('should get monday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 18))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Lunes')
    })

    it('should get tuesday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 19))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Martes')
    })

    it('should get wednesday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 20))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Miercoles')
    })

    it('should get thursday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 21))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Jueves')
    })

    it('should get friday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 22))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Viernes')
    })

    it('should get saturday name in spanish', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 23))

      universalDateFormat.modifyDaysName([
        'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'
      ])

      expect(universalDateFormat.getDayName()).toBe('Sábado')
    })
  })
})
