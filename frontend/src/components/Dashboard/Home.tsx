import { useUser } from "../../hooks/useUser";
import ErrorPage from "../Common/ErrorPage";
import { formatWithCommas } from "../LandingPage/CreateAccountForm";

const Home = () => {
  const { account } = useUser();

  if (!account) {
    return <ErrorPage />;
  }

  return (
    <div>
      <p>{account.portfolios[0].nickname}</p>
      <p>$ {formatWithCommas(account.portfolios[0].balance.toString())}</p>
    </div>
  );
};

export default Home;
