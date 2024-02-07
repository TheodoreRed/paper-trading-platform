import { createContext } from "react";
import { Account } from "../models/account-types";
import { ActiveTab } from "./UserContextProvider";

export interface UserContextModel {
  account: Account | null;
  setAccount: (account: Account) => void;
  activeTab: ActiveTab;
  setActiveTab: (t: ActiveTab) => void;
}

const defaultValue: UserContextModel = {
  account: null,
  setAccount: () => {},
  activeTab: "home",
  setActiveTab: () => {},
};

const UserContext = createContext(defaultValue);
export default UserContext;
