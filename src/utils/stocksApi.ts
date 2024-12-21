import yahooFinance from 'yahoo-finance2';

export async function getStockPrice(symbol: string): Promise<number | null> {
  try {
    const quote = await yahooFinance.quote(symbol);
    return quote.regularMarketPrice;
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    return null;
  }
}

export async function getTopStocks(): Promise<Array<{ symbol: string; price: number; change: number }>> {
  const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META'];
  const results = await Promise.all(
    symbols.map(async (symbol) => {
      try {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol,
          price: quote.regularMarketPrice || 0,
          change: quote.regularMarketChangePercent || 0
        };
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
        return { symbol, price: 0, change: 0 };
      }
    })
  );
  return results;
}