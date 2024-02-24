import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',{
	  state:()=>{
		  return {
			  userInfo : uni.getStorageSync("userInfo") || {}
		  }
	  },
	  getters:{},
	  actions:{}
  })