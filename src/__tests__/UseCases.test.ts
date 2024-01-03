import UniversalDateFormat from '..'

describe('Universal Date Format', () => {
  describe('use cases', () => {
    it('should display date as mexican format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 15))

      universalDateFormat.setDiv(['de', 'del'], true)
      universalDateFormat.setMonths({
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembte'
      })
      universalDateFormat.setDays({
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miercoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado'
      })

      expect(
        `${universalDateFormat.getDayName()} ${universalDateFormat.getDateAsDDMMYYYY(true)}`
      ).toBe('Viernes 15 de Enero del 2027')
    })

    it('should display date as brazilian format', () => {
      const universalDateFormat = new UniversalDateFormat(new Date(2027, 0, 15))

      universalDateFormat.setDiv('de', true)
      universalDateFormat.setMonths({
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'Maio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro'
      })
      universalDateFormat.setDays({
        0: 'Domingo',
        1: 'Segunda-feira',
        2: 'Terça-feira',
        3: 'Quarta-feira',
        4: 'Quinta-feira',
        5: 'Sexta-feira',
        6: 'Sábado'
      })

      expect(
        `${universalDateFormat.getDayName()}, ${universalDateFormat.getDateAsDDMMYYYY(true)}`
      ).toBe('Sexta-feira, 15 de Janeiro de 2027')
    })
  })
})
