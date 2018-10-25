<template>
  <html v-if="isNode">
    <head>
      <title>{{title || 'ves'}}</title>
      <meta name="keywords" :content="keywords">
      <meta name="description" :content="description">
      <meta http-equiv="content-type" content="text/html;charset=utf-8">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="/public/asset/css/bootstrap.min.css">
    </head>
    <body class="admin">
      <div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>    
    </body>
  </html>
  <div v-else-if="!isNode" id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>
</template>
<style>
</style>
<script type="text/babel">
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import './index.css';
  import MainLayout from './main';
  Vue.use(ElementUI);
  export default {
    props: [ 'title', 'description', 'keywords' ],
    components: {
      MainLayout
    },
    computed:{
      isNode() {
        return EASY_ENV_IS_NODE;
      }
    }
  }
</script>