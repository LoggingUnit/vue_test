import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import usersListModule from "@/store/UsersListModule";
import userDetailsModule from "@/store/UserDetailsModule";
import type { IUsersListModuleState } from "@/store/UsersListModule/state";
import type { IUserDetailsModuleState } from "@/store/UserDetailsModule/state";

export interface IState {
  usersListModule: IUsersListModuleState;
  userDetailsModule: IUserDetailsModuleState;
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  modules: {
    usersListModule,
    userDetailsModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
