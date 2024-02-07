import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getEncryptedDataFromLocalStorage,
  saveEncryptedDataToLocalStorage,
} from "../../utils/localStorageUtils";
import { getAccountByUuid } from "../../services/accountApi";
import { useUser } from "../../hooks/useUser";
import LandingPageButton from "./LandingPageButton";

const LoadAccount: React.FC = () => {
  const { account, setAccount } = useUser();

  const [codeInput, setCodeInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const isFormInvalid = codeInput === "";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const navigateToDashboard = () => navigate("/dashboard", { replace: true });

    getAccountByUuid(codeInput).then((res) => {
      if (res) {
        setAccount(res);
        saveEncryptedDataToLocalStorage(res.uuid);
        navigateToDashboard();
      } else {
        setErrorMsg("Code entered is incorrect. Please try again.");
      }
    });

    setCodeInput("");
  };

  return (
    <div className="flex flex-col items-center h-screen p-5 gap-36">
      <button className="absolute font-bold text-gray-500 transition duration-300 ease-in-out  left-10 hover:underline">
        <Link to="/">Back</Link>
      </button>
      <div className="relative w-10/12 text-2xl mt-14">
        <p>Please enter your access code to load your account. </p>
        {errorMsg !== "" && (
          <p className="absolute text-customRed">{errorMsg}</p>
        )}
      </div>

      <form className="flex flex-col w-10/12 gap-12" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="code-input" className="text-2xl ">
            Code{" "}
          </label>
          <input
            type="text"
            id="code-input"
            name="code-input"
            value={codeInput}
            onChange={(e) => {
              setCodeInput(e.target.value);
              setErrorMsg("");
            }}
            className="w-full px-4 py-4 bg-transparent border-4 border-white text-l"
            required
          />
        </div>

        <LandingPageButton
          textContent="Load Account"
          isDisabled={isFormInvalid}
        />
      </form>
    </div>
  );
};

export default LoadAccount;
