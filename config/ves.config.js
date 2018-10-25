'use strict';
module.exports = {
  dll: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios'],
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