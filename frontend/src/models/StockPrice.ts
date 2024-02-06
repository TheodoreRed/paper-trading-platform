export interface StockPrice {
  c: number; // Current price
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
  t: number; // Time of the last trade (unix timestamp)
  d: number; // change
  dp: number; // percent change
}
