import { useSymbol } from "../utils/context/symbolContext";
import RecentTrades from "./RecentTrades";
import Ticker from "./Ticker";
import Ticker24 from "./Ticker24";

function Main() {
  const handleSymbol = useSymbol();

  if (!handleSymbol?.symbol) return (<></>);

  return (
    <div className="flex flex-col justify-start items-center gap-12 pb-4">
      <Ticker />
      <Ticker24 />
      <RecentTrades tradesPerPage={20} />
    </div>
  );
}

export default Main;
