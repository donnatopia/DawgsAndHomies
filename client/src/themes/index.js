import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './buttonTheme.js';
import { inputTheme } from './inputTheme.js';

const theme = extendTheme({
  colors: {
    brand: {
      darkpink: '#E66262',
      babypink: '#F4A9A9',
      lightpink: '#FFF1F1',
    },
    pink: {
      100: '#FFF1F1',
      200: '#F4A9A9',
      300: '#E66262',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Karla',
        color: '#191818',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Karla',
        color: '#3D3B3B',
      },
    },
    FormLabel: {
      baseStyle: {
        fontFamily: 'Karla',
        color: 'pink.100',
        fontSize: 20,
      },
    },
    Input: inputTheme,
    Button: buttonTheme,
  },
});

export default theme;
