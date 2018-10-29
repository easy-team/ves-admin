import { Vue, Component } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Article from '../../../../../../model/article';
import { SET_ARTICLE_DETAIL } from '../../../../store/modules/admin/type';

import {
  Getter,
  Action
} from 'vuex-class';

@Component
export default class Detail extends Vue {
  @Getter('article') article?: Article;
  @Action('getArticle') getArticle: any;
  beforeMount() {
    const { id } = this.$route.params;
    this.getArticle({ id });
  }
  created() {
    // console.log('---created', this);
  }
  fetchApi(options: any) {
    const { store, route } = options;
    const { id } = route.params;
    console.log('>>>id', id);
    return store.dispatch(SET_ARTICLE_DETAIL, { id });
  }
}