import type { IUser } from "@/models/IUser";
import type { IUsersListModuleState } from "@/store/UsersListModule/state";

export default {
  isLoading: (state: IUsersListModuleState) => state.isLoading,

  usersList: (state: IUsersListModuleState) => state.usersList,

  usersSearch: (state: IUsersListModuleState) => state.usersSearch,

  usersSearchResultsList: (
    state: IUsersListModuleState,
    getters: any
  ): IUser[] => {
    const usersList: IUser[] = state.usersList;

    return getters.usersSearch
      ? usersList.filter(({ login }) =>
          login.toUpperCase().includes(getters.usersSearch.toUpperCase())
        )
      : usersList;
  },

  isSearchReturnNoResult: (state: IUsersListModuleState, getters: any) => {
    return !getters.isLoading && !getters.usersSearchResultsList?.length;
  },
};
