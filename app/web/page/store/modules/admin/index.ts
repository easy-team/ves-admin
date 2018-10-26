import axios from 'axios';
import { Module, GetterTree, ActionTree, MutationTree } from 'vuex';
import {
  SET_ARTICLE_LIST,
  SET_ARTICLE_DETAIL,
  SET_SAVE_ARTICLE,
  DELETE_ARTICLE
} from './type';

import RootState from '../../state';
import AdminState from './state';

axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

export default class AdminModule implements Module<AdminState, RootState> {
  state: AdminState = {
    articleTotal: 0,
    articleList: [],
    article: {},
  };
  getters: GetterTree<AdminState, RootState> = {
    total(state): number {
      return state.articleTotal;
    },
    article(state): any {
      return state.article;
    },
    articleList(state): any {
      return state.articleList;
    },
  };
  actions: ActionTree<AdminState, RootState> = {
    getArticleList({ commit, dispatch, state, rootState }, condition) {
      const headers = EASY_ENV_IS_NODE ? {
        'x-csrf-token': rootState.csrf,
        'Cookie': `csrfToken=${rootState.csrf}`
      } : {};
      return axios.post(`${rootState.origin}/admin/api/article/list`, condition, { headers }).then(response => {
        commit(SET_ARTICLE_LIST, response.data);
      });
    },
    getArticle({ commit, dispatch, state , rootState}, { id }) {
      return axios.get(`${rootState.origin}/admin/api/article/${id}`)
      .then(response => {
        commit(SET_ARTICLE_DETAIL, response.data);
      });
    },
    saveArticle({ commit, dispatch, state, rootState }, data) {
      // node need auth
      return axios.post(`${rootState.origin}/admin/api/article/add`, data, {
        headers: {
          'x-csrf-token': this.csrf,
        }
      }).then(response => {
        commit(SET_ARTICLE_LIST, data);
      });
    },
    deleteArticle({ commit, dispatch, state, rootState }, { id }) {
      // node need auth
      return axios.post(`${rootState.origin}/admin/api/article/del`, { id })
      .then(response => {
        commit(DELETE_ARTICLE, { id });
      });
    }
  };
  mutations: MutationTree<AdminState> = {
    [SET_ARTICLE_LIST](state, { list, total }) {
      state.articleTotal = total;
      state.articleList = list;
    },
    [SET_ARTICLE_DETAIL](state, data) {
      state.article = data;
    },
    [SET_SAVE_ARTICLE](state, data) {
      state.articleTotal += 1;
      state.articleList = [data].concat(state.articleList);
    },
    [DELETE_ARTICLE](state, { id }) {
      state.articleTotal -= 1;
      state.articleList = state.articleList.filter((item: any) => {
        return item.id !== id;
      });
    }
  };
}