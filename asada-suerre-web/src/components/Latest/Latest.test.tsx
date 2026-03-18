import React from 'react';
import { render, screen } from '@testing-library/react';
import Latest from './Latest';

describe('Latest', () => {
  test('renders latest component', () => {
    render(<Latest />);
    // Add your test assertions here
    expect(screen.getByText(/Latest/i)).toBeInTheDocument();
  });
});
