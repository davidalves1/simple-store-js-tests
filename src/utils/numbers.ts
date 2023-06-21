interface CurrencyFormat {
  locale: string;
  currency: string;
}

const DEFAULT_CURRENCY_FORMAT = {
  locale: 'en-US',
  currency: 'USD',
};

export const formatCurrency = (value: number, format: CurrencyFormat = DEFAULT_CURRENCY_FORMAT) => {
  if (!value) {
    return value;
  }

  const { locale, currency } = format;

  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
};
