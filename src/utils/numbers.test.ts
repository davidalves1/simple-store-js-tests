import { formatCurrency } from './numbers';

describe('numbers util', () => {
  it('should return default format in usd', () => {
    const mockValue = 99.9;

    const currency = formatCurrency(mockValue);

    expect(currency).toBe('$99.90');
  });

  it('should return correct format when a configuration is passed', () => {
    const mockValue = 99.9;

    const currency = formatCurrency(mockValue, { locale: 'pt-BR', currency: 'BRL' }) as string;

    expect(currency.replace(/\s/, '')).toEqual('R$99,90');
  });
});
