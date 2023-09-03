import { ProductCard } from './ProductCard';
import { render, act, fireEvent } from '@testing-library/react';
import { useCart } from '@/hooks/cartHook';

const mockAddCartItem = jest.fn();
jest.mock('@/hooks/cartHook', () => ({
  useCart: jest.fn(() => ({
    addCartItem: mockAddCartItem,
  })),
}));

const MOCK_PRODUCT_ITEM = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const mountComponent = () => render(<ProductCard product={MOCK_PRODUCT_ITEM} />);

describe('<ProductCard />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render product card correctly', () => {
    const { getByTestId } = mountComponent();

    const productName = getByTestId('product-name');
    const productImage = getByTestId('product-image');
    const productPrice = getByTestId('product-price');

    expect(productName).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

  it('should render proper product data on card', () => {
    const { getByTestId } = mountComponent();

    const productName = getByTestId('product-name');
    const productImage = getByTestId('product-image');
    const productPrice = getByTestId('product-price');

    expect(productName.textContent).toBe(MOCK_PRODUCT_ITEM.title);
    expect(productImage.getAttribute('src')).toContain(
      encodeURIComponent('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
    );
    expect(productPrice.textContent).toBe(`$${MOCK_PRODUCT_ITEM.price}`);
  });

  it('should add product to cart when button is clicked', () => {
    const { getByTestId } = mountComponent();

    const addCartItemBtn = getByTestId('add-cart-item-btn');

    act(() => {
      fireEvent.click(addCartItemBtn);
    });

    expect(mockAddCartItem).toHaveBeenCalledTimes(1);
    expect(mockAddCartItem).toHaveBeenCalledWith(MOCK_PRODUCT_ITEM);
  });
});
