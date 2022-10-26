import type { IUserDetailsModuleState } from "@/store/UserDetailsModule/state";

export default {
  isLoading: (state: IUserDetailsModuleState) => state.isLoading,

  userDetails: (state: IUserDetailsModuleState) => state.userDetails,

  userRepos: (state: IUserDetailsModuleState) => state.userRepos,
};
