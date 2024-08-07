'use client';

import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';
import GlobalStyles from '@/app/globalStyles';
import { MainContextProvider } from '@/context';
import { useTheme } from '@/hooks/useTheme';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={propName => isValidProp(propName)}>
      <ThemeProvider theme={theme}>
        <MainContextProvider>
          <GlobalStyles />
          {children}
        </MainContextProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
};
