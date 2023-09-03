import { CartItem } from './CartItem';
import { render } from '@testing-library/react';

const MOCK_PRODUCT = {
  id: 1,
  title: 'Product 1',
  price: 99,
  image: 'https://via.placeholder.com/150',
  quantity: 1,
};

const mockFormattedPrice = `$${MOCK_PRODUCT.price}.00`;
jest.mock('@/utils/numbers', () => ({
  formatCurrency: jest.fn(() => mockFormattedPrice),
}));

const mockOnIncrease = jest.fn();
const mockOnDecrease = jest.fn();
const mockOnRemove = jest.fn();

const defaultProps = {
  product: MOCK_PRODUCT,
  onIncrease: mockOnIncrease,
  onDecrease: mockOnDecrease,
  onRemove: mockOnRemove,
};

const mountComponent = () => render(<CartItem {...defaultProps} />);

describe('<CartItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render cart item correctly', () => {
    const { getByTestId, container } = mountComponent();

    const title = container.querySelector('h3');
    const [quantity, price] = container.querySelectorAll('p');
    const increaseBtn = getByTestId('cart-item-increase-btn');
    const decreaseBtn = getByTestId('cart-item-decrease-btn');
    const removeBtn = getByTestId('cart-item-remove-btn');

    expect(title?.textContent).toBe(MOCK_PRODUCT.title);
    expect(quantity?.textContent).toBe(`Qty: ${MOCK_PRODUCT.quantity}`);
    expect(price?.textContent).toBe(`Price: ${mockFormattedPrice}`);
    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it('should call increase function correctly', () => {
    const { getByTestId } = mountComponent();

    const increaseBtn = getByTestId('cart-item-increase-btn');

    increaseBtn.click();

    expect(mockOnIncrease).toHaveBeenCalledWith(MOCK_PRODUCT);
  });

  it('should call decrease function correctly', () => {
    const { getByTestId } = mountComponent();

    const decreaseBtn = getByTestId('cart-item-decrease-btn');

    decreaseBtn.click();

    expect(mockOnDecrease).toHaveBeenCalledWith(MOCK_PRODUCT);
  });

  it('should call remove function correctly', () => {
    const { getByTestId } = mountComponent();

    const removeBtn = getByTestId('cart-item-remove-btn');

    removeBtn.click();

    expect(mockOnRemove).toHaveBeenCalledWith(MOCK_PRODUCT);
  });
});
