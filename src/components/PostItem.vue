<template>
  <el-card class="post-card">
    <template #header>
      <div class="card-header">
        <el-badge
          :value="postId"
          :offset="[20, 10]"
          class="item"
          color="darkgray"
        >
          <h2>{{ title }}</h2>
        </el-badge>
      </div>
    </template>

    <p>Пользователь: {{ userName }}</p>
    <p>
      Теги:
      <span v-if="tags && tags.length">
        <el-tag class="" v-for="tag in tags">{{ tag }}</el-tag>
      </span>
      <span v-else> ... </span>
    </p>

    <template #footer>
      <div v-if="userId === userStore.user.id">
        <el-popover
          placement="top-start"
          trigger="hover"
          popper-class="post-action-popover"
          content="Редактировать"
        >
          <template #reference>
            <el-button
              @click="editPost(postId)"
              type="primary"
              :icon="Edit"
              circle
            />
          </template>
        </el-popover>

        <el-popover
          placement="top-start"
          trigger="hover"
          popper-class="post-action-popover"
          content="Удалить"
        >
          <template #reference>
            <el-button
              @click="deletePost(postId)"
              type="danger"
              :icon="Delete"
              circle
            />
          </template>
        </el-popover>
      </div>
    </template>
  </el-card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { usePostsStore } from "../stores/postsStore.js";
import { useUserStore } from "../stores/userStore.js";
import { Delete, Edit } from "@element-plus/icons-vue";
import { inject } from "vue";

defineProps({
  title: String,
  postId: Number,
  userId: Number,
  userName: String,
  tags: Object,
});

const router = useRouter();

const postsStore = usePostsStore();
const userStore = useUserStore();

const axios = inject("axios");

const editPost = (id) => {
  router.push({ name: "EditPost", params: { id } });
};

const deletePost = (id) => {
  if (confirm("Вы действительно хотите удалить этот пост?")) {
    postsStore.deletePost(id);

    try {
      axios
        .delete("/posts/" + id)
        .then(function (response) {
          // console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.error("Ошибка при удалении поста:", error);
    }
  }
};
</script>

<style lang="sass">
.post-card

  h2
    font-size: 1.1rem
    margin: 0

.el-card__header,
.el-card__body,
.el-card__footer
  padding: 1rem

.el-tag
  margin-right: 5px
.post-action-popover
  padding: 5px !important
  width: inherit !important
  min-width: inherit !important
</style>
