import { render, screen, within } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ShopPage from '../components/Shop-page';

fetchMock.enableMocks();

describe('Shop page renders', () => {
  test('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<ShopPage />).toJSON();

    expect(domTree).toMatchSnapshot();
  });
});

describe('Items', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Fetch items', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'clothing-men-jacket',
          category: "men's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 2,
          title: 'accessories',
          category: 'jewelery',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 3,
          title: 'womens-neckleace',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 4,
          title: 'womens-bracelet',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 5,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 6,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 7,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 8,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 9,
          title: 'clothing-men-pants',
          category: "men's clothing",
          rating: {
            rate: 1,
            count: 12,
          },
          price: 25,
        },
      ])
    );
    await act(async () => render(<ShopPage />));

    expect(fetch).toHaveBeenCalledTimes(2); // two times because react we are using strict mode ... i think :D
    expect(screen.getByText('clothing-men-jacket')).toBeInTheDocument();
    expect(screen.getByText('clothing-men-pants')).toBeInTheDocument();
    expect(screen.getByText('womens-neckleace')).toBeInTheDocument();
    expect(screen.getByText('womens-bracelet')).toBeInTheDocument();
  });

  test('Filter mens items', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'clothing-men-jacket',
          category: "men's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 2,
          title: 'accessories',
          category: 'jewelery',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 3,
          title: 'womens-neckleace',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 4,
          title: 'womens-bracelet',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 5,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 6,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 7,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 8,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 9,
          title: 'clothing-men-pants',
          category: "men's clothing",
          rating: {
            rate: 1,
            count: 12,
          },
          price: 25,
        },
      ])
    );
    await act(async () => render(<ShopPage />));
    const mensClothingFilter = screen.getByRole('button', {
      name: "Men's Clothing",
    });

    userEvent.click(mensClothingFilter);
    expect(screen.getByText('clothing-men-jacket')).toBeInTheDocument();
    expect(screen.getByText('clothing-men-pants')).toBeInTheDocument();
    expect(screen.queryByText('accessories')).not.toBeInTheDocument();
  });

  test('Filter womens items', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'clothing-men-jacket',
          category: "men's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 2,
          title: 'accessories',
          category: 'jewelery',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 3,
          title: 'womens-neckleace',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 4,
          title: 'womens-bracelet',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 5,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 6,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 7,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 8,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 9,
          title: 'clothing-men-pants',
          category: "men's clothing",
          rating: {
            rate: 1,
            count: 12,
          },
          price: 25,
        },
      ])
    );
    await act(async () => render(<ShopPage />));
    const womensClothingFilter = screen.getByRole('button', {
      name: "Women's Clothing",
    });

    userEvent.click(womensClothingFilter);

    expect(screen.queryByText('clothing-men-jacket')).not.toBeInTheDocument();
    expect(screen.queryByText('clothing-men-pants')).not.toBeInTheDocument();
    expect(screen.getByText('womens-neckleace')).toBeInTheDocument();
    expect(screen.getByText('womens-bracelet')).toBeInTheDocument();
  });
});

describe('Adding items to cart', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'clothing-men-jacket',
          category: "men's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 2,
          title: 'accessories',
          category: 'jewelery',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 3,
          title: 'womens-neckleace',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 4,
          title: 'womens-bracelet',
          category: "women's clothing",
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 5,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 6,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 7,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 8,
          title: 'electronics',
          category: 'electronics',
          rating: {
            rate: 4,
            count: 222,
          },
          price: 21,
        },
        {
          id: 9,
          title: 'clothing-men-pants',
          category: "men's clothing",
          rating: {
            rate: 1,
            count: 12,
          },
          price: 25,
        },
      ])
    );
  });

  test('Cart displaying the right amount of items', async () => {
    await act(async () => render(<ShopPage />));

    const buyMensJacket = screen.getByTestId('clothing-men-jacket');
    const buyBackpack = screen.getByTestId('clothing-men-pants');

    userEvent.click(buyMensJacket);
    userEvent.click(buyBackpack);

    const itemsInCart = screen.getByTestId('itemsInCart');

    expect(itemsInCart.textContent).toBe('2');
  });

  test('Adding products to cart', async () => {
    await act(async () => render(<ShopPage />));

    const buyMensJacket = screen.getByTestId('clothing-men-jacket');
    const buyBackpack = screen.getByTestId('clothing-men-pants');

    userEvent.click(buyMensJacket);
    userEvent.click(buyBackpack);

    const cart = screen.getByTestId('cartBtn');

    userEvent.click(cart);

    expect(screen.getByText('Your items')).toBeInTheDocument();
    expect(screen.getByTestId('totalCost').textContent).toBe('46$ Total');
  });

  test('Removing products from cart', async () => {
    await act(async () => render(<ShopPage />));

    const buyBackpack = screen.getByTestId('clothing-men-pants');

    userEvent.click(buyBackpack);

    const cart = screen.getByTestId('cartBtn');

    userEvent.click(cart);

    const removeButtons = screen.getByRole('button', {
      name: 'X',
    });

    userEvent.click(removeButtons);

    expect(screen.getByText('Your items')).toBeInTheDocument();
    expect(screen.getByTestId('totalCost').textContent).toBe('0$ Total');
  });
});
