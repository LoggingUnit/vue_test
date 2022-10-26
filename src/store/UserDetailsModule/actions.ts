import {
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
  GET_USER_REPOS_REQUEST,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE,
} from "@/store/UserDetailsModule/actionTypes";
import { GIT_API, REPOS } from "@/store/helpers";

export default {
  getUserDetails: ({ commit }: { commit: Function }, login: string) => {
    commit(GET_USER_DETAILS_REQUEST);
    fetch(`${GIT_API}/${login}`)
      .then((response) => response.json())
      .then((data) => commit(GET_USER_DETAILS_SUCCESS, data))
      .catch((error) => {
        commit(GET_USER_DETAILS_FAILURE);
        console.error(error);
      });
  },

  getUserRepos: ({ commit }: { commit: Function }, login: string) => {
    commit(GET_USER_REPOS_REQUEST);
    fetch(`${GIT_API}/${login}/${REPOS}`)
      .then((response) => response.json())
      .then((data) => commit(GET_USER_REPOS_SUCCESS, data))
      .catch((error) => {
        commit(GET_USER_REPOS_FAILURE);
        console.error(error);
      });
  },
};
