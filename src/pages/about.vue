<script>
export default {
  name: 'About',
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
}
</script>

<template>
  <section class="w-full mx-auto text-center align-center">
    <div>
      <h1 class="title">{{ $t('aboutpage.title') }}</h1>
      <p>{{ $t('aboutpage.subtitle', [name]) }}</p>
      <p class="w-75 w-xl-50 mx-auto py-2 text-left">{{ $t('aboutpage.content') }}</p>
    </div>
  </section>
</template>
