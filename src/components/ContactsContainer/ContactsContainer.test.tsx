import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ContactsContainer from './ContactsContainer';
import { DataService } from '../../services/dataService';

// Mock the dataService
jest.mock('../../services/dataService');

// Mock window.open and location
global.open = jest.fn();
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
  configurable: true,
});

const mockDataService = DataService as jest.Mocked<typeof DataService>;

describe('ContactsContainer', () => {
  beforeEach(() => {
    mockDataService.getWhatsAppPhoneInfo.mockResolvedValue('+50685676443');
    mockDataService.getWhatsAppPhoneSupport.mockResolvedValue('+50684479692');
    mockDataService.getFacebookUrl.mockResolvedValue('https://facebook.com/asada-suerre');
  });

  test('renders all three contact buttons using ContactFloat', async () => {
    render(<ContactsContainer />);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/WhatsApp Gestiones/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/WhatsApp Averias/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Visitar Facebook/i)).toBeInTheDocument();
    });
  });

  test('renders all contact buttons with proper accessibility labels', async () => {
    render(<ContactsContainer />);
    
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /WhatsApp Gestiones/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /WhatsApp Averias/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Visitar Facebook/i })).toBeInTheDocument();
    });
    
    // Verify all buttons are enabled
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    buttons.forEach(button => {
      expect(button).not.toBeDisabled();
    });
  });
});
