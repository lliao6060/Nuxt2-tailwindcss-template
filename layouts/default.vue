<script>
import Navbar from '@/components/navbar'
export default {
  name: 'defaultLayout',
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="
    default-layout
    layout
    bg-gray-100
    transition-all
    duration-300
    select-none
    dark:bg-blue-900
    dark:text-white
  ">
    <Navbar />
    <main class="
      w-11/12
      xl:w-4/5
      mx-auto
    ">
      <Nuxt />
    </main>
    <footer class="
      bg-red-500
      flex-center
      dark:bg-gray-900
      dark:text-white
    ">
      footer
    </footer>
  </div>
</template>

<style lang='scss'>
  main {
    flex: auto;
    padding: 10px 0;
  }
  header, footer {
    height: 6vh;
  }
  footer {
    height: 100px;
    flex-shrink: 0;
  }
</style>