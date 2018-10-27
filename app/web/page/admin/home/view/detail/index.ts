import { Vue, Component } from 'vue-property-decorator';
import Article from '../../../../../../model/article';
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
  // fetchApi() {
  //   this.getArticle({ id });
  // }
}