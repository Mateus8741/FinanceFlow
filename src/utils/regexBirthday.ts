export function formatBirthDate(value: string) {
  value = value.replace(/\D/g, '');

  if (value.length > 2) {
    value = value.slice(0, 2) + '/' + value.slice(2);
  }
  if (value.length > 5) {
    value = value.slice(0, 5) + '/' + value.slice(5, 9);
  }
  return value;
}
