import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import CounterComponent from './CounterComponent';

describe('CounterComponent', () => {
  it('renders initial count correctly', () => {
    render(<CounterComponent />); // Render komponen

    // Assert bahwa teks "Count: 0" ada di dalam dokumen
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count when Increment button is clicked', () => {
    render(<CounterComponent />);

    // Dapatkan tombol "Increment"
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    // Klik tombol "Increment"
    fireEvent.click(incrementButton);

    // Assert bahwa teks "Count: 1" ada di dalam dokumen setelah klik
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements count when Decrement button is clicked', () => {
    render(<CounterComponent />);

    // Dapatkan tombol "Decrement"
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Klik tombol "Decrement"
    fireEvent.click(decrementButton);

    // Assert bahwa teks "Count: -1" ada di dalam dokumen setelah klik
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });
});