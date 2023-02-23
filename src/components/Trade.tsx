import { Trade as TradeType } from "../utils/context/symbolContext";
import { timestampToSimpleDate } from "../utils/functions/date";

type Props = {
  currentTrades: TradeType[] | undefined;
};

function Trade({ currentTrades }: Props) {
  return (
    <>
      {currentTrades &&
        currentTrades.map((trade) => (
          <ul key={trade.id} className="w-full h-full text-[10px] flex justify-evenly items-center text-[#003242] md:text-base">
            <li className="truncate">{trade.id}</li>
            <li className="truncate">{trade.price}</li>
            <li className="truncate">{trade.qty}</li>
            <li className="truncate">{timestampToSimpleDate(trade.time)}</li>
            <li className="hidden md:block">{trade.quoteQty}</li>
            <li className="hidden lg:block">{trade.isBuyerMaker ? "YES" : "NO"}</li>
            <li className="hidden lg:block lg:pr-5">{trade.isBestMatch ? "YES" : "NO"}</li>
          </ul>
        ))}
    </>
  );
}

export default Trade;
