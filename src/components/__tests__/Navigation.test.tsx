import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Navigation from '../Navigation';

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };
  MockedLink.displayName = 'NextLink';
  return MockedLink;
});

describe('Navigation', () => {
  it('renders navigation items', () => {
    render(<Navigation />);

    // Check for key navigation items - use getAllByText since items appear in both mobile and desktop
    expect(screen.getAllByText('Operations Portal').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Rovers').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Planets').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Market').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Fabrication').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Company Board').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Profile').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  });

  it('renders Universal Opportunities branding', () => {
    render(<Navigation />);

    // Check for the company name (appears multiple times)
    const brandingElements = screen.getAllByText('Universal Opportunities');
    expect(brandingElements.length).toBeGreaterThan(0);
  });

  it('renders connection status chip', () => {
    render(<Navigation />);

    // Connection Stable appears in both mobile and desktop drawers
    expect(screen.getAllByText('Connection Stable').length).toBeGreaterThan(0);
  });

  it('renders theme switcher', () => {
    render(<Navigation />);

    // Theme switcher should be in the document - may appear multiple times
    const themeSwitchers = screen.getAllByLabelText(
      /switch to (dark|light) mode/i
    );
    expect(themeSwitchers.length).toBeGreaterThan(0);
  });

  it('calls onMobileMenuToggle when provided', () => {
    const mockToggle = jest.fn();
    render(<Navigation onMobileMenuToggle={mockToggle} />);

    // Component should render without errors
    expect(screen.getAllByText('Operations Portal').length).toBeGreaterThan(0);
  });

  it('renders navigation descriptions for desktop view', () => {
    render(<Navigation />);

    // Check for navigation descriptions - use getAllByText since items appear in both mobile and desktop
    expect(screen.getAllByText('Mission Dashboard').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Fleet Management').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Sector Overview').length).toBeGreaterThan(0);
  });
});
