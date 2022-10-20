import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import type { IUser } from "@/models/IUser";
import {
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
} from "./actionTypes";

export interface State {
  usersList: IUser[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    usersList: null as any,
  },
  mutations: {
    [GET_USERS_LIST_SUCCESS]: (state, payload) => {
      state.usersList = payload;
    },
    [GET_USERS_LIST_REQUEST]: (state) => {
      state.usersList = [];
    },
  },
  actions: {
    getUsersList: ({ commit }, payload) => {
      commit(GET_USERS_LIST_REQUEST);
      fetch("https://api.github.com/users?per_page=10")
        .then((response) => response.json())
        .then((data) => commit(GET_USERS_LIST_SUCCESS, data))
        .catch((error) => {
          commit(GET_USERS_LIST_FAILURE);
          console.error(error);
        });
    },
  },
  getters: {
    usersList: (state: State) => state.usersList,
  },
});

export function useStore() {
  return baseUseStore(key);
}
