import { render, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import fetchMock from 'jest-fetch-mock';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ShopPage from '../components/Shop-page';

fetchMock.enableMocks();

describe('Shop page renders', () => {
  test('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<ShopPage />).toJSON();

    expect(domTree).toMatchSnapshot();
  });
});

describe('Adding items', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Add items', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'clothing',
          category: "men's clothing",
        },
        {
          id: 2,
          title: 'accessories',
          category: 'jewelery',
        },
        {
          id: 3,
          title: 'clothing',
          category: "women's clothing",
        },
        {
          id: 4,
          title: 'clothing',
          category: "women's clothing",
        },
        {
          id: 5,
          title: 'electronics',
          category: 'electronics',
        },
        {
          id: 6,
          title: 'electronics',
          category: 'electronics',
        },
        {
          id: 7,
          title: 'electronics',
          category: 'electronics',
        },
        {
          id: 8,
          title: 'electronics',
          category: 'electronics',
        },
      ])
    );
    await act(async () => render(<ShopPage />));

    expect(fetch).toHaveBeenCalledTimes(2); // two times because react we are using strict mode ... i think :D
  });
});
