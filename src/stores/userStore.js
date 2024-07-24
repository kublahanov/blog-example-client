import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {
      id: undefined,
      name: "",
    },
  }),
  actions: {
    setUser(userData) {
      this.user = userData;
    },
  },
});
