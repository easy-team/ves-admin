'use strict';
module.exports = {
  entry: {
    'admin/home': 'app/web/page/admin/home/index.ts'
  },
  dll: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios']
};