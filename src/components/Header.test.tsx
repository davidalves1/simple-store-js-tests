import { act } from 'react-dom/test-utils';
import { Header } from './Header';
import { fireEvent, render } from '@testing-library/react';

const mockOnTogggleCartView = jest.fn();
const mount = (title: string = 'Teste') => render(<Header title={title} onToggleCartView={mockOnTogggleCartView} />);

describe('Header', () => {
  it('should render component correctly', () => {
    const { getByTestId } = mount();
    const header = getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  it('should render proper title', () => {
    const mockTitle = 'AwStore';
    const { getByTestId } = mount(mockTitle);
    const headerTitle = getByTestId('header-title');

    expect(headerTitle.textContent).toBe(mockTitle);
  });

  it('should change cart view when the button is clicked', () => {
    const { getByTestId } = mount();
    const headerCartButton = getByTestId('header-cart-button');

    act(() => {
      fireEvent.click(headerCartButton);
    });

    expect(mockOnTogggleCartView).toHaveBeenCalledTimes(1);
  });
});
