'use strict';
import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import RootState from './state';
import Admin from './modules/admin';

Vue.use(Vuex);

export default function createStore(initState: any) {
  return new Vuex.Store<RootState>({
    state: initState,
    modules: {
      admin: new Admin()
    }
  });
}