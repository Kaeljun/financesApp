import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';
import ThemedTabBar from '../components/TabBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage} from '../pages/login';
import CustomHeader from '../components/Header';
import {View, useTheme} from 'tamagui';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const tamagui = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => {
          return <View bg="$color7" f={1}></View>;
        },
        headerTitleAlign: 'center',
        animation: 'default',
        headerTintColor: tamagui.color12.val,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="Tela 1" component={Home} />
      <Stack.Screen name="Tela 2" component={LoginPage} />
    </Stack.Navigator>
  );
}

export function BottomTabs() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBar={props => {
        return <ThemedTabBar {...props} />;
      }}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
