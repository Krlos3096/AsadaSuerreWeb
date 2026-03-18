import React from 'react';
import { render, screen } from '@testing-library/react';
import WhatsAppFloat from './WhatsAppFloat';
 
// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockOpen,
});
 
describe('WhatsAppFloat', () => {
  beforeEach(() => {
    mockOpen.mockClear();
  });
 
  test('renders without crashing', () => {
    render(<WhatsAppFloat />);
  });
 
  test('renders WhatsApp button', () => {
    render(<WhatsAppFloat />);
 
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Contactar por WhatsApp');
  });
 
  test('renders WhatsApp icon', () => {
    render(<WhatsAppFloat />);
 
    const icon = document.querySelector('.MuiSvgIcon-root');
    expect(icon).toBeInTheDocument();
  });
 
  test('has correct CSS class', () => {
    render(<WhatsAppFloat />);
 
    const container = document.querySelector('.whatsapp-float');
    expect(container).toBeInTheDocument();
 
    const button = document.querySelector('.whatsapp-button');
    expect(button).toBeInTheDocument();
  });
 
  test('opens WhatsApp when clicked', () => {
    render(<WhatsAppFloat />);
 
    const button = screen.getByRole('button');
    button.click();
 
    expect(mockOpen).toHaveBeenCalledWith(
      'https://wa.me/50686290676?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.',
      '_blank'
    );
  });
 
  test('uses custom phone number when provided', () => {
    render(<WhatsAppFloat phoneNumber="+1234567890" />);
 
    const button = screen.getByRole('button');
    button.click();
 
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining('wa.me/1234567890'),
      '_blank'
    );
  });
 
  test('uses custom message when provided', () => {
    const customMessage = 'Mensaje personalizado';
    render(<WhatsAppFloat message={customMessage} />);
 
    const button = screen.getByRole('button');
    button.click();
 
    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining(encodeURIComponent(customMessage)),
      '_blank'
    );
  });
});