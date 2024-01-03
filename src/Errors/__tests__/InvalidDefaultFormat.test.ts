import InvalidDefaultFormat from '../InvalidDefaultFormat'

describe('Universal Date Format Standard Error', () => {
  it('should create instance of InvalidDefaultFormat with mesage', () => {
    const invalidDefaultFormat = new InvalidDefaultFormat()

    expect(invalidDefaultFormat.cause).toBeUndefined()
    expect(
      invalidDefaultFormat.message
    ).toBe(
      'InvalidDefaultFormat: format given to use as default is not valid or is not assigned'
    )
  })
})
