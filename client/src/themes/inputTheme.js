import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: 'full',
    fontFamily: 'Karla',
    color: 'white',
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
