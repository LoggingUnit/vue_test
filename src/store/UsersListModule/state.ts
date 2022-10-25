import type { IUser } from "@/models/IUser";

export interface IUsersListModuleState {
  usersList: IUser[];
  usersSearch: string;
  isLoading: boolean;
}

export default (): IUsersListModuleState => ({
  usersList: null as any,
  usersSearch: null as any,
  isLoading: false,
});
