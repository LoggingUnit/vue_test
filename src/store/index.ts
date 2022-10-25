import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import usersListModule from "@/store/UsersListModule";
import type { IUsersListModuleState } from "@/store/UsersListModule/state";

export interface IState {
  usersListModule: IUsersListModuleState;
}

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  modules: {
    usersListModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
