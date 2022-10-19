<script>
export default {
  name: 'LanguageChange',
  data() {
    return {
      showLangMenu: false,
    };
  },
  methods: {
    toggleLangMenu(bool) {
      if(bool) {
        this.showLangMenu = bool
      }
      this.showLangMenu = !this.showLangMenu
    }
  },
}
</script>

<template>
  <div class="flex-center">
    <div
      class="
        lang-droupdown
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        cursor-pointer
      "
      @click="showLangMenu = !showLangMenu"
    >
      <iconify-icon
        icon="fa6-solid:language"
        class="text-white"
        style="font-size: 30px"
      />

      <div
        v-show="showLangMenu"
        class="lang-droupdown__menu w-4/5">
        <nuxt-link
          v-for="(locale, i) in $i18n.locales"
          :key="`${locale.code}-${i}`"
          class="
            flex
            justify-between
            py-2
            px-4
            cursor-pointer
          "
          :class="{
            'text-white bg-gray-600 dark:bg-sky-600':
            $i18n.locale === locale.code,
            'bg-gray-300 dark:bg-gray-600 hover:bg-gray-500 hover:text-white':
            $i18n.locale !== locale.code,
          }"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
          <span class="
            flex
            items-center
            justify-center
            text-sm
          "
          >
            <iconify-icon
              :icon="locale.flag"
              class="text-base"
            />
          </span>
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-droupdown {
  &__menu {
    position: absolute;
    width: 150px;
    top: 6vh;
    right: 12.5%;
  }
}
</style>
