import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import { LinkBehavior } from '../LinkBehavior';

// Mock next/link
jest.mock('next/link', () => {
  const MockedLink = React.forwardRef<
    HTMLAnchorElement,
    { children: React.ReactNode; href: string }
  >(({ children, href, ...props }, ref) => {
    return (
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
    );
  });
  MockedLink.displayName = 'NextLink';
  return MockedLink;
});

describe('LinkBehavior', () => {
  it('renders a link with href', () => {
    render(<LinkBehavior href="/test">Test Link</LinkBehavior>);

    const link = screen.getByText('Test Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(
      <LinkBehavior ref={ref} href="/test">
        Link with Ref
      </LinkBehavior>
    );

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it('passes through additional props', () => {
    render(
      <LinkBehavior
        href="/test"
        className="custom-class"
        data-testid="custom-link"
      >
        Custom Link
      </LinkBehavior>
    );

    const link = screen.getByTestId('custom-link');
    expect(link).toHaveClass('custom-class');
  });

  it('has correct displayName', () => {
    expect(LinkBehavior.displayName).toBe('LinkBehavior');
  });
});
