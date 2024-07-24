<template>
  <div class="footer-divider">
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div class="footer-row">
      <div class="copyrights">
        <span class="special-icon">&hearts;</span>
        Made by
        <a href="https://github.com/kublahanov">kublahanov</a>
      </div>
      <div class="stack">
        <span class="blue-on-hover">VueJS3</span>
        +
        <span class="green-on-hover">Vite</span>
        +
        <span class="yellow-on-hover">Element UI</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StarFilled } from "@element-plus/icons-vue";
</script>

<style lang="sass" scoped>
.footer-divider
  padding: 0 1rem 1rem 1rem

  .footer-row
    display: flex
    justify-content: space-between

    .copyrights
      font-size: 0.9rem
      color: var(--el-color-info-dark-2)

      .special-icon
        color: var(--el-color-info-light-2)
        font-size: 1.2rem
        margin: 0 0.3rem

      a
        color: var(--el-color-info-light-1)
        text-decoration: none
        &:hover
          color: darkred

    .stack
      font-size: 0.9rem
      color: var(--el-color-info-dark-2)
.blue-on-hover
  font-weight: bold
  &:hover
    color: blue
.green-on-hover
  font-weight: bold
  &:hover
    color: seagreen
.yellow-on-hover
  font-weight: bold
  &:hover
    color: coral
</style>
