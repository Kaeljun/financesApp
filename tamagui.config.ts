// @tamagui/core doesn't include `createMedia` so that it can avoid

// a dependency on react-native. If you are using tamagui, you can

// import createMedia from there directly and avoid this line:

import {createMedia} from '@tamagui/react-native-media-driver';
import {config as defaultConfig} from '@tamagui/config/v3';

import {createFont, createTamagui, createTokens} from 'tamagui';
import {color, radius, size, space, themes, zIndex} from '@tamagui/themes';
// Create a font:
// To work with the tamagui UI kit styled components (which is optional)

// you'd want the keys used for `size`, `lineHeight`, `weight` and

// `letterSpacing` to be consistent. The `createFont` function

// will fill-in any missing values if `lineHeight`, `weight` or

// `letterSpacing` are subsets of `size`.

// Set up our tokens
// The keys can be whatever you want, but we do recommend keeping them

// consistent across the different token categories and intended for

// usage together to make nice designs - eg for a Button to use.

export const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
});

const config = createTamagui({
  ...defaultConfig,
  themes,
  tokens,
  // ... see Configuration
});

type AppConfig = typeof config;
// this will give you types for your components

// note - if using your own design system, put the package name here instead of tamagui

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}
export default config;
