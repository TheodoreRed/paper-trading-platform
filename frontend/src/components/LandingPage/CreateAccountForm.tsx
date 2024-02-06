import { FormEvent, useState } from "react";
import LandingPageButton from "./LandingPageButton";
import { createNewAccount } from "../../services/accountApi";
import { Account } from "../../models/account-types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { saveEncryptedDataToLocalStorage } from "../../utils/localStorageUtils";

const CreateAccountForm = () => {
  const [portfolioNickname, setPortfolioNickname] = useState("");
  const { setAccount } = useUser();
  const navigate = useNavigate();

  const isFormInvalid = portfolioNickname === "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newAccount: Account = {
      uuid: uuidv4(),
      totalBalance: 0,
      portfolios: [
        {
          nickname: portfolioNickname,
          balance: 0,
          assetGroups: [],
          history: [],
        },
      ],
      history: [],
    };
    const createdAccount = await createNewAccount(newAccount);
    if (createdAccount) {
      saveEncryptedDataToLocalStorage(createdAccount.uuid);
      setAccount(createdAccount);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen p-5 gap-36">
      <div className="w-10/12 text-2xl">
        <p>Click "Generate Code" after naming your portfolio. </p>
        <br />
        <p>
          This code is your key to access and resume your paper trading
          portfolio anytime.{" "}
          <strong className="text-customRed">Save it securely!</strong>
        </p>
      </div>
      <form className="flex flex-col w-10/12 gap-12" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname" className="text-2xl ">
            Portfolio Nickname
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={portfolioNickname}
            onChange={(e) => setPortfolioNickname(e.target.value)}
            className="w-full px-4 py-4 text-3xl bg-transparent border-4 border-white"
            required
          />
        </div>

        <LandingPageButton
          textContent="Generate Code"
          isDisabled={isFormInvalid}
        />
      </form>
    </div>
  );
};

export default CreateAccountForm;
