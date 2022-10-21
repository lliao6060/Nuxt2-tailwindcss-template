<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { useAppStore } from '@/store/app'

export default defineComponent({
  head: {},
  setup() {
    const title = ref('index page')
    useMeta(() => (
      {
        title: title.value,
      //   hid: 'description',
      //   name: 'description',
      //   content: envConfig.env.DESCRIPTION
      }
    ))

    const count = ref(0)
    const appStore = useAppStore()

    const increaseCount = () => {
      count.value++
    }

    const minusCount = () => {
      count.value--
    }

    return {
      count,
      appStore,

      increaseCount,
      minusCount
    }
  },
})
</script>

<template>
  <div class="w-full mx-auto text-center align-center">
    <h1 class="title">{{ $t('home') }}</h1>
    <p>from app store message: {{ appStore.test }}</p>
    <div>
      <button @click="minusCount">-</button>
      <span>{{ count }}</span>
      <button @click="increaseCount">+</button>
    </div>
  </div>
</template>
