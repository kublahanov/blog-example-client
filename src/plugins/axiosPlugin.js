import axios from 'axios';

export default {
  install: (app) => {
    const api = axios.create({
      baseURL: 'http://localhost/api',
    });

    // Убедитесь, что экземпляр доступен во всех компонентах
    app.config.globalProperties.$axios = api;

    // Также можно добавить api в provide/inject систему
    app.provide('axios', api);
  },
};
