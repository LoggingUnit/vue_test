import type { IUserDetails } from "@/models/IUserDetails";
import type { IUserRepo } from "@/models/IUserRepo";

export interface IUserDetailsModuleState {
  userDetails: IUserDetails;
  userRepos: IUserRepo[];
  isLoading: boolean;
}

export default (): IUserDetailsModuleState => ({
  userDetails: {} as IUserDetails,
  userRepos: [] as IUserRepo[],
  isLoading: false,
});
