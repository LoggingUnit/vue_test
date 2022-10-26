import {
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  SET_USERS_SEARCH,
} from "@/store/UsersListModule/actionTypes";
import { GIT_API, PER_PAGE } from "@/store/helpers";

export default {
  getUsersList: ({ commit }: { commit: Function }, payload: number) => {
    commit(GET_USERS_LIST_REQUEST);
    fetch(`${GIT_API}${PER_PAGE}${payload}`)
      .then((response) => response.json())
      .then((data) => commit(GET_USERS_LIST_SUCCESS, data))
      .catch((error) => {
        commit(GET_USERS_LIST_FAILURE);
        console.error(error);
      });
  },
  setUsersSearch: ({ commit }: { commit: Function }, payload: string) => {
    commit(SET_USERS_SEARCH, payload);
  },
};
