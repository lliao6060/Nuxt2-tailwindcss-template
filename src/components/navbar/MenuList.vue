<script setup>
const props = defineProps(['showMenu'])
const emit = defineEmits(['onNavClicked'])

const navList = [
  {
    name: 'about',
    title: 'aboutpage.title',
  },
  {
    name: 'axios',
    title: 'apipage.title',
  },
]

const onNavClick = () => {
  emit('onNavClicked')
}
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
    :class="{ 'bg-red-300 dark:bg-gray-600': props.showMenu }"
  >
    <li
      v-for="(navItem, i) in navList"
      :key="`${navItem.name}-${i}`"
      @click="onNavClick"
      class="md:text-lg cursor-pointer"
      :class="{ 'bg-red-400 dark:bg-gray-800': $route.name === `${navItem.name}___${$i18n.locale}` }"
    >
      <nuxt-link
        :to="localePath(navItem.name)"
        class="
          md:p-4
          py-2
          block
          hover:opacity-75
          cursor-pointer
        "
      >
        {{ $t(navItem.title) }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
</style>