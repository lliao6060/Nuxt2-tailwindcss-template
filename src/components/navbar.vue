<script>
import MenuList from './navbar/MenuList.vue'
import LanguageChange from './navbar/LanguageChange.vue'
import ThemeChange from './navbar/ThemeChange.vue'
import { useAppStore } from '@/store/app'
export default {
  name: 'Navbar',
  components: {
    MenuList,
    LanguageChange,
    ThemeChange
  },
  data() {
    return {
    };
  },
  computed: {
    appStore() {
      return useAppStore()
    },
  },
};
</script>


<template>
  <header class="
    flex
    bg-red-500
    transition-all
    duration-300
    dark:bg-gray-900
    dark:text-white
    dark:border-gray-700
  "
  >
    <nav class="
      w-11/12
      xl:w-4/5
      flex
      flex-wrap
      items-center
      justify-between
      mx-auto
    "
    >
      <div @click="appStore.isMenuShow = false">
        <NuxtLink :to="localePath('index')">
          <div class="d-block">
            <img
              src="~/assets/images/maju.jpeg"
              class="object-cover rounded-md w-[45px] w-xl-[50px]"
            >
          </div>
        </NuxtLink>
      </div>
      <div class="flex space-x-4">
        <div
          class="
            w-full
            d-none
            d-xl-block
          "
        >
          <MenuList />
        </div>
        <LanguageChange />
        <ThemeChange />
        <div
          class="xl:hidden md:flex-center"
          @click="appStore.toggleMenu()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-6 cursor-pointer flex-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
    <div
      v-show="appStore.isMenuShow"
      class="
        absolute
        w-full
        top-[6.2vh]
        right-0
        h-0
        transition-all
        ease-out
        duration-500
        z-10
      "
    >
      <MenuList
        :show-menu="appStore.isMenuShow"
        @onNavClicked="appStore.toggleMenu(false)"
      />
    </div>
  </header>
</template>