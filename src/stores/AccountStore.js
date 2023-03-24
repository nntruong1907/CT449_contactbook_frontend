import { defineStore } from 'pinia';

export const useAccountStore = defineStore('user', {
  state: () => ({ user: {} ,isLogin: false })
})