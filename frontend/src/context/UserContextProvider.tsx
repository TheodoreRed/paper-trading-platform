import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Account } from "../models/account-types";
import { useNavigate } from "react-router-dom";

function UserProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, []);

  const handleLogout = () => {
    setAccount(null);
    localStorage.removeItem("account");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ account, setAccount, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
