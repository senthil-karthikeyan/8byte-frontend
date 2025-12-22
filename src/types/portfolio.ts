export interface IPortfolio {
  particulars: string;
  symbol: string;
  purchasePrice: number;
  quantity: number;
  investment: number;
  portfolioPct: number;
  cmp: number;
  presentValue: number;
  gainLoss: number;
  pe: number;
  eps: number;
}

export interface LiveUpdate {
  symbol: string;
  cmp: number;
  presentValue: number;
  gainLoss: number;
}
