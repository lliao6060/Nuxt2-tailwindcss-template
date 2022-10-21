<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { mockUserList } from '~/plugins/remock'
import useApis from '~/composables/useApis'

export default defineComponent({
  head: {},
  setup() {
    const title = ref('axios demo page')
    useMeta(() => (
      {
        title: title.value,
        hid: 'description',
        name: 'description',
        content: 'axios demo page description'
      }
    ))

    const { useMockApi, useApi } = useApis()

    const userList = ref([])
    const loading = ref(false)

    const getUserList = async () => {
      loading.value = true
      const res = await useMockApi(mockUserList())
      if(res) {
        userList.value = res.list
        loading.value = false
      }
    }

    const getApi = async () => {
      const res = await useApi('https://jsonplaceholder.typicode.com/users', 'get')
      console.log(res)
    }

    onMounted(async () => {
      const apis = [getUserList(), getApi()]
      await Promise.all(apis)
    })

    return {
      loading,
      userList
    }
  },
})
</script>

<template>
  <div class="w-full mx-auto">
    <h1 class="title text-center">{{ $t('apipage.title') }}</h1>
    <div class="relative rounded-xl overflow-auto p-8">
      <Skeleton
        v-if="loading"
        :item-num="5"
      />
      <div
        v-else
        class="
        overflow-auto
        h-[500px]
        relative
        max-w-sm
        mx-auto
        bg-white
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
        dark:bg-slate-800
        dark:highlight-white/5
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
