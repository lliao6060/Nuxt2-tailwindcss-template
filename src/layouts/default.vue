<script setup>
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
      w-full
      md:w-11/12
      xl:w-4/5
      mx-auto
      text-xl-lg
    ">
      <Nuxt />
    </main>
    <footer class="
      bg-red-500
      flex-center
      text-2xl
      text-white
      dark:bg-gray-900
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
    height: 6.2vh;
  }
  footer {
    height: 60px;
    flex-shrink: 0;
  }
</style>