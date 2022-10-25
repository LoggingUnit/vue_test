import type { IUserOverview } from "@/models/IUserOverview";
import type { IUsersListModuleState } from "@/store/UsersListModule/state";

export default {
  isLoading: (state: IUsersListModuleState) => state.isLoading,

  usersList: (state: IUsersListModuleState) => state.usersList,

  usersSearch: (state: IUsersListModuleState) => state.usersSearch,

  usersSearchResultsList: (
    state: IUsersListModuleState,
    getters: any
  ): IUserOverview[] => {
    const usersList: IUserOverview[] = state.usersList;

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
