<script>
import MenuList from './navbar/MenuList.vue'
import LanguageChange from './navbar/LanguageChange.vue'
import ThemeChange from './navbar/ThemeChange.vue'
export default {
  name: 'Navbar',
  components: {
    MenuList,
    LanguageChange,
    ThemeChange
  },
  data() {
    return {
      isMenuShow: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuShow = !this.isMenuShow;
    }
  }
};
</script>


<template>
  <header class="
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
      h-full
      flex
      flex-wrap
      items-center
      justify-between
      mx-auto
    "
    >
      <div>
        <NuxtLink :to="localePath('index')">
          <div class="d-block">
            <img
              src="~/assets/images/maju.jpeg"
              class="object-cover rounded-md"
              width="45px"
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
          @click="toggleMenu"
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
      class="
        absolute
        w-25
        right-0
        d-none
        h-0 transition-all ease-out duration-500
        z-10
      "
      :class="{ 'd-block': isMenuShow }"
    >
      <MenuList :show-menu="isMenuShow"/>
    </div>
  </header>
</template>