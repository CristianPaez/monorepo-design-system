export function formatCurrency(
  value: number,
  locale = "es-CO",
  currency = "COP"
) {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value
  );
}
