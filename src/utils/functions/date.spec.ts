import { timestampToDate } from "./date";

describe("Test the date format converter function", () => {
  it("Should transform the timestamp to a Date", () => {
    const timestamp = 1677086008000;
    const date = timestampToDate(timestamp)

    expect(date).toBe("22/02/2023 18:13")
  })
})