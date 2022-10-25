import {
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  SET_USERS_SEARCH,
} from "@/store/actionTypes";
import type { State } from "@/store/index";
import type { IUser } from "@/models/IUser";

export default {
  [GET_USERS_LIST_SUCCESS]: (state: State, payload: IUser[]) => {
    state.usersList = payload;
    state.isLoading = false;
  },
  [GET_USERS_LIST_REQUEST]: (state: State) => {
    state.usersList = [];
    state.isLoading = true;
  },
  [GET_USERS_LIST_FAILURE]: (state: State) => {
    state.isLoading = false;
  },
  [SET_USERS_SEARCH]: (state: State, payload: string) => {
    state.usersSearch = payload;
  },
};
