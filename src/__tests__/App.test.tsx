import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the app correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/todos/i);
  expect(titleElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'Test todo' } });
  fireEvent.submit(inputElement);
  const todoElement = screen.getByText('Test todo');
  expect(todoElement).toBeInTheDocument();
});