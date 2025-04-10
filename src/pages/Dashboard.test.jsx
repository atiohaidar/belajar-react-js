import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Dashboard Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Clear navigation mock
    mockedUsedNavigate.mockClear();
  });

  test('renders dashboard title', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Dashboard')).toBeInTheDocument();
  });

  test('logout button is present', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('clicking logout button clears authentication and redirects to login', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    
    // Set initial authenticated state
    localStorage.setItem('isAuthenticated', 'true');
    
    // Click logout button
    fireEvent.click(screen.getByText('Logout'));
    
    // Check if localStorage was cleared
    expect(localStorage.getItem('isAuthenticated')).toBeNull();
    
    // Check if navigation was called
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');
  });
});
