<template>
  <div>
    <p>
      &laquo;
      <router-link to="/" class="home-link">К списку</router-link>
    </p>
    <h3>Автор: {{ post.userName }}</h3>
    <h2>Редактирование поста</h2>
    <el-form label-width="auto" class="header-form">
      <el-form-item label="Название">
        <el-input
          v-model="post.title"
          class="form-items-width"
          maxlength="255"
          show-word-limit
        />
      </el-form-item>

      <el-form-item label="Описание">
        <el-input
          v-model="post.description"
          class="form-items-width"
          rows="2"
          type="textarea"
          maxlength="4096"
          show-word-limit
          :autosize="{ minRows: 2, maxRows: 6 }"
        />
      </el-form-item>

      <el-form-item label="Теги (до 10)">
        <span v-if="!post.tags || post.tags.length < 1"> ... </span>
        <div v-for="(tag, index) in post.tags" :key="index">
          <el-input
            v-model="post.tags[index]"
            type="text"
            maxlength="16"
            show-word-limit
            class="tag-field"
          >
            <template #prepend>{{ index + 1 }}</template>
          </el-input>
          <el-button
            @click="removeTag(index)"
            type="danger"
            :icon="Delete"
            circle
            class="tag-button"
          />
        </div>
      </el-form-item>

      <el-form-item label=" ">
        <el-button
          type="primary"
          size="small"
          @click="addTag"
          :disabled="post.tags.length > 9"
        >
          Добавить тег
        </el-button>
      </el-form-item>

      <el-form-item>
        <el-button
          type="success"
          @click="updatePost"
          :disabled="post.title.length < 1 || post.description.length < 1"
        >
          Сохранить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Delete } from "@element-plus/icons-vue";
import { usePostsStore } from "../stores/postsStore.js";
import { ElNotification } from "element-plus";
import { useUserStore } from "../stores/userStore.js";

const route = useRoute();
const router = useRouter();

const postsStore = usePostsStore();
const userStore = useUserStore();

const post = ref({
  id: route.params.id,
  title: "",
  description: "",
  tags: [],
  userId: userStore.user.id,
  userName: userStore.user.name,
});

const addTag = () => {
  if (post.value.tags.length < 10) {
    post.value.tags.push("");
  }
};

const removeTag = (index) => {
  post.value.tags.splice(index, 1);
};

const updatePost = () => {
  postsStore.updatePost(post.value);

  ElNotification({
    title: "Успешно",
    message: "Пост «" + post.value.title + "» отредактирован!",
    type: "success",
  });

  router.push({ name: "Home" });
};

onMounted(() => {
  let result = postsStore.getById(route.params.id);

  if (result) {
    post.value = result;

    if (userStore.user.id !== post.value.userId) {
      ElNotification({
        title: "Ошибка",
        message: "У вас нет прав на редактирование поста с ID = " + route.params.id + "!",
        type: "error",
      });

      router.push({ name: "Home" });
    }
  } else {
    ElNotification({
      title: "Ошибка",
      message: "Пост с ID = " + route.params.id + " не найден!",
      type: "error",
    });

    router.push({ name: "Home" });
  }
});
</script>

<style lang="sass" scoped>
a.home-link
  color: var(--el-text-color-regular)
  text-decoration: none
  font-size: 15px
  &:hover
    color: var(--el-color-primary)
h2
  font-size: 1.3rem
h3
  font-size: 1rem
  font-weight: normal

.my-10
  margin: 10px auto

.tag-field
  width: 12rem
  margin: 0 0.5rem 0.5rem 0
.tag-button
  margin: 0 0.5rem 0.5rem 0
</style>
