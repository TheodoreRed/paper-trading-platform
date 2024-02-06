import { createContext } from "react";
import { Account } from "../models/account-types";

export interface UserContextModel {
  account: Account | null;
  setAccount: (account: Account) => void;
}

const defaultValue: UserContextModel = {
  account: null,
  setAccount: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
