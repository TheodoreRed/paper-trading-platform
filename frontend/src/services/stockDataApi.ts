import axios from "axios";
import { HistoricalStockData } from "../models/HistoricalStockData";

const stockDataApiKey: string = import.meta.env.VITE_STOCKDATA_API_KEY;
const stockDataBaseUrl: string = "https://api.stockdata.org/v1/data/eod";

export const getHistoricalStockData = async (
  symbol: string,
  dateFrom: string,
  dateTo: string,
  interval: "day" | "week" | "month" | "quarter" | "year" = "day"
): Promise<HistoricalStockData[] | null> => {
  try {
    const response = await axios.get(stockDataBaseUrl, {
      params: {
        symbols: symbol,
        date_from: dateFrom,
        date_to: dateTo,
        interval: interval,
        api_token: stockDataApiKey,
      },
    });
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
