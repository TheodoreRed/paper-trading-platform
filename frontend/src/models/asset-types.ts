export interface Asset {
  symbol: string;
  currentPrice: number;
  quantity: number;
  averagePricePer: number;
  marketCap: number;
  priceChangePercentage: number;
  userNotes: string[];
}

export interface Stock extends Asset {
  companyName: string;
  dividendYield?: number;
  peRatio?: number;
  sector?: string;
  industry?: string;
}

export interface Crypto extends Asset {
  name: string;
  totalSupply?: number;
  circulatingSupply?: number;
}

export interface AssetGroupHistory {
  date: Date;
  balance: number;
}

export interface AssetGroup {
  nickname: string;
  assets: Asset[];
  history: AssetGroupHistory[];
  totalValue(): number;
}

export class AssetGroupImpl implements AssetGroup {
  assets: Asset[];
  history: AssetGroupHistory[];
  nickname: string;

  constructor(assets: Asset[], nickname: string) {
    this.assets = assets;
    this.history = [];
    this.nickname = nickname;
  }

  totalValue(): number {
    return this.assets.reduce(
      (total, asset) => total + asset.currentPrice * asset.quantity,
      0
    );
  }
}
