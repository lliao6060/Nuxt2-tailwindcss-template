<template>
  <div class="w-full mx-auto text-center align-center">
    <h1 class="title">{{ $t('home') }}</h1>
    <p>from app store message: {{ appStore.test }}</p>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>
