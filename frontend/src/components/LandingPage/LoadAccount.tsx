import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEncryptedDataFromLocalStorage } from "../../utils/localStorageUtils";
import { getAccountByUuid } from "../../services/accountApi";
import { useUser } from "../../hooks/useUser";

const LoadAccount = () => {
  const { account, setAccount } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToDashboard = () => navigate("/dashboard", { replace: true });

    let activeAccount = account;
    if (!activeAccount) {
      const storedUuid = getEncryptedDataFromLocalStorage();
      if (storedUuid) {
        getAccountByUuid(storedUuid).then((res) => {
          if (res) {
            setAccount(res);
          }
        });
      }
    }
    if (account) {
      navigateToDashboard();
    }
  }, []);

  return <div>LoadAccount works</div>;
};

export default LoadAccount;
