import { useSymbol } from "../utils/context/symbolContext";

function Ticker() {
  const handleSymbol = useSymbol();

  return (
    <div className="w-11/12 h-1/4 bg-[#e4f9ff] rounded-lg shadow-2xl flex flex-col justify-start items-center gap-6 pt-8 md:w-1/2 lg:w-1/3">
      <span className="text-2xl text-[#003242] font-semibold md:text-3xl">Ticker:</span>
      <span className="text-lg text-[#0078a1] font-medium">
        {handleSymbol?.ticker?.symbol}
      </span>
      <span className="text-lg text-[#0078a1] font-medium">{`1 ${handleSymbol?.baseAsset} = ${handleSymbol?.ticker?.price} ${handleSymbol?.quoteAsset}`}</span>
    </div>
  );
}

export default Ticker;
