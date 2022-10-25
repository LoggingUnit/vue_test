import type { State } from "@/store/index";
import type { IUser } from "@/models/IUser";

export default {
  isLoading: (state: State) => state.isLoading,

  usersList: (state: State) => state.usersList,

  usersSearch: (state: State) => state.usersSearch,

  usersSearchResultsList: (state: State, getters: any): IUser[] => {
    const usersList: IUser[] = getters.usersList;

    return getters.usersSearch
      ? usersList.filter(({ login }) =>
          login.toUpperCase().includes(getters.usersSearch.toUpperCase())
        )
      : usersList;
  },

  isSearchReturnNoResult: (state: State, getters: any) => {
    return !getters.isLoading && !getters.usersSearchResultsList?.length;
  },
};
