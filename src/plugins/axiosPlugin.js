import axios from "axios";

export default {
  install: (app) => {
    const api = axios.create({
      baseURL: "http://localhost/api",
    });

    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Убедитесь, что экземпляр доступен во всех компонентах
    app.config.globalProperties.$axios = api;

    // Также можно добавить api в provide/inject систему
    app.provide("axios", api);
  },
};
