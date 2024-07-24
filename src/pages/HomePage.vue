<template>
  <div>
    <el-form label-width="auto" class="header-form">
      <el-form-item label="Показать только мои посты">
        <el-switch v-model="isFilterMyPosts" />
      </el-form-item>

      <el-button @click="createNewPost" type="success">Новый пост</el-button>
    </el-form>

    <div class="post-list">
      <div v-for="post in filteredPosts" :key="post.id" class="post-card">
        <PostItem
          :title="post.title"
          :post-id="post.id"
          :user-id="post.userId"
          :user-name="post.userName"
          :tags="post.tags"
        />
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
import PostItem from "../components/PostItem.vue";
import Pagination from "../components/Pagination.vue";
import { usePostsStore } from "../stores/postsStore.js";
import { useUserStore } from "../stores/userStore.js";

const router = useRouter();

const postsStore = usePostsStore();
const userStore = useUserStore();

const axios = inject('axios');

const isFilterMyPosts = ref(false);

const filteredPosts = computed(() => {
  if (isFilterMyPosts.value) {
    return postsStore.posts.filter((post) => post.userId === userStore.user.id);
  }

  return postsStore.posts;
});

const createNewPost = () => {
  router.push({ name: "CreatePost" });
};

// const items = ref([]);

onMounted(async() => {
  userStore.setUser({
    id: 1,
    name: "Иван Петров",
  });

  // try {
  //   const response = await axios.get('/posts');
  //   items.value = response.data;
  // } catch (error) {
  //   console.error('Ошибка при получении данных:', error);
  // }
});
</script>

<style lang="sass" scoped>
.header-form
  margin: 1rem auto
  display: flex
  justify-content: space-between

.post-list
  margin: 1rem auto
  display: flex
  flex-wrap: wrap
  grid-gap: 0.5rem
  gap: 0.5rem

  .post-card
    flex-basis: 49%
    flex-grow: 1
</style>
