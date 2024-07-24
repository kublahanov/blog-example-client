import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "Отрицательный рост фондовой биржи",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu libero urna. Donec sed tellus arcu. Praesent non cursus nunc. Pellentesque finibus ante rhoncus justo eleifend posuere. Maecenas aliquet vel sem at molestie. Cras arcu lorem, sagittis eu quam non, semper pellentesque tortor. Suspendisse erat nisl, condimentum sed feugiat et, sagittis a nulla. Nullam feugiat vel nisl nec imperdiet. Nam a efficitur mauris. Sed euismod arcu et vestibulum fringilla. Maecenas pellentesque, nisi non tristique posuere, purus quam faucibus mi, non luctus arcu nunc at erat. Nam consectetur, orci non sollicitudin posuere, risus diam tempus lectus, ac faucibus ligula mi et neque. Donec auctor tortor vitae erat tristique cursus. Sed vulputate ante ut massa interdum accumsan. Nulla auctor, leo ac placerat sodales, risus libero tincidunt felis, vitae pretium augue nisl placerat magna. Maecenas dapibus nec ex ut fringilla.",
        tags: ["global", "finance"],
        userId: 1,
        userName: "Иван Петров",
      },
      {
        id: 2,
        title: "Гайд по валютным операциям",
        description:
          "Curabitur eros nibh, sollicitudin id pellentesque quis, euismod ac justo. Aenean et risus sed sem pharetra luctus. Nulla vitae facilisis dui. Donec dui purus, faucibus eu velit at, finibus efficitur dui. Aenean at elit id justo facilisis condimentum. Curabitur et eros vitae nulla tincidunt ornare sed ut justo. Donec pretium rhoncus nibh, venenatis aliquet mauris ullamcorper id. Praesent gravida ornare feugiat. Quisque a finibus mauris, id ornare velit. Nullam tincidunt vel felis varius hendrerit. Morbi pretium dui sit amet diam commodo, ut porta dui porta. Donec at justo mollis, scelerisque tortor vulputate, mattis sapien. Nulla lacinia odio velit, eget vulputate nisl vehicula a. Nunc malesuada ligula sit amet urna sollicitudin, at dignissim nisi sagittis. Mauris egestas at mi nec volutpat.",
        tags: ["market", "finance"],
        userId: 1,
        userName: "Иван Петров",
      },
      {
        id: 3,
        title: "Взлёты и падения",
        description:
          "Phasellus rhoncus convallis sapien, ut semper justo porttitor a. Mauris maximus odio vel dignissim porta. Nullam sodales ac purus imperdiet sodales. Donec vitae dignissim nibh, at iaculis urna. Morbi interdum porttitor scelerisque. Proin commodo fringilla dolor at efficitur. Curabitur ac condimentum sapien. Phasellus vitae ipsum ac lectus elementum tempus id eget arcu. Cras eget orci hendrerit, scelerisque mauris ac, gravida nisl. Nullam commodo ultricies elit, dignissim efficitur magna feugiat ac. Sed egestas diam eget lacus rhoncus, ultrices imperdiet est semper. Proin vitae iaculis sapien, vel mattis lacus. Aliquam nisi sem, feugiat id sodales quis, ornare quis nisl. Duis ullamcorper nibh odio, eget consequat odio lobortis et. Ut sollicitudin lacus ac ligula sagittis interdum.",
        tags: ["history", "world"],
        userId: 2,
        userName: "Виктор Иванов",
      },
      {
        id: 4,
        title: "Хлопки и задымления",
        description:
          "Quisque sem mauris, feugiat a felis sit amet, sagittis maximus dolor. Integer vel laoreet tellus, sed porta lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam porttitor ipsum a tristique molestie. In blandit, dui non mattis fringilla, lacus purus finibus purus, nec interdum leo nunc eu odio. Suspendisse tellus sapien, semper sit amet iaculis ornare, vehicula in metus. Ut sodales egestas nunc quis dignissim. Ut vel nulla at quam feugiat scelerisque. Morbi scelerisque eros non volutpat posuere. Mauris condimentum imperdiet tellus et hendrerit. Donec malesuada urna lorem, sed sodales tortor mattis ut. Nullam vel enim a est sollicitudin consectetur. Sed a tristique mi, vitae faucibus eros. Nulla nec quam at massa ultricies tempor ac ac ipsum. Maecenas rhoncus nisi tortor, in ultrices mi tempus a.",
        tags: ["info", "world", "crime"],
        userId: 2,
        userName: "Виктор Иванов",
      },
      {
        id: 5,
        title: "Превратности погоды",
        description:
          "Quisque bibendum ac diam sed interdum. Quisque mattis, velit vitae convallis aliquam, nisl quam egestas magna, a sagittis justo enim in sem. Nam ac dolor ex. Sed sagittis a ex a venenatis. Duis sapien quam, auctor sit amet sapien ac, consectetur sagittis justo. Sed eu diam sed leo vehicula rhoncus at quis nisl. Pellentesque tempor dui sodales consequat sagittis. Etiam congue ligula sapien, eget egestas lacus sollicitudin non.",
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
    loadPosts(posts) {
      this.posts = posts;
    },
  },
});
