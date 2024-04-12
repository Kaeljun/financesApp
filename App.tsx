/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {TamaguiProvider, Theme, ThemeName, useTheme} from 'tamagui';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {BottomTabs} from './src/routes/routes';
import config from './tamagui.config';
import {useThemeStore} from './src/context/theme.context';

function App(): React.JSX.Element {
  const {themeColor} = useThemeStore();
  const isDarkMode = useColorScheme() === 'dark';
  const themeStyle = isDarkMode ? 'dark' : 'light';

  const theme: ThemeName =
    themeColor === 'neutral' ? themeStyle : `${themeStyle}_${themeColor}`;

  return (
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}

export default App;
