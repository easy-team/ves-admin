'use strict';
module.exports = {
  entry: {
    'admin/home': 'app/web/page/admin/home/index.ts'
  },
  lib: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios'],
  loaders: {
    typescript: true
  },
  plugins: {
    copy: [{
      from: 'app/web/asset/css/bootstrap.min.css',
      to: 'asset/css/bootstrap.min.css'
    }]
  },
  node: {
    console: true
  }
};