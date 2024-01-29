import { AssetGroup } from "./asset-types";

export interface Account {
  uuid: string;
  totalBalance: number;
  portfolios: Portfolio[];
  history: AccountHistory[];
}

interface AccountHistory {
  date: Date;
  totalBalance: number;
}

interface Portfolio {
  balance: number;
  assetSets: AssetGroup[];
  history: PortfolioHistory[];
}

interface PortfolioHistory {
  date: Date;
  balance: number;
}
