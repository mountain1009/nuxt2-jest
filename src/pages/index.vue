<template>
  <div class="container">
    <div>
      <button class="btn" @click="obj.id++">obj number++</button>
      <p>{{ obj }}</p>
    </div>
    <div>
      <button class="btn" @click="state++">Number++</button>
      <p>{{ state }}</p>
    </div>
    <div>
      <button class="btn" @click="objReactive.id++">
        objReactive number++
      </button>
      <p>{{ objReactive }}</p>
    </div>
    <div>
      <p>{{ count }}</p>
      <button class="btn" @click="increment()">increment</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import { useCounter } from '~/composable/use-counter'

export default defineComponent({
  setup() {
    const { count, increment } = useCounter()
    const state = ref(0)
    const obj = ref({ id: 1 })
    const objReactive = reactive({ id: 1 })

    return {
      state,
      obj,
      objReactive,
      count,
      increment,
    }
  },
})
</script>
