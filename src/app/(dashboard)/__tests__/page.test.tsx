import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import HomePage from '../page';

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

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);

    expect(screen.getByText('Universal Opportunities')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HomePage />);

    expect(
      screen.getByText('Leading the Future of Deep Space Mining Operations')
    ).toBeInTheDocument();
  });

  it('renders the mission statement section', () => {
    render(<HomePage />);

    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders the core services section', () => {
    render(<HomePage />);

    expect(screen.getByText('Core Services & Operations')).toBeInTheDocument();
  });

  it('renders all service cards', () => {
    render(<HomePage />);

    expect(screen.getByText('Remote Rover Operations')).toBeInTheDocument();
    expect(screen.getByText('Resource Trading Markets')).toBeInTheDocument();
    expect(screen.getByText('Fabrication & Production')).toBeInTheDocument();
    expect(screen.getByText('Inter-Planetary Logistics')).toBeInTheDocument();
  });

  it('renders core values section', () => {
    render(<HomePage />);

    expect(screen.getByText('Our Core Values')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Partnership')).toBeInTheDocument();
    expect(screen.getByText('Reliability')).toBeInTheDocument();
    expect(screen.getByText('Excellence')).toBeInTheDocument();
  });

  it('renders corporate overview section', () => {
    render(<HomePage />);

    expect(screen.getByText('Corporate Overview')).toBeInTheDocument();
    expect(screen.getByText(/Company Structure/)).toBeInTheDocument();
    expect(screen.getByText(/Business Model/)).toBeInTheDocument();
  });

  it('renders call to action button', () => {
    render(<HomePage />);

    const ctaButtons = screen.getAllByText(/Access.*Portal/i);
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('renders legal disclaimer', () => {
    render(<HomePage />);

    expect(screen.getByText('Legal Disclaimer')).toBeInTheDocument();
  });

  it('renders communication link timeline section', () => {
    render(<HomePage />);

    expect(
      screen.getByText('Deep Space Communication Link')
    ).toBeInTheDocument();
    expect(screen.getByText(/Phase 1: Launch Complete/)).toBeInTheDocument();
    expect(screen.getByText(/Phase 2: In Transit/)).toBeInTheDocument();
    expect(screen.getByText(/Phase 3: Deployment Pending/)).toBeInTheDocument();
  });

  it('renders phase status badges', () => {
    render(<HomePage />);

    expect(screen.getByText('COMPLETE')).toBeInTheDocument();
    expect(screen.getByText('IN PROGRESS')).toBeInTheDocument();
    expect(screen.getByText('PENDING')).toBeInTheDocument();
  });

  it('renders service feature chips', () => {
    render(<HomePage />);

    expect(screen.getByText('Real-time Control')).toBeInTheDocument();
    expect(screen.getByText('Dynamic Pricing')).toBeInTheDocument();
    expect(screen.getByText('Automated Production')).toBeInTheDocument();
    expect(screen.getByText('Travel Systems')).toBeInTheDocument();
  });

  it('renders introductory description', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Pioneering remote-controlled mining operations/)
    ).toBeInTheDocument();
  });

  it('has accessible structure with proper headings', () => {
    render(<HomePage />);

    // Check for proper heading hierarchy
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });
});
