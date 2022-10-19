import { defineStore } from 'pinia'

export const useAppStore = defineStore('App', {
  state: () => ({
    test: 'Hello World'
  }),
})