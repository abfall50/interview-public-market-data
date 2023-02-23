import React, { useMemo, useState } from "react";
import Select from "react-select";
import { useSymbol } from "../utils/context/symbolContext";

type OptionType = {
  value: string;
  label: string;
  symbol: string[];
};

function Form() {
  const handleSymbol = useSymbol();

  const options: OptionType[] = useMemo(
    () =>
      handleSymbol?.currencyPairs
        ? handleSymbol.currencyPairs.map((symbol) => ({
            value: `${symbol[1]} / ${symbol[2]}`,
            label: `${symbol[1]} / ${symbol[2]}`,
            symbol: symbol,
          }))
        : [],
    [handleSymbol?.currencyPairs]
  );

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const handleSelectChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    handleSymbol?.updateSymbol(
      selectedOption.symbol[0],
      selectedOption.symbol[1],
      selectedOption.symbol[2]
    );
  };

  return (
    <form
      className="h-full w-full flex justify-center items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Select
        className="outline-none w-[35%]"
        value={selectedOption}
        getOptionValue={(options: OptionType) => options.value}
        getOptionLabel={(options: OptionType) => options.label}
        options={options}
        onChange={handleSelectChange}
        isSearchable={true}
      />
      <input
        className="w-2/4 h-3/5 bg-[#d5f4fd] rounded-lg hover:bg-[#c1ecf9] active:bg-[#a4dff1] font-medium text-[#003242] md:w-1/4"
        type="submit"
        value="Get Market Data"
      />
    </form>
  );
}

export default Form;
