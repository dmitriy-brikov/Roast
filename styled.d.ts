import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      /**
       * #FF6032
       */
      orange: string;
      /**
       * #1F1F1F
       */
      primary: string;
      /**
       * #FFFFFF
       */
      primaryText;
      /**
       * #000000
       */
      secondaryText;
    };
  }
}
