import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renders home component', () => {
    render(<Home />);
    // Add your test assertions here
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
