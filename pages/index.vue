<template>
  <div class="align-center">
    <h1 class="title text-2xl">{{ $t('home') }}</h1>
    <p>{{ appStore.test }}</p>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>
