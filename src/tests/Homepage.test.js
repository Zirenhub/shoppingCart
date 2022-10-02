import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import Homepage from '../components/Homepage';
import { createMemoryHistory } from '@remix-run/router';

describe('Homepage renders', () => {
  const history = createMemoryHistory();

  test('Shop Button renders', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Homepage />
      </Router>
    );

    const button = screen.getByRole('button', {
      name: /Shop Now/i,
    });

    expect(button).toBeInTheDocument();
  });

  test('Matches DOM Snapshot', () => {
    const domTree = renderer
      .create(
        <Router location={history.location} navigator={history}>
          <Homepage />
        </Router>
      )
      .toJSON();

    expect(domTree).toMatchSnapshot();
  });
});
