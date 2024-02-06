import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Account } from "../models/account-types";
import { getEncryptedDataFromLocalStorage } from "../utils/localStorageUtils";
import { getAccountByUuid } from "../services/accountApi";

function UserProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);

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
    <UserContext.Provider value={{ account, setAccount }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
