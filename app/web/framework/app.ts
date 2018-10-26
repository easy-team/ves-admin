import Vue from 'vue';
import { sync } from 'vuex-router-sync';

export default class App {
  config: any;
  constructor(config: any) {
    this.config = config;
  }

  bootstrap() {
    if (EASY_ENV_IS_NODE) {
      return this.server();
    }
    return this.client();
  }

  create(initState?: any) {
    const { entry, createStore, createRouter } = this.config;
    const store = createStore(initState);
    const router = createRouter();
    sync(store, router);
    return {
      router,
      store,
      render: (h: any) => {
        return h(entry);
      },
    };
  }

  client() {
    Vue.prototype.$http = require('axios');
    const options = this.create(window.__INITIAL_STATE__);
    const app = new Vue(options);
    app.$mount('#app');
    return app;
  }

  server() {
    return (context: any) => {
      const options = this.create();
      const { store, router } = options;
      router.push(context.state.url);
      return new Promise((resolve, reject) => {
        router.onReady(() => {
          const matchedComponents = router.getMatchedComponents();
          if (!matchedComponents) {
            return reject({ code: '404' });
          }
          return Promise.all(
            matchedComponents.map((component: any) => {
              if (component.preFetch) {
                return component.preFetch(store);
              }
              return null;
            })
          ).then(() => {
            context.state = {
              ...store.state,
              ...context.state
            };
            return resolve(new Vue(options));
          });
        });
      });
    };
  }
}