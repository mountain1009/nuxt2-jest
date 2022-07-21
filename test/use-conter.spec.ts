import { useCounter } from '~/composable/use-counter'

describe('Name of the group', () => {
  it('should ', () => {
    const { count } = useCounter()
    expect(count.value).toBe(1)
  })
  it('should ', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(2)
  })
})
