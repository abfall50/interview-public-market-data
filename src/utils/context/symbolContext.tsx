import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface SymbolHandle {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  ticker: Ticker | null;
  ticker24: Ticker24H | null;
  recentTrades: Trade[] | null;
  currencyPairs: string[][] | null
  updateSymbol(newSymbol: string, baseAsset: string, quoteAsset: string): void;
}

interface Ticker {
  symbol: string;
  price: string;
}

interface Ticker24H {
  symbol: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface Trade {
  id: number;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
}

interface Symbol {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
}

export const SymbolContext = createContext<SymbolHandle | undefined>(undefined);

export const useSymbol = () => {
  return useContext(SymbolContext);
};

type Props = {
  children?: ReactNode;
};

export function SymbolProvider({ children }: Props) {
  const [symbol, setSymbol] = useState<string>("");
  const [baseAsset, setBaseAsset] = useState<string>("")
  const [quoteAsset, setQuoteAsset] = useState<string>("")
  const [ticker, setTicker] = useState<Ticker | null>(null);
  const [ticker24, setTicker24] = useState<Ticker24H | null>(null);
  const [recentTrades, setRecentTrades] = useState<Trade[] | null>(null);
  const [currencyPairs, setCurrencyPairs] = useState<string[][] | null>(null);

  const updateSymbol = (newSymbol: string, baseAsset: string, quoteAsset: string) => {
    setSymbol(newSymbol);
    setBaseAsset(baseAsset)
    setQuoteAsset(quoteAsset)
  };

  useEffect(() => {
    const fetchCurrencyPairs = async () => {
      const pairs = await fetch("https://api.binance.com/api/v3/exchangeInfo")
        .then((response) => response.json())
        .then((data: { symbols: Symbol[] }) => {
          const symbols = data.symbols.map((symbol) => [
            symbol.symbol,
            symbol.baseAsset,
            symbol.quoteAsset,
          ]);
          return symbols;
        });

      setCurrencyPairs(pairs);
      setSymbol(pairs[0][0])
      setBaseAsset(pairs[0][1])
      setQuoteAsset(pairs[0][2])
    };

    fetchCurrencyPairs();
  }, []);

  useEffect(() => {
    if (!symbol) return;
    Promise.all([
      fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`),
      fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}&type=MINI`
      ),
      fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}`),
    ])
      .then(([resTicker, resTicker24, resRecentTrades]) => {
        return Promise.all([
          resTicker.json(),
          resTicker24.json(),
          resRecentTrades.json(),
        ]);
      })
      .then(([dataTicker, dataTicker24, dataRecentTrades]: any) => {
        setTicker(dataTicker);
        setTicker24(dataTicker24);
        setRecentTrades(dataRecentTrades);
      });
  }, [symbol]);

  const handle = useMemo(() => {
    return { symbol, baseAsset, quoteAsset, ticker, ticker24, recentTrades, currencyPairs, updateSymbol };
  }, [recentTrades, symbol, baseAsset, quoteAsset, ticker, ticker24, currencyPairs]);

  return (
    <SymbolContext.Provider value={handle}>{children}</SymbolContext.Provider>
  );
}
