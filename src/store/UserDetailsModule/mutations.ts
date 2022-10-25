import {
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} from "@/store/UserDetailsModule/actionTypes";
import type { IUserDetailsModuleState } from "@/store/UserDetailsModule/state";
import type { IUserDetails } from "@/models/IUserDetails";

export default {
  [GET_USER_DETAILS_SUCCESS]: (
    state: IUserDetailsModuleState,
    payload: IUserDetails
  ) => {
    state.userDetails = payload;
    state.isLoading = false;
  },
  [GET_USER_DETAILS_REQUEST]: (state: IUserDetailsModuleState) => {
    state.userDetails = {} as IUserDetails;
    state.isLoading = true;
  },
  [GET_USER_DETAILS_FAILURE]: (state: IUserDetailsModuleState) => {
    state.isLoading = false;
  },
};
