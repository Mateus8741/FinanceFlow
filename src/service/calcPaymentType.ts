import { useMemo } from 'react';

import { useGetTransactions } from '@/api';

function PaymentTotals() {
  const { transaction } = useGetTransactions();

  const totals = useMemo(() => {
    const initialTotals = { debit: 0, credit: 0, cash: 0, pix: 0 };

    return (
      transaction?.reduce((acc, item) => {
        if (item.value !== null) {
          switch (item.payment_type) {
            case 'Débito':
              acc.debit += item.value;
              break;
            case 'Crédito':
              acc.credit += item.value;
              break;
            case 'Dinheiro':
              acc.cash += item.value;
              break;
            case 'Pix':
              acc.pix += item.value;
              break;
            default:
              break;
          }
        }
        return acc;
      }, initialTotals) || initialTotals
    );
  }, [transaction]);

  return totals;
}

export function usePaymentTotals() {
  const { cash, credit, debit, pix } = PaymentTotals();

  return {
    cash,
    credit,
    debit,
    pix,
  };
}
