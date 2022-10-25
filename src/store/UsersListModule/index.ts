import actions from "@/store/UsersListModule/actions";
import mutations from "@/store/UsersListModule/mutations";
import getters from "@/store/UsersListModule/getters";
import state from "@/store/UsersListModule/state";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
