import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer component', () => {
    render(<Footer />);
    // Add your test assertions here
    expect(screen.getByText(/Join the newsletter/i)).toBeInTheDocument();
  });
});
