# Testing Documentation

This project uses Jest and React Testing Library for comprehensive testing.

## Test Structure

Tests are organized using the following structure:
- Component tests: `src/components/__tests__/*.test.tsx`
- Page tests: `src/app/**/__tests__/*.test.tsx`
- Utility tests: `src/*/__tests__/*.test.ts`

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (used by GitHub Actions)
npm run test:ci
```

### Test Coverage

The project maintains the following coverage thresholds:
- Statements: 40%
- Branches: 40%
- Functions: 40%
- Lines: 40%

Coverage reports are generated in the `coverage/` directory.

## Writing Tests

### Test Utilities

Custom test utilities are available in `src/__tests__/test-utils.tsx`. These utilities provide:
- Pre-configured MUI Theme Provider
- CSS Baseline setup
- Custom render function with all necessary providers

Example usage:
```typescript
import { render, screen } from '@/__tests__/test-utils';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Component Testing Best Practices

1. **Use accessible queries**: Prefer `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
2. **Test user behavior**: Focus on what users see and do, not implementation details
3. **Mock external dependencies**: Mock Next.js router, API calls, and other external services
4. **Use getAllBy for duplicated elements**: When testing responsive components that render multiple times (mobile/desktop), use `getAllByText` instead of `getByText`

### Example Test

```typescript
import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import MyButton from '../MyButton';

describe('MyButton', () => {
  it('renders with correct label', () => {
    render(<MyButton label="Click me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Test Configuration

### Jest Configuration

The Jest configuration is in `jest.config.ts` and includes:
- TypeScript support via `ts-jest`
- Next.js integration
- Module path mapping for `@/` imports
- Coverage collection from `src/` directory
- jsdom test environment for React components

### Test Setup

The test setup file `jest.setup.ts` includes:
- `@testing-library/jest-dom` for DOM assertions
- Mock for Next.js navigation (`useRouter`, `usePathname`, `useSearchParams`)
- Mock for `window.matchMedia` for responsive design testing

## Continuous Integration

Tests are automatically run on:
- Pull requests to `main` branch
- Pushes to `main` and `develop` branches

The CI workflow:
1. Installs dependencies
2. Runs linter
3. Runs tests with coverage
4. Uploads coverage to Codecov (optional)
5. Builds the application

See `.github/workflows/test.yml` for the complete CI configuration.

## Debugging Tests

### Running Specific Tests

```bash
# Run a specific test file
npm test -- Navigation.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="renders navigation items"

# Run tests in a specific directory
npm test -- src/components
```

### Debugging Tips

1. **Use `screen.debug()`**: Print the current DOM state
   ```typescript
   render(<MyComponent />);
   screen.debug(); // Prints current DOM
   ```

2. **Check what's rendered**: Use `screen.logTestingPlaygroundURL()` for an interactive view
   ```typescript
   render(<MyComponent />);
   screen.logTestingPlaygroundURL();
   ```

3. **Verbose output**: Run tests with `--verbose` flag
   ```bash
   npm test -- --verbose
   ```

## Current Test Coverage

The project currently has tests for:
- ✅ Core components (Navigation, UniversalOpportunitiesText, ThemeSwitcher, LinkBehavior)
- ✅ Home page
- ✅ Theme configuration
- ⚠️  Additional page tests needed (portal, rovers, planets, etc.)
- ⚠️  Integration tests needed
- ⚠️  E2E tests needed (future consideration)

## Future Testing Plans

1. **Increase coverage**: Add tests for remaining pages and components
2. **Integration tests**: Test component interactions and data flow
3. **Visual regression tests**: Consider adding screenshot testing
4. **E2E tests**: Add Playwright or Cypress for end-to-end testing
5. **Performance tests**: Add tests for performance-critical components

## Troubleshooting

### Common Issues

1. **"Cannot find module '@/__tests__/test-utils'"**
   - Make sure the path alias is correctly configured in `jest.config.ts`
   - Check that the file exists at `src/__tests__/test-utils.tsx`

2. **"Found multiple elements with the text"**
   - Use `getAllByText` instead of `getByText` for elements that appear multiple times
   - This is common in responsive designs with mobile/desktop variants

3. **Theme-related errors**
   - Ensure you're using the custom `render` function from `test-utils.tsx`
   - This includes the necessary Theme Provider setup

4. **Mock-related errors**
   - Check that all necessary mocks are set up in the test file or `jest.setup.ts`
   - Common mocks: Next.js router, window.matchMedia, external APIs

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing/jest)
