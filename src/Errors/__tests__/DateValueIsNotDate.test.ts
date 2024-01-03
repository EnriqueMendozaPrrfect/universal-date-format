import DateValueIsNotDate from '../DateValueIsNotDate'

describe('Date Value Is Not Date', () => {
  it('should create instance of DateValueIsNotDate with mesage', () => {
    const dateValueIsNotDate = new DateValueIsNotDate({ cause: new Error('getYear is not a function') })

    expect(dateValueIsNotDate.cause?.message).toBe('getYear is not a function')
    expect(
      dateValueIsNotDate.message
    ).toBe(
      'DateValueNotIsDate: the current value of date probably is not a date or is not assigned'
    )
  })
})
