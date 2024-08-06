import { useMemo } from 'react';

export function useCurrentValuePerBank(cards: any[], transaction: any[]) {
  const currentValuePerBank = useMemo(() => {
    return cards?.reduce(
      (acc, card) => {
        if (card.bank_name) {
          const totalValue = transaction?.reduce((accum, item) => {
            if (
              item.bank_name === card.bank_name &&
              item.transacion_type === 'outcome' &&
              item.payment_type === 'Crédito'
            ) {
              return accum + item.value!;
            }
            return accum;
          }, 0);

          acc[card.bank_name] = totalValue || 0;
        }
        return acc;
      },
      {} as { [key: string]: number }
    );
  }, [cards, transaction]);

  return currentValuePerBank;
}
