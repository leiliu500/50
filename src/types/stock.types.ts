export interface Stock {
    symbol: string;
    price: number;
    change: number;
}

export interface StockQuote {
    regularMarketPrice: number;
    regularMarketChangePercent: number;
}