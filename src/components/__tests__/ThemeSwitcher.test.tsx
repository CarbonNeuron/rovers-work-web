import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import ThemeSwitcher from '../ThemeSwitcher';

// Mock useColorScheme hook
const mockSetMode = jest.fn();
jest.mock('@mui/material/styles', () => ({
  ...jest.requireActual('@mui/material/styles'),
  useColorScheme: () => ({
    mode: 'light',
    setMode: mockSetMode,
  }),
}));

describe('ThemeSwitcher', () => {
  beforeEach(() => {
    mockSetMode.mockClear();
  });

  it('renders the theme switcher button', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    expect(button).toBeInTheDocument();
  });

  it('has appropriate aria-label for accessibility', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByLabelText(/switch to dark mode/i);
    expect(button).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    fireEvent.click(button);

    expect(mockSetMode).toHaveBeenCalledWith('dark');
  });

  it('toggles theme with keyboard - Space key', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    fireEvent.keyDown(button, { key: ' ' });

    expect(mockSetMode).toHaveBeenCalledWith('dark');
  });

  it('toggles theme with keyboard - Enter key', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    fireEvent.keyDown(button, { key: 'Enter' });

    expect(mockSetMode).toHaveBeenCalledWith('dark');
  });

  it('does not toggle on other keys', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    fireEvent.keyDown(button, { key: 'Escape' });

    expect(mockSetMode).not.toHaveBeenCalled();
  });

  it('accepts custom sx props', () => {
    render(<ThemeSwitcher sx={{ color: 'primary.main' }} />);

    const button = screen.getByRole('switch');
    expect(button).toBeInTheDocument();
  });

  it('has proper aria-pressed state', () => {
    render(<ThemeSwitcher />);

    const button = screen.getByRole('switch');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('includes status element for screen readers', () => {
    render(<ThemeSwitcher />);

    const status = screen.getByRole('status');
    expect(status).toBeInTheDocument();
  });
});
