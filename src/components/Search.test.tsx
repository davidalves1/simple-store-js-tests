import { act } from 'react-dom/test-utils';
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

  it('should call proper props.onSearch when the form is submitted', () => {
    const mockInputValue = 'Nike';
    const { getByTestId } = mountComponent();
    const searchInput = getByTestId('search-input');
    const searchButton = getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: mockInputValue } });
    fireEvent.click(searchButton);

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(mockInputValue);
  });
});
