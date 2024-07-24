<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, запрашиваемая страница не существует.</p>
    <router-link to="/">Вернуться на главную страницу</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}
</style>
