import { useState, useMemo, useEffect } from "react";
import { useSymbol } from "../utils/context/symbolContext";
import ReactPaginate from "react-paginate";
import Trade from "./Trade";
import { Trade as TradeType } from "../utils/context/symbolContext";
import { mergesort } from "../utils/functions/sort";

type Props = {
  tradesPerPage: number;
};

function RecentTrades({ tradesPerPage }: Props) {
  const handleSymbol = useSymbol();

  const [selectedValue, setSelectedValue] = useState<string>("time");
  const [sortedRecentTrades, setSortedRecentTrades] = useState<TradeType[]>(
    mergesort(handleSymbol?.recentTrades, "time")
  );
  const [tradeOffset, setTradeOffset] = useState<number>(0);

  const endOffset = useMemo(
    () => tradeOffset + tradesPerPage,
    [tradeOffset, tradesPerPage]
  );

  const currentTrades = useMemo(
    () => sortedRecentTrades.slice(tradeOffset, endOffset),
    [sortedRecentTrades, tradeOffset, endOffset]
  );

  const pageCount = useMemo(() => {
    if (!sortedRecentTrades.length) return 1;
    return Math.ceil(sortedRecentTrades.length / tradesPerPage);
  }, [sortedRecentTrades, tradesPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    if (!sortedRecentTrades.length) return;

    const newOffset =
      (event.selected * tradesPerPage) % sortedRecentTrades.length;
    setTradeOffset(newOffset);
  };

  useEffect(() => {
    const sort = mergesort(
      handleSymbol?.recentTrades,
      selectedValue as keyof TradeType
    );
    setSortedRecentTrades(sort);
  }, [selectedValue, handleSymbol?.recentTrades]);

  return (
    <div className="w-11/12 bg-[#e4f9ff] rounded-lg shadow-2xl flex flex-col justify-start items-center gap-6 md:w-5/6 lg:w-2/3">
      <span className="text-2xl text-[#003242] font-semibold pt-4 md:text-3xl">
        Recent Trades:
      </span>

      <div className="w-full flex justify-evenly items-center">
        <span className="text-base font-normal md:text-lg">Sorted by:</span>
        <select
          value={selectedValue}
          className="w-1/3 h-full outline-none bg-[#d5f4fd] rounded-lg truncate text-center md:text-lg"
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="time">Time</option>
          <option value="price">Price</option>
          <option value="qty">Quantity</option>
        </select>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4 pb-2">
        <ul className="w-full h-full text-xl flex justify-evenly items-center text-[#003242] text-center font-medium tracking-wider bg-[#2ebde5] md:pl-16 md:gap-8 lg:pl-5 lg:gap-0">
          <li className="lg:w-1/12 lg:text-right">ID</li>
          <li className="lg:w-2/12 lg:text-right">Price</li>
          <li className="lg:w-2/12 lg:text-right">Quantity</li>
          <li className="lg:w-2/12">Time</li>
          <li className="hidden md:block lg:w-2/12 lg:text-left">{`Quantity(${handleSymbol?.quoteAsset})`}</li>
          <li className="hidden lg:block lg:w-1/12 lg:text-left">Buyer Maker</li>
          <li className="hidden lg:block lg:w-1/12 lg:text-left">Best Match</li>
        </ul>
        <Trade currentTrades={currentTrades} />
        <ReactPaginate
          className="w-full flex justify-center items-center gap-1"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={undefined}
          pageClassName="border border-[#003242/50] rounded-full hover:bg-[#c1ecf9] active:bg-[#2ebde5] text-center flex-grow"
          activeClassName="bg-[#2ebde5] border-0 rounded-full"
          previousClassName="text-slate-400 flex-grow text-center"
          nextClassName="text-[#f1fcff] rounded-full bg-[#2ebde5] flex-grow text-center"
        />
      </div>
    </div>
  );
}

export default RecentTrades;
