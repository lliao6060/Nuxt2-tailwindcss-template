<script>
export default {
  name: 'ThemeChange',
  data() {
    return {
    };
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>

<template>
  <button
    @click="toggle"
    class="flex-center"
  >
    <iconify-icon
      :icon="$colorMode.value == 'light' ? 'ri:moon-clear-fill' : 'ic:sharp-light-mode'"
      class="text-white"
      style="font-size: 30px"
    />
  </button>
</template>

<style lang="scss" scoped>
</style>
