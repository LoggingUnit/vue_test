import type { IUserDetails } from "@/models/IUserDetails";

export interface IUserDetailsModuleState {
  userDetails: IUserDetails;
  isLoading: boolean;
}

export default (): IUserDetailsModuleState => ({
  userDetails: null as any,
  isLoading: false,
});
