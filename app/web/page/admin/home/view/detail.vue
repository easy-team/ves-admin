<template>
  <div style="font-size: 24px; text-align: center">
    <h1>{{article.title}}</h1>
    <iframe :src="article.url" frameborder="0" width="100%" height="600"></iframe>
  </div>
</template>
<style>

</style>
<script type="ts">
  import { SET_ARTICLE_DETAIL } from '../store/mutation-type';
  export default {
    computed: {
      article() {
        return this.$store.state.article;
      }
    },
    methods: {
      fetchApi({ state, dispatch, commit }, params) {
        params = params || state.route.params;
        return dispatch(SET_ARTICLE_DETAIL, { id : params.id });
      },
    },
    beforeMount() {
      this.fetchApi(this.$store, this.$route.params);
    }
  }
</script>
