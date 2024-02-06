import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEncryptedDataFromLocalStorage } from "../../utils/localStorageUtils";
import { getAccountByUuid } from "../../services/accountApi";
import { useUser } from "../../hooks/useUser";
import { getRealTimeStockPrice } from "../../services/finnhubApi";
import { StockPrice } from "../../models/StockPrice";

const Dashboard = () => {
  const { account, setAccount } = useUser();
  const [stockData, setStockData] = useState<StockPrice | null>(null);

  useEffect(function () {
    getRealTimeStockPrice("CLF").then((res) => {
      if (res) {
        setStockData(res);
      }
    });
  }, []);

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
    return (
      <p>
        Loading... or you need make an account{" "}
        <Link to="/new" className="text-customRed hover:text-red-400">
          Here
        </Link>
      </p>
    );
  }

  return (
    <div>
      Hello, User
      <p>{account?.uuid}</p>
      <p>{JSON.stringify(stockData)}</p>
    </div>
  );
};

export default Dashboard;
