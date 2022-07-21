import { ref } from '@nuxtjs/composition-api'

export const useCounter = () => {
  const count = ref(1)

  const increment = () => {
    count.value++
  }

  const reset = () => {
    count.value = 0
  }

  return { count, increment, reset }
}
