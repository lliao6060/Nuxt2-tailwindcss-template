<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About page'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About page description'
        }
      ]
    }
  },
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
      <div class="w-75 w-xl-50 mx-auto py-2 text-left">
        <p class="text-justify">{{ $t('aboutpage.content') }}</p>
      </div>
    </div>
  </section>
</template>
