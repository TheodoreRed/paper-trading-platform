import { createContext } from "react";
import { Account } from "../models/account-types";

export interface UserContextModel {
  account: Account | null;
  setAccount: (account: Account) => void;
  handleLogout: () => void;
}

const defaultValue: UserContextModel = {
  account: null,
  setAccount: () => {},
  handleLogout: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
