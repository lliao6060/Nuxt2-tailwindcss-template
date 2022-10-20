<script setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const count = ref(0)

const increaseCount = () => {
  count.value++
}

const minusCount = () => {
  count.value--
}
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
