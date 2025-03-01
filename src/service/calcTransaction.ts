import { useMemo } from 'react';

function TransactionCalc() {
  const transaction = [
    {
      transacion_type: 'income',
      value: 1000,
    },
  ];

  const { total, income, outcome } = useMemo(() => {
    const totals = transaction?.reduce(
      (acc, curr) => {
        if (curr.transacion_type === 'income' && curr.value !== null) {
          acc.income += curr.value;
          acc.total += curr.value;
        } else if (curr.transacion_type === 'outcome' && curr.value !== null) {
          acc.outcome += curr.value;
          acc.total -= curr.value;
        }
        return acc;
      },
      { total: 0, income: 0, outcome: 0 }
    );

    return totals || { total: 0, income: 0, outcome: 0 };
  }, [transaction]);

  return { total, income, outcome };
}

export function useTransactionCalc() {
  const { total, income, outcome } = TransactionCalc();

  return {
    total,
    income,
    outcome,
  };
}
