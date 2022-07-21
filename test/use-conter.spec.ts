import { useCounter } from '~/composable/use-counter'

describe('Name of the group', () => {
  it('should ', () => {
    const { count } = useCounter()
    expect(count.value).toBe(1)
  })
})
