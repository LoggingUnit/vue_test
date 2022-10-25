import type { IUser } from "@/models/IUser";

export interface State {
  usersList: IUser[];
  usersSearch: string;
  isLoading: boolean;
}

export default (): State => ({
  usersList: null as any,
  usersSearch: null as any,
  isLoading: false,
});
