export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    value
  );

export const formatPercentage = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "percent",
    minimumFractionDigits: 2,
  }).format(value / 100);