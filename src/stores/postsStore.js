import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Отрицательный рост фондовой биржи",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu libero urna.",
        tags: ["global", "finance"],
        userId: 1,
        userName: "Иван Петров",
      },
      {
        id: 2,
        title: "Гайд по валютным операциям",
        description:
          "Curabitur eros nibh, sollicitudin id pellentesque quis, euismod ac justo.",
        tags: ["market", "finance"],
        userId: 1,
        userName: "Иван Петров",
      },
      {
        id: 3,
        title: "Взлёты и падения",
        description:
          "Phasellus rhoncus convallis sapien, ut semper justo porttitor a. Mauris maximus odio vel dignissim porta.",
        tags: ["history", "world"],
        userId: 2,
        userName: "Виктор Иванов",
      },
      {
        id: 4,
        title: "Хлопки и задымления",
        description:
          "Quisque sem mauris, feugiat a felis sit amet, sagittis maximus dolor.",
        tags: ["info", "world", "crime"],
        userId: 2,
        userName: "Виктор Иванов",
      },
      {
        id: 5,
        title: "Превратности погоды",
        description:
          "Quisque bibendum ac diam sed interdum. Quisque mattis, velit vitae convallis aliquam.",
        tags: ["weather"],
        userId: 3,
        userName: "Сергей Бодров",
      },
    ],
  }),
  actions: {
    addPost(post) {
      post.tags = post.tags.filter((tag) => tag.trim() !== "");
      this.posts.push(post);
    },
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
    },
    updatePost(updatedPost) {
      const index = this.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        updatedPost.tags = updatedPost.tags.filter((tag) => tag.trim() !== "");
        this.posts[index] = updatedPost;
      }
    },
    getById(postId) {
      return this.posts.find((post) => post.id == postId);
    },
    async loadPosts(posts) {
      this.posts = [];

      for (const post of posts) {
        const tags = post.tags.map((tag) => tag.name);
        this.posts.push({
          id: post.id,
          title: post.title,
          description: post.description,
          tags,
          userId: post.user.id,
          userName: post.user.name,
        });
      }
    },
  },
});
