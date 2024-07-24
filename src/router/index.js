import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CreatePostPage from "../pages/CreatePostPage.vue";
import EditPostPage from "../pages/EditPostPage.vue";
import NotFoundPage from '../pages/NotFoundPage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePostPage,
  },
  {
    path: "/edit/:id",
    name: "EditPost",
    component: EditPostPage,
  },
  {
    path: "/:catchAll(.*)*", // 404 Not found
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
