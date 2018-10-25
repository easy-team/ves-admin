'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';

Vue.use(Vuex);

const actions = {

  SET_ARTICLE_LIST: ({ commit, dispatch, state }, condition) => {
    const headers = EASY_ENV_IS_NODE ? {
      'x-csrf-token': state.csrf,
      'Cookie': `csrfToken=${state.csrf}`
    } : {};
    return axios.post(`${state.origin}/admin/api/article/list`, condition, { headers }).then(response => {
      commit(Type.SET_ARTICLE_LIST, response.data);
    });
  },

  SET_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    return axios.get(`${state.origin}/admin/api/article/${id}`)
      .then(response => {
        commit(Type.SET_ARTICLE_DETAIL, response.data);
      });
  },

  SET_SAVE_ARTICLE: ({ commit, dispatch, state }, data) => {
    // node need auth
    return axios.post(`${state.origin}/admin/api/article/add`, data, {
      headers: {
        'x-csrf-token': state.csrf,
      }
    }).then(response => {
      commit(Type.SET_ARTICLE_LIST, data);
    });
  },

  DELETE_ARTICLE: ({ commit, dispatch, state }, { id }) => {
    // node need auth
    return axios.post(`${state.origin}/admin/api/article/del`, { id })
      .then(response => {
        commit(Type.DELETE_ARTICLE, { id });
      });
  },
};

export default actions;