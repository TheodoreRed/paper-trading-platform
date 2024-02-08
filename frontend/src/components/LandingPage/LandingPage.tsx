import { Link } from "react-router-dom";
import LandingPageButton from "./LandingPageButton";
import { getHistoricalStockData } from "../../services/stockDataApi";

const LandingPage: React.FC = () => {
  getHistoricalStockData("AAPL", "2023-08-01", "2023-12-31", "week")
    .then((data) => {
      if (data) {
        console.log("Historical Stock Data:", data[0], data[1]);
      } else {
        console.log("No data found");
      }
    })
    .catch((error) => {
      console.error("Error fetching historical stock data:", error);
    });

  return (
    <div className="flex flex-col items-center h-screen gap-40 p-10 mb-12">
      <h1 className="relative text-5xl font-extrabold md:text-8xl left-3">
        Paper
        <span className="text-customRed relative top-[2.5rem] right-[2.25rem] md:top-[4.5rem] md:right-[3.25rem]">
          Portfolios
        </span>
      </h1>
      <p className="text-3xl text-center">
        Your training ground for the{" "}
        <span className=" text-customRed">trading battleground!</span>
      </p>
      <div className="flex flex-col gap-6">
        <Link to="/new">
          <LandingPageButton textContent="Start New" />
        </Link>
        <Link to="/load">
          <LandingPageButton textContent="Load" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
