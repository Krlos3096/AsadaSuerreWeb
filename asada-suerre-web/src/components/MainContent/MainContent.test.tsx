import React from 'react';
import { render, screen } from '@testing-library/react';
import MainContent from './MainContent';

describe('MainContent', () => {
  test('renders main content component', () => {
    render(<MainContent />);
    // Add your test assertions here
    expect(screen.getByText(/Acueducto Rural Suerre/i)).toBeInTheDocument();
  });
});
