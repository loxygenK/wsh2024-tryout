import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { Color } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: ${Color.MONO_A};
    overflow: visible;
  }

  body.modal-on {
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
`;
