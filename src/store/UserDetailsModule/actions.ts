import {
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} from "@/store/UserDetailsModule/actionTypes";

export default {
  getUserDetails: ({ commit }: { commit: Function }, login: string) => {
    commit(GET_USER_DETAILS_REQUEST);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((data) => commit(GET_USER_DETAILS_SUCCESS, data))
      .catch((error) => {
        commit(GET_USER_DETAILS_FAILURE);
        console.error(error);
      });
  },
};
