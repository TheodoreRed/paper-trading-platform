import { FormEvent, useState } from "react";
import LandingPageButton from "./LandingPageButton";
import { createNewAccount } from "../../services/accountApi";
import { Account } from "../../models/account-types";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { saveEncryptedDataToLocalStorage } from "../../utils/localStorageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

// Helper function to format numbers with commas
export const formatWithCommas = (value: string) => {
  const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
  const number = Number(numericValue);
  const formattedValue = number.toLocaleString();
  return formattedValue;
};

const CreateAccountForm: React.FC = () => {
  const [portfolioNickname, setPortfolioNickname] = useState("");
  const [startingBalance, setStartingBalance] = useState("");
  const { setAccount } = useUser();
  const navigate = useNavigate();

  const isFormInvalid = portfolioNickname === "" || startingBalance === "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const navigateToDashboard = () => navigate("/dashboard", { replace: true });

    const newAccount: Account = {
      uuid: uuidv4(),
      totalBalance: parseFloat(startingBalance.replace(/,/g, "")), // Remove commas before converting to number
      portfolios: [
        {
          nickname: portfolioNickname,
          balance: parseFloat(startingBalance.replace(/,/g, "")), // Remove commas before converting to number
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
      navigateToDashboard();
    }
  };

  return (
    <div className="flex flex-col items-center h-screen p-5 gap-36">
      <button className="absolute font-bold text-gray-500 transition duration-300 ease-in-out left-10 hover:underline">
        <Link to="/">Back</Link>
      </button>
      <div className="w-10/12 text-2xl mt-14">
        <p>Click "Generate Code" after naming your portfolio. </p>
        <br />
        <p>
          This code is your key to access and resume your paper trading
          portfolio anytime.{" "}
          <strong className="text-customRed">Save it securely!</strong>
        </p>
      </div>
      <form
        className="flex flex-col w-10/12 gap-12 pb-8"
        onSubmit={handleSubmit}
      >
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
          {portfolioNickname !== "" && (
            <>
              <label htmlFor="starting-balance" className="text-2xl ">
                Starting Balance
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="starting-balance"
                  name="starting-balance"
                  value={startingBalance}
                  onChange={(e) => {
                    const formattedValue = formatWithCommas(e.target.value);
                    setStartingBalance(formattedValue);
                  }}
                  className="w-full px-10 py-4 text-3xl bg-transparent border-4 border-white"
                  required
                />
                <FontAwesomeIcon
                  className="absolute text-4xl text-white -translate-y-1/2 left-4 top-1/2"
                  icon={faDollarSign}
                />
              </div>
            </>
          )}
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
