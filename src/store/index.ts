import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import state from "@/store/state";
import type { IUser } from "@/models/IUser";

export interface State {
  usersList: IUser[];
  usersSearch: string;
  isLoading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
});

export function useStore() {
  return baseUseStore(key);
}
