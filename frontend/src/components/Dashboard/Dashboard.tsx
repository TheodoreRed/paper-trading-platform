import { useEffect } from "react";
import { getEncryptedDataFromLocalStorage } from "../../utils/localStorageUtils";
import { getAccountByUuid } from "../../services/accountApi";
import { useUser } from "../../hooks/useUser";
import BottomNavigation from "./BottomNavigation";
import ErrorPage from "../Common/ErrorPage";
import Home from "./Home";
import { ActiveTab } from "../../context/UserContextProvider";
import Settings from "./Settings";
import SearchStocks from "./SearchStocks";

const Dashboard: React.FC = () => {
  const { account, setAccount, activeTab } = useUser();

  useEffect(() => {
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
  }, [account]);

  if (!account) {
    return <ErrorPage />;
  }

  const getActiveDashboardComponent = (active: ActiveTab) => {
    switch (active) {
      case "home":
        return <Home />;
      case "settings":
        return <Settings />;
      case "search":
        return <SearchStocks />;

      default:
        return <ErrorPage />;
    }
  };

  return (
    <div>
      {getActiveDashboardComponent(activeTab)}
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
