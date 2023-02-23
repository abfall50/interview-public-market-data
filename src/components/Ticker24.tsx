import { useSymbol } from "../utils/context/symbolContext";
import { timestampToDate } from "../utils/functions/date";

function Ticker24() {
  const handleSymbol = useSymbol();

  return (
    <div className="w-11/12 bg-[#e4f9ff] rounded-lg shadow-2xl flex flex-col justify-start items-center gap-6 p-4 md:w-1/2 lg:w-1/3">
      <span className="text-2xl text-[#003242] font-semibold md:text-3xl">
        24H Ticker Statistics:
      </span>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Starting Hour:</span>
        <span className="text-[#0078a1] text-right">
          {timestampToDate(handleSymbol?.ticker24?.openTime)}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Closing Hour:</span>
        <span className="text-[#0078a1] text-right">
          {timestampToDate(handleSymbol?.ticker24?.closeTime)}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Opening Price:</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.openPrice}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Last Price:</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.lastPrice}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Highest Price:</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.highPrice}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Lowest Price:</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.lowPrice}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>{`Total Trade in ${handleSymbol?.baseAsset}:`}</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.volume}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>{`Total Trade in ${handleSymbol?.quoteAsset}:`}</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.quoteVolume}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>First Trade(ID):</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.firstId}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Last Trade(ID):</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.lastId}
        </span>
      </div>
      <div className="w-full text-lg text-[#003242] font-medium flex justify-between items-center">
        <span>Total Trades:</span>
        <span className="text-[#0078a1] text-right">
          {handleSymbol?.ticker24?.count}
        </span>
      </div>
    </div>
  );
}

export default Ticker24;
