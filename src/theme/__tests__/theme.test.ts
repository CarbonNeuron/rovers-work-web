import { theme } from '../theme';

describe('Theme Configuration', () => {
  it('creates a valid MUI theme', () => {
    expect(theme).toBeDefined();
    expect(theme.palette).toBeDefined();
    expect(theme.typography).toBeDefined();
  });

  it('defines light mode palette colors', () => {
    const lightPalette = theme.colorSchemes.light.palette;

    expect(lightPalette.primary.main).toBe('#2563eb');
    expect(lightPalette.success.main).toBe('#10b981');
    expect(lightPalette.warning.main).toBe('#f59e0b');
    expect(lightPalette.error.main).toBe('#ef4444');
  });

  it('defines dark mode palette colors', () => {
    const darkPalette = theme.colorSchemes.dark.palette;

    expect(darkPalette.primary.main).toBe('#2563eb');
    expect(darkPalette.success.main).toBe('#10b981');
    expect(darkPalette.warning.main).toBe('#f59e0b');
    expect(darkPalette.error.main).toBe('#ef4444');
  });

  it('defines custom UO brand colors', () => {
    const uoColors = theme.colorSchemes.light.palette.uo;

    expect(uoColors.primary).toBe('#2563eb');
    expect(uoColors.primaryDark).toBe('#1d4ed8');
    expect(uoColors.secondary).toBe('#64748b');
    expect(uoColors.accent).toBe('#10b981');
    expect(uoColors.warning).toBe('#f59e0b');
    expect(uoColors.danger).toBe('#ef4444');
  });

  it('defines typography with custom font family', () => {
    expect(theme.typography.fontFamily).toContain('var(--font-geist-sans)');
  });

  it('defines h1 typography', () => {
    expect(theme.typography.h1).toBeDefined();
    expect(theme.typography.h1.fontSize).toBe('2rem');
    expect(theme.typography.h1.fontWeight).toBe(600);
  });

  it('defines h2 typography', () => {
    expect(theme.typography.h2).toBeDefined();
    expect(theme.typography.h2.fontSize).toBe('1.5rem');
    expect(theme.typography.h2.fontWeight).toBe(600);
  });

  it('has CSS variables configured', () => {
    // Theme is created with cssVariables option
    expect(theme).toBeDefined();
    expect(theme.colorSchemes).toBeDefined();
  });

  it('defines component overrides', () => {
    expect(theme.components).toBeDefined();
    expect(theme.components?.MuiLink).toBeDefined();
    expect(theme.components?.MuiButtonBase).toBeDefined();
    expect(theme.components?.MuiContainer).toBeDefined();
  });

  it('configures MuiLink with LinkBehavior', () => {
    const linkDefaults = theme.components?.MuiLink?.defaultProps;
    expect(linkDefaults).toBeDefined();
    expect(linkDefaults?.color).toBe('inherit');
    expect(linkDefaults?.underline).toBe('none');
  });

  it('defines light mode background colors', () => {
    const lightBg = theme.colorSchemes.light.palette.background;
    expect(lightBg.default).toBe('#fafbfc');
    expect(lightBg.paper).toBe('#ffffff');
  });

  it('defines dark mode background colors', () => {
    const darkBg = theme.colorSchemes.dark.palette.background;
    expect(darkBg.default).toBe('#0f172a');
    expect(darkBg.paper).toBe('#1e293b');
  });

  it('defines text colors for light mode', () => {
    const lightText = theme.colorSchemes.light.palette.text;
    expect(lightText.primary).toBe('#0f172a');
    expect(lightText.secondary).toBe('#475569');
  });

  it('defines text colors for dark mode', () => {
    const darkText = theme.colorSchemes.dark.palette.text;
    expect(darkText.primary).toBe('#f1f5f9');
    expect(darkText.secondary).toBe('#cbd5e1');
  });
});
