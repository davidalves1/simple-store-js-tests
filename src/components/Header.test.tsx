import { Header } from './Header';
import { render } from '@testing-library/react';

const mount = (title: string = 'Teste') => render(<Header title={title} />);

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
});
