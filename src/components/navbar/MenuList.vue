<script>
export default {
  props: ['showMenu'],
  name: 'MenuList',
  data() {
    return {};
  },
};
</script>

<template>
  <ul
    class="
      text-base
      text-white
      xl:flex
      xl:justify-between
      mt-[0.5]
      bg-transparent
      text-center
      dark:text-white
    "
    :class="{ 'bg-red-300 dark:bg-gray-600': showMenu }"
  >
    <li class="md:text-lg cursor-pointer">
      <nuxt-link
        :to="localePath('about')"
        class="
          md:p-4
          py-2
          block
          hover:opacity-75
          cursor-pointer
        "
      >
        {{ $t('about') }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
</style>