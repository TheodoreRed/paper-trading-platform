import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p>
        <Link to="/new" className="text-lg text-customRed hover:text-red-400">
          Make an account
        </Link>
      </p>
      <p>or</p>
      <p>
        <Link to="/load" className="text-lg text-customRed hover:text-red-400">
          Load Account
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
