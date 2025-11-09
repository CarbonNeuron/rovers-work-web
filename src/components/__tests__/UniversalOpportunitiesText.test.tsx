import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import UniversalOpportunitiesText from '../UniversalOpportunitiesText';

describe('UniversalOpportunitiesText', () => {
  it('renders with default props', () => {
    render(<UniversalOpportunitiesText />);
    expect(screen.getByText('Universal Opportunities')).toBeInTheDocument();
  });

  it('renders with custom variant', () => {
    render(<UniversalOpportunitiesText variant="h1" />);
    const element = screen.getByText('Universal Opportunities');
    expect(element.tagName).toBe('H1');
  });

  it('applies custom speed through sx prop', () => {
    render(<UniversalOpportunitiesText speed={2} />);
    const element = screen.getByText('Universal Opportunities');
    expect(element).toBeInTheDocument();
  });

  it('renders with custom colors', () => {
    render(<UniversalOpportunitiesText colors={['#ff0000', '#00ff00']} />);
    expect(screen.getByText('Universal Opportunities')).toBeInTheDocument();
  });

  it('applies pauseOnHover prop', () => {
    render(<UniversalOpportunitiesText pauseOnHover={true} />);
    expect(screen.getByText('Universal Opportunities')).toBeInTheDocument();
  });

  it('accepts additional Typography props', () => {
    render(
      <UniversalOpportunitiesText
        variant="h2"
        component="h2"
        gutterBottom
        data-testid="custom-text"
      />
    );
    const element = screen.getByTestId('custom-text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H2');
  });

  it('applies custom sx styles', () => {
    render(
      <UniversalOpportunitiesText
        sx={{ fontSize: '3rem' }}
        data-testid="custom-styled"
      />
    );
    expect(screen.getByTestId('custom-styled')).toBeInTheDocument();
  });
});
