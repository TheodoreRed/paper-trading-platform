import axios from "axios";
import { StockPrice } from "../models/StockPrice";

const finnhubApiKey: string = import.meta.env.VITE_FINNHUB_API_KEY;
const finnhubBaseUrl: string = "https://finnhub.io/api/v1";

export const getRealTimeStockPrice = async (
  symbol: string
): Promise<StockPrice | null> => {
  try {
    const response = await axios.get(`${finnhubBaseUrl}/quote`, {
      params: {
        symbol: symbol,
        token: finnhubApiKey,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
