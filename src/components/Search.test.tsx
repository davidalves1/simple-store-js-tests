import { Search } from './Search';
import { fireEvent, render } from '@testing-library/react';

const onSubmitMock = jest.fn();
const mountComponent = () => render(<Search onSearch={onSubmitMock} />);

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    const { getByTestId } = mountComponent();

    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should call the onSearch prop with the search input value when search button is clicked', () => {
    const mockInputValue = 'Nike';
    const { getByTestId } = mountComponent();
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: mockInputValue } });
    fireEvent.click(searchButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(mockInputValue);
  });

  it.todo('should clear search input when click on clean button');
});
