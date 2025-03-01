function PaymentTotals() {
  const transaction = [];

  const initialTotals = {
    income: { debit: 0, credit: 0, cash: 0, pix: 0 },
    outcome: { debit: 0, credit: 0, cash: 0, pix: 0 },
  };

  const totals =
    transaction?.reduce((acc, item) => {
      if (item.value !== null) {
        if (item.transacion_type === 'income') {
          switch (item.payment_type) {
            case 'Débito':
              acc.income.debit += item.value;
              break;
            case 'Crédito':
              acc.income.credit += item.value;
              break;
            case 'Dinheiro':
              acc.income.cash += item.value;
              break;
            case 'Pix':
              acc.income.pix += item.value;
              break;
            default:
              break;
          }
        } else if (item.transacion_type === 'outcome') {
          switch (item.payment_type) {
            case 'Débito':
              acc.outcome.debit += item.value;
              break;
            case 'Crédito':
              acc.outcome.credit += item.value;
              break;
            case 'Dinheiro':
              acc.outcome.cash += item.value;
              break;
            case 'Pix':
              acc.outcome.pix += item.value;
              break;
            default:
              break;
          }
        }
      }
      return acc;
    }, initialTotals) || initialTotals;

  return totals;
}

export function usePaymentTotals() {
  const { income, outcome } = PaymentTotals();

  return {
    income,
    outcome,
  };
}
