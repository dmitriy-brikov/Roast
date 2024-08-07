'use client';

import { DefaultTheme } from 'styled-components';

export const useTheme = () => {
  const theme: DefaultTheme = {
    colors: {
      orange: '#FF6032',
      primaryText: '#FFFFFF',
      secondaryText: '#000000',
      primary: '#1F1F1F',
    },
  };

  return theme;
};
