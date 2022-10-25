import {
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
  SET_USERS_SEARCH,
} from "@/store/UsersListModule/actionTypes";
import type { IUserOverview } from "@/models/IUserOverview";
import type { IUsersListModuleState } from "@/store/UsersListModule/state";

export default {
  [GET_USERS_LIST_SUCCESS]: (
    state: IUsersListModuleState,
    payload: IUserOverview[]
  ) => {
    state.usersList = payload;
    state.isLoading = false;
  },
  [GET_USERS_LIST_REQUEST]: (state: IUsersListModuleState) => {
    state.usersList = [];
    state.isLoading = true;
  },
  [GET_USERS_LIST_FAILURE]: (state: IUsersListModuleState) => {
    state.isLoading = false;
  },
  [SET_USERS_SEARCH]: (state: IUsersListModuleState, payload: string) => {
    state.usersSearch = payload;
  },
};
