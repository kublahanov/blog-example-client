<template>
  <el-container>
    <el-header>
      <h1>Блог, посты и теги</h1>
      <el-divider direction="vertical" border-style="none" />
      <div class="right">
        <el-avatar
          :size="32"
          class=""
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span>{{ userStore.user.name }}</span>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <Footer />
  </el-container>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import { inject, onMounted } from "vue";
import { useUserStore } from "./stores/userStore.js";

const axios = inject("axios");

const userStore = useUserStore();

onMounted(() => {
  try {
    axios
      .post("/auth/login", {
        email: "test@test.com",
        password: "1234567",
      })
      .then(function (response) {
        userStore.setUser(response.data.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error("Ошибка при загрузке данных пользователя:", error);
  }
});
</script>

<style lang="sass">
header
  background-color: var(--el-color-primary-light-7)
  display: flex
  align-items: center
  justify-content: space-between

  h1
    font-size: 1.5rem
    margin: 0

  .right
    display: flex
    align-items: center
    .el-avatar
      margin-right: 0.7rem

main
  background-color: white
  padding-top: 0 !important
  padding-bottom: 0 !important
</style>
