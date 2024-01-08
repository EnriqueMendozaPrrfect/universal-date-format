import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('use cases', () => {
    it('should display date as mexican format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 15))

      universalDateFormat.modifyDiv(['de', 'del'], true)
      universalDateFormat.useMonthName()
      universalDateFormat.modifyMonthsName([
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembte'
      ])
      universalDateFormat.modifyDaysName([
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sábado'
      ])

      universalDateFormat.setDDMMYYYYAsDefault()

      expect(
        `${universalDateFormat.getDayName()} ${universalDateFormat.getDateFormat()}`
      ).toBe('Viernes 15 de Enero del 2027')
    })

    it('should display date as brazilian format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 15))

      universalDateFormat.modifyDiv('de', true)
      universalDateFormat.useMonthName()
      universalDateFormat.modifyMonthsName([
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ])
      universalDateFormat.modifyDaysName([
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
      ])

      universalDateFormat.setDDMMYYYYAsDefault()

      expect(
        `${universalDateFormat.getDayName()}, ${universalDateFormat.getDateFormat()}`
      ).toBe('Sexta-feira, 15 de Janeiro de 2027')
    })
  })
})
