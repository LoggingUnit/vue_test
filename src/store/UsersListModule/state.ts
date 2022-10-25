import type { IUserOverview } from "@/models/IUserOverview";

export interface IUsersListModuleState {
  usersList: IUserOverview[];
  usersSearch: string;
  isLoading: boolean;
}

export default (): IUsersListModuleState => ({
  usersList: null as any,
  usersSearch: null as any,
  isLoading: false,
});
