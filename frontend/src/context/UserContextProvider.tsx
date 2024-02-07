import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Account } from "../models/account-types";
import { getEncryptedDataFromLocalStorage } from "../utils/localStorageUtils";
import { getAccountByUuid } from "../services/accountApi";

export type ActiveTab = "home" | "settings" | "search";

function UserProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");

  useEffect(() => {
    const storedUuid = getEncryptedDataFromLocalStorage();
    if (storedUuid) {
      getAccountByUuid(storedUuid).then((res) => {
        if (res) {
          setAccount(res);
        }
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ account, setAccount, activeTab, setActiveTab }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
