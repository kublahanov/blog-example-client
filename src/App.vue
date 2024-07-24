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
        <span>
          Иван Петров
        </span>
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
