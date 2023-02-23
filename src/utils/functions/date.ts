const checkAndAddZeroToDate = (date: number) => {
  if (date < 10) return "0" + date;
  return date;
};

export const timestampToDate = (timestamp: number | undefined) => {
  if (!timestamp) return;
  const date = new Date(timestamp);
  return (
    checkAndAddZeroToDate(date.getDate()) +
    "/" +
    checkAndAddZeroToDate(date.getMonth() + 1) +
    "/" +
    checkAndAddZeroToDate(date.getFullYear()) +
    " " +
    checkAndAddZeroToDate(date.getHours()) +
    ":" +
    checkAndAddZeroToDate(date.getMinutes())
  );
};

export const timestampToSimpleDate = (timestamp: number | undefined) => {
  if (!timestamp) return;
  const date = new Date(timestamp);
  return (
    checkAndAddZeroToDate(date.getDate()) +
    "/" +
    checkAndAddZeroToDate(date.getMonth() + 1) +
    " " +
    checkAndAddZeroToDate(date.getHours()) +
    ":" +
    checkAndAddZeroToDate(date.getMinutes())
  );
};
