import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  borderRadius: 'full',
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.15s ease-out, background 0.15s ease-out',
});

const primaryVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.100`,
    color: `${c}.300`,
    _hover: {
      transform: 'scale(1.05, 1.05)',
      bg: `${c}.200`,
    },
  };
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    primary: primaryVariant,
  },
  defaultProps: {
    colorScheme: 'pink',
  },
});
