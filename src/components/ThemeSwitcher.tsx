'use client';

import React, { useEffect, useRef } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { SxProps, Theme, useColorScheme } from '@mui/material/styles';

interface ThemeSwitcherProps {
  sx?: SxProps<Theme>;
}

export default function ThemeSwitcher({ sx = [] }: ThemeSwitcherProps) {
  const { mode, setMode } = useColorScheme();
  const statusRef = useRef<HTMLSpanElement>(null);
  const previousModeRef = useRef<string | null>(null);

  const handleThemeToggle = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Allow space and enter to toggle theme
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleThemeToggle();
    }
  };

  const currentTheme = mode || 'light'; // Fallback to light if mode is undefined
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Announce theme changes to screen readers
  useEffect(() => {
    if (
      previousModeRef.current !== null &&
      previousModeRef.current !== currentTheme
    ) {
      if (statusRef.current) {
        statusRef.current.textContent = `Theme changed to ${currentTheme} mode`;
      }
    }
    previousModeRef.current = currentTheme;
  }, [currentTheme]);

  return (
    <IconButton
      sx={[
        {
          color: 'inherit',
        },
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={handleThemeToggle}
      onKeyDown={handleKeyDown}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-checked={currentTheme === 'dark'}
      aria-describedby="theme-status"
      role="switch"
      title={`Currently in ${currentTheme} mode. Click to switch to ${nextTheme} mode.`}
      tabIndex={0}
    >
      <LightMode
        sx={theme => ({
          ...theme.applyStyles('light', {
            display: 'none',
          }),
        })}
        aria-hidden="true"
        focusable="false"
      />
      <DarkMode
        sx={theme => ({
          ...theme.applyStyles('dark', {
            display: 'none',
          }),
        })}
        aria-hidden="true"
        focusable="false"
      />
      {/* Screen reader only text for live announcements */}
      <span
        ref={statusRef}
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        aria-live="polite"
        aria-atomic="true"
        id="theme-status"
        role="status"
      >
        {/* Content will be updated by useEffect */}
      </span>
    </IconButton>
  );
}
