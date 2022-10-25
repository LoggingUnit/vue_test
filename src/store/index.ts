import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import type { IUser } from "@/models/IUser";
import {
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  SET_USERS_SEARCH,
} from "./actionTypes";

export interface State {
  usersList: IUser[];
  usersSearch: string;
  isLoading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    usersList: null as any,
    usersSearch: null as any,
    isLoading: false,
  },
  mutations: {
    [GET_USERS_LIST_SUCCESS]: (state, payload) => {
      state.usersList = payload;
      state.isLoading = false;
    },
    [GET_USERS_LIST_REQUEST]: (state) => {
      state.usersList = [];
      state.isLoading = true;
    },
    [GET_USERS_LIST_FAILURE]: (state) => {
      state.isLoading = false;
    },
    [SET_USERS_SEARCH]: (state, payload) => {
      state.usersSearch = payload;
    },
  },
  actions: {
    getUsersList: ({ commit }, payload: number) => {
      commit(GET_USERS_LIST_REQUEST);
      fetch(`https://api.github.com/users?per_page=${payload}`)
        .then((response) => response.json())
        .then((data) => commit(GET_USERS_LIST_SUCCESS, data))
        .catch((error) => {
          commit(GET_USERS_LIST_FAILURE);
          console.error(error);
        });
    },
    setUsersSearch: ({ commit }, payload: string) => {
      commit(SET_USERS_SEARCH, payload);
    },
  },
  getters: {
    isLoading: (state: State) => state.isLoading,

    usersList: (state: State) => state.usersList,

    usersSearch: (state: State) => state.usersSearch,

    usersSearchResultsList: (state: State, getters): IUser[] => {
      const usersList: IUser[] = getters.usersList;

      return getters.usersSearch
        ? usersList.filter(({ login }) =>
            login.toUpperCase().includes(getters.usersSearch.toUpperCase())
          )
        : usersList;
    },

    isSearchReturnNoResult: (state: State, getters) => {
      return !getters.isLoading && !getters.usersSearchResultsList?.length;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
