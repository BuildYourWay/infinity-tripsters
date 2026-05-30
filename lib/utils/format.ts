export function formatPriceUSD(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDuration(days: number) {
  if (days === 1) return "1 day";
  return `${days} days`;
}

