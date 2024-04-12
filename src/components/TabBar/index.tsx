import {
  ParamListBase,
  Route,
  TabNavigationState,
  useTheme as useThemeNav,
} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabBar, TabBarIndicator} from 'react-native-tab-view';

import type {MaterialTopTabBarProps} from './types';
import {useTheme} from 'tamagui';

export default function ThemedTabBar({
  state,
  navigation,
  descriptors,
  ...rest
}: MaterialTopTabBarProps) {
  const {colors} = useThemeNav();
  const tamagui = useTheme();

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const activeColor =
    focusedOptions.tabBarActiveTintColor ?? tamagui.color11.val;
  const inactiveColor =
    focusedOptions.tabBarInactiveTintColor ?? tamagui.background.val;

  return (
    <TabBar
      {...rest}
      navigationState={state}
      scrollEnabled={focusedOptions.tabBarScrollEnabled}
      bounces={focusedOptions.tabBarBounces}
      activeColor={activeColor}
      inactiveColor={inactiveColor}
      pressColor={focusedOptions.tabBarPressColor}
      pressOpacity={focusedOptions.tabBarPressOpacity}
      tabStyle={focusedOptions.tabBarItemStyle}
      indicatorStyle={[
        {backgroundColor: tamagui.color10.val},
        focusedOptions.tabBarIndicatorStyle,
      ]}
      gap={focusedOptions.tabBarGap}
      android_ripple={focusedOptions.tabBarAndroidRipple}
      indicatorContainerStyle={focusedOptions.tabBarIndicatorContainerStyle}
      contentContainerStyle={focusedOptions.tabBarContentContainerStyle}
      style={[
        {backgroundColor: tamagui.color6.val},
        focusedOptions.tabBarStyle,
      ]}
      getAccessibilityLabel={({route}) =>
        descriptors[route.key].options.tabBarAccessibilityLabel
      }
      getTestID={({route}) => descriptors[route.key].options.tabBarTestID}
      onTabPress={({route, preventDefault}) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        }
      }}
      onTabLongPress={({route}) =>
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        })
      }
      renderIcon={({route, focused, color}) => {
        const {options} = descriptors[route.key];

        if (options.tabBarShowIcon === false) {
          return null;
        }

        if (options.tabBarIcon !== undefined) {
          const icon = options.tabBarIcon({focused, color});

          return (
            <View style={[styles.icon, options.tabBarIconStyle]}>{icon}</View>
          );
        }

        return null;
      }}
      renderLabel={({route, focused, color}) => {
        const {options} = descriptors[route.key];

        if (options.tabBarShowLabel === false) {
          return null;
        }

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : (route as Route<string>).name;

        if (typeof label === 'string') {
          return (
            <Text
              style={[styles.label, {color}, options.tabBarLabelStyle]}
              allowFontScaling={options.tabBarAllowFontScaling}>
              {label}
            </Text>
          );
        }

        const children =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return label({focused, color, children});
      }}
      renderBadge={({route}) => {
        const {tabBarBadge} = descriptors[route.key].options;

        return tabBarBadge?.() ?? null;
      }}
      renderIndicator={({navigationState: state, ...rest}) => {
        return focusedOptions.tabBarIndicator ? (
          focusedOptions.tabBarIndicator({
            state: state as TabNavigationState<ParamListBase>,
            ...rest,
          })
        ) : (
          <TabBarIndicator navigationState={state} {...rest} />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent',
  },
});
