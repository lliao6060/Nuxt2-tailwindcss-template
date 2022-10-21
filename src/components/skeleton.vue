<script setup>
const props = defineProps({
  itemNum: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div>
    <div
      v-for="(skeletonItem, i) in props.itemNum"
      :key="`${skeletonItem}-${i}`"
      class="
        bg-white
        border
        border-gray-300
        shadow
        rounded-md
        p-4
        max-w-sm
        w-full
        mx-auto
        dark:bg-slate-800
        dark:border-gray-500
      "
    >
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>