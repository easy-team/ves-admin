import { Vue, Prop, Component } from 'vue-property-decorator';
import {
  Getter,
  Action
} from 'vuex-class';
import axios from 'axios';

import Layout from '../../component/layout/blog/index.vue';
import Header from '../../component/header/header.vue';

@Component({
  components: {
    Layout,
    Header
  }
})
export default class Index extends Vue {

  @Prop({ type: Number, default: [] }) total;
  @Prop({ type: Array, default: [] }) list: any;

  isFinish: boolean = false;
  isLoading: boolean = false;
  articleTotal: number = this.total;
  articleList: any = this.list;

  q = {
    title: undefined,
    categoryId: undefined,
    statusId: undefined,
    pageIndex: 1,
    pageSize: 10
  };

  // async fetch() {
  //   const res = await axios.get(`/list?pageIndex=${this.q.pageIndex}&pageSize=${this.q.pageSize}`);
  //   if (res.data.list && res.data.list.length) {
  //     this.articleTotal = res.data.total;
  //     this.articleList = this.articleList.concat(res.data.list);
  //   } else {
  //     this.isFinish = true;
  //   }
  //   this.isLoading = false;
  // }

  // loadPage() {
  //   if (!this.isFinish && !this.isLoading) {
  //     this.isLoading = true;
  //     this.q.pageIndex++;
  //     setTimeout(() => {
  //       this.fetch();
  //     }, 1500);
  //   }
  // }
  // mounted() {
  //   window.addEventListener('scroll', () => {
  //     this.loadPage();
  //   }, false);
  // }
}