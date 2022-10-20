<script setup>
const { proxy } = getCurrentInstance()
const apiData = ref([])

const getApi = async () => {
  const res = await proxy.$api.$get('https://jsonplaceholder.typicode.com/users');
  if(res) {
    apiData.value = res
  }
}

onMounted(async () => {
  await getApi()
})

</script>



<template>
  <div class="w-full mx-auto">
    <h1 class="title text-center">{{ $t('apipage.title') }}</h1>
    <div class="relative rounded-xl overflow-auto p-8">
      <div class="overflow-auto h-100 relative max-w-sm mx-auto bg-white dark:bg-slate-800 dark:highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
        <div class="flex items-center gap-4 p-4">
          <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
          <div class="flex flex-col">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4">
          <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
          <div class="flex flex-col">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Debra Houston</strong>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Analyst</span>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4">
          <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
          <div class="flex flex-col">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Jane White</strong>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Director, Marketing</span>
          </div>
        </div>
        <div class="flex items-center gap-4 p-4">
          <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
          <div class="flex flex-col">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Ray Flint</strong>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Technical Advisor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
