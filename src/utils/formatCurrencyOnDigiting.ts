export function formatCurrencyOnDigiting(value: string) {
  const cleanValue = value.replace(/\D/g, '');
  const formattedValue = (Number(cleanValue) / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedValue;
}
