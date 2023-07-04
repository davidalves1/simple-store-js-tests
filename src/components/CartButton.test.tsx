import { CartButton } from './CartButton';
import { act, fireEvent, render } from '@testing-library/react';

const mockOnToggleCartView = jest.fn();
const mountComponent = (totalItems = 0) =>
  render(<CartButton totalCartItems={totalItems} onToggleCartView={mockOnToggleCartView} />);

describe('<CartButton />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should hide cart badge when cart has no items', () => {
    const { queryByTestId } = mountComponent();
    const cartBadge = queryByTestId('cart-badge');

    expect(cartBadge).not.toBeInTheDocument();
  });

  it('should show cart badge with proper value when have items', () => {
    const mockTotalItems = 3;
    const { queryByTestId } = mountComponent(mockTotalItems);
    const cartBadge = queryByTestId('cart-badge');

    expect(cartBadge).toBeInTheDocument();
    expect(cartBadge?.textContent).toBe(`${mockTotalItems}`);
  });

  it('should change cart view when the button is clicked', () => {
    const { getByRole } = mountComponent();
    const button = getByRole('button');

    act(() => {
      fireEvent.click(button);
    });

    expect(mockOnToggleCartView).toHaveBeenCalledTimes(1);
  });
});
