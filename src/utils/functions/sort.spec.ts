import { mergesort } from "./sort";

const mockTrades = [
  {
    id: 28459,
    price: "4.00000500",
    qty: "7.00000000",
    quoteQty: "28.000035",
    time: 1499865551590,
    isBuyerMaker: true,
    isBestMatch: false,
  },
  {
    id: 28458,
    price: "3.99999900",
    qty: "15.00000000",
    quoteQty: "59.999985",
    time: 1499865550590,
    isBuyerMaker: false,
    isBestMatch: true,
  },
  {
    id: 28457,
    price: "4.00000100",
    qty: "12.00000000",
    quoteQty: "48.000012",
    time: 1499865549590,
    isBuyerMaker: true,
    isBestMatch: true,
  },
  {
    id: 28460,
    price: "3.99999600",
    qty: "9.00000000",
    quoteQty: "35.999964",
    time: 1499865552590,
    isBuyerMaker: false,
    isBestMatch: false,
  },
];

describe("Test the sorting function", () => {
  it("Should sort the mock array by time", () => {
    const sorted = mergesort(mockTrades, "time");

    expect(sorted).toStrictEqual([
      {
        id: 28460,
        price: "3.99999600",
        qty: "9.00000000",
        quoteQty: "35.999964",
        time: 1499865552590,
        isBuyerMaker: false,
        isBestMatch: false,
      },
      {
        id: 28459,
        price: "4.00000500",
        qty: "7.00000000",
        quoteQty: "28.000035",
        time: 1499865551590,
        isBuyerMaker: true,
        isBestMatch: false,
      },
      {
        id: 28458,
        price: "3.99999900",
        qty: "15.00000000",
        quoteQty: "59.999985",
        time: 1499865550590,
        isBuyerMaker: false,
        isBestMatch: true,
      },
      {
        id: 28457,
        price: "4.00000100",
        qty: "12.00000000",
        quoteQty: "48.000012",
        time: 1499865549590,
        isBuyerMaker: true,
        isBestMatch: true,
      },
    ]);
  });

  it("Should sort the mock array by price", () => {
    const sorted = mergesort(mockTrades, "price");

    expect(sorted).toStrictEqual([
      {
        id: 28459,
        price: "4.00000500",
        qty: "7.00000000",
        quoteQty: "28.000035",
        time: 1499865551590,
        isBuyerMaker: true,
        isBestMatch: false,
      },
      {
        id: 28457,
        price: "4.00000100",
        qty: "12.00000000",
        quoteQty: "48.000012",
        time: 1499865549590,
        isBuyerMaker: true,
        isBestMatch: true,
      },
      {
        id: 28458,
        price: "3.99999900",
        qty: "15.00000000",
        quoteQty: "59.999985",
        time: 1499865550590,
        isBuyerMaker: false,
        isBestMatch: true,
      },
      {
        id: 28460,
        price: "3.99999600",
        qty: "9.00000000",
        quoteQty: "35.999964",
        time: 1499865552590,
        isBuyerMaker: false,
        isBestMatch: false,
      },
    ]);
  });

  it("Should sort the mock array by quantity", () => {
    const sorted = mergesort(mockTrades, "qty");

    expect(sorted).toStrictEqual([
      {
        id: 28458,
        price: "3.99999900",
        qty: "15.00000000",
        quoteQty: "59.999985",
        time: 1499865550590,
        isBuyerMaker: false,
        isBestMatch: true,
      },
      {
        id: 28457,
        price: "4.00000100",
        qty: "12.00000000",
        quoteQty: "48.000012",
        time: 1499865549590,
        isBuyerMaker: true,
        isBestMatch: true,
      },
      {
        id: 28460,
        price: "3.99999600",
        qty: "9.00000000",
        quoteQty: "35.999964",
        time: 1499865552590,
        isBuyerMaker: false,
        isBestMatch: false,
      },
      {
        id: 28459,
        price: "4.00000500",
        qty: "7.00000000",
        quoteQty: "28.000035",
        time: 1499865551590,
        isBuyerMaker: true,
        isBestMatch: false,
      },
    ]);
  });
});
