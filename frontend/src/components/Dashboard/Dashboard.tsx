import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { account, setAccount } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let activeAccount = account;
    if (!activeAccount) {
      const storedAccount = localStorage.getItem("account");
      if (storedAccount) {
        activeAccount = JSON.parse(storedAccount);
        if (activeAccount) {
          setAccount(activeAccount);
        }
      }
    }

    if (!activeAccount) {
      navigate("/");
    }
  }, [account]);

  return (
    <div>
      Hello, User
      <p>{account?.uuid}</p>
    </div>
  );
};

export default Dashboard;
