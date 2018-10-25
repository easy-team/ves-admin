<template>
  <layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </layout>
</template>
<script type="ts">
  import store from './store/index.ts';
  import router from './router/index.ts';
  import layout from '../../../component/layout/admin/index.vue';
  export default {
    components: {
      layout
    },
    store,
    router,
  };
</script>
