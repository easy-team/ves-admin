import { Vue, Component, Prop } from 'vue-property-decorator';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './index.css';

import MainLayout from './main/index.vue';
Vue.use(ElementUI);

@Component({
  name: 'Layout',
  components: {
    MainLayout
  }
})
export default class Layout extends Vue {
  @Prop(String) title?: string;
  @Prop(String) description?: string;
  @Prop(String) keywords?: string;

  isNode: boolean = EASY_ENV_IS_NODE;

  created() {
    console.log('>>EASY_ENV_IS_NODE create', EASY_ENV_IS_NODE);
  }
}