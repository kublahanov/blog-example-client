import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {
      id: undefined,
      name: "",
    },
  }),
  actions: {
    async setUser(userData) {
      this.user.id = userData.id;
      this.user.name = userData.name;
    },
  },
});
