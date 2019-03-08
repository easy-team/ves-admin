'use strict';
module.exports = {
  entry: {
    'login': 'app/web/page/login/login.vue',
    'home': 'app/web/page/home/index.ts'
  },
  hotCss: true,
  cssExtract: true,
  dll: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios']
};