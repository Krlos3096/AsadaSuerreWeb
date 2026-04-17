import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsContainer from './ContactsContainer';

// Mock window.open and location
global.open = jest.fn();
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
  configurable: true,
});

describe('ContactsContainer', () => {
  test('renders all three contact buttons using ContactFloat', () => {
    render(<ContactsContainer />);
    
    expect(screen.getByLabelText(/Contactar por WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enviar correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visitar Facebook/i)).toBeInTheDocument();
  });

  test('renders with custom props', () => {
    render(
      <ContactsContainer
        whatsappPhoneInfo="+1234567890"
        whatsappPhoneSupport="+9876543210"
        facebookUrl="https://custom-facebook.com"
      />
    );

    expect(screen.getByLabelText(/Contactar por WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/WhatsApp Averias/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Visitar Facebook/i)).toBeInTheDocument();
  });

  test('renders all contact buttons with proper accessibility labels', () => {
    render(<ContactsContainer />);
    
    // Test that all buttons are present and accessible
    expect(screen.getByRole('button', { name: /Contactar por WhatsApp/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar correo electrónico/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Visitar Facebook/i })).toBeInTheDocument();
    
    // Verify all buttons are enabled
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    buttons.forEach(button => {
      expect(button).not.toBeDisabled();
    });
  });
});
