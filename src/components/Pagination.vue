<template>
  <div class="bottom-pagination">
    <el-pagination
      layout="prev, pager, next"
      :total="postsStore.posts.length"
    />
  </div>
</template>

<script setup>
import { usePostsStore } from "../stores/postsStore.js";

const postsStore = usePostsStore();
</script>

<style lang="sass" scoped>
.bottom-pagination
  display: flex
  justify-content: center
  margin: 1rem auto
</style>
