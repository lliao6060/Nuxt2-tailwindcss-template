import { defineStore } from 'pinia'

export const useAppStore = defineStore('App', {
  state: () => ({
    test: 'Hello World',
    isMenuShow: false,
  }),
  actions: {
    toggleMenu(bool) {
      if(bool) {
        this.isMenuShow = bool
      }
      this.isMenuShow = !this.isMenuShow;
    }
  },
})