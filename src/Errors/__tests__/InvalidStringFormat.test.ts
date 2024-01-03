import InvalidStringFormat from '../InvalidStringFormat'

describe('Universal Date Format Standard Error', () => {
  it('should create instance of InvalidStringFormat with mesage', () => {
    const invalidStringFormat = new InvalidStringFormat('invalid date')

    expect(invalidStringFormat.cause).toBeUndefined()
    expect(
      invalidStringFormat.message
    ).toBe(
      'InvalidStringFormat: string given "invalid date" not has a valid format'
    )
  })
})
