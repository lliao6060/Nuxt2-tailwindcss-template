<script setup>
import { mockUserList } from '~/plugins/remock'
import Skeleton from '../components/skeleton.vue'
const { proxy } = getCurrentInstance()
const userList = ref([])
const loading = ref(false)

const getApi = async () => {
  loading.value = true
  const res = await mockUserList()
  if(res) {
    console.log(res)
    userList.value = res.list
    loading.value = false
  }

  // console.log(mockData)
  // const res = await proxy.$api.$get('user.json');
  // if(res) {
  //   console.log(res)
  //   apiData.value = res
  // }
}

onMounted(async () => {
  await getApi()
})

</script>



<template>
  <div class="w-full mx-auto">
    <h1 class="title text-center">{{ $t('apipage.title') }}</h1>
    <div class="relative rounded-xl overflow-auto p-8">
      <template v-if="loading">
        <Skeleton />
      </template>
      <div
        v-else
        class="
        overflow-auto
        h-[500px]
        relative
        max-w-sm
        mx-auto
        bg-white
        dark:bg-slate-800
        dark:highlight-white/5
        shadow-lg
        ring-1
        ring-black/5
        rounded-xl
        flex
        flex-col
        divide-y
        scrollbar
        vertical
        dark:divide-slate-200/5
      ">
        <div
          v-for="(user, i) in userList"
          :key="`${user.id}-${i}`"
          class="flex items-center gap-4 p-4"
        >
          <img
            class="w-12 h-12 rounded-full"
            :src="user.avatar"
          >
          <div class="flex flex-col">
            <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">{{ user.name }}</strong>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">{{ user.profession }}</span>
            <span class="text-slate-500 text-sm font-medium dark:text-slate-400">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
